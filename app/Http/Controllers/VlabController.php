<?php

namespace App\Http\Controllers;

use App\Http\Resources\VlabResource;
use App\Models\Vlab;
use App\Http\Requests\StoreVlabRequest;
use App\Http\Requests\UpdateVlabRequest;
use Illuminate\Http\Request;
use phpDocumentor\Reflection\Types\Resource_;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;

class VlabController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)

    {
        return VlabResource::collection(Vlab::where('status', 'Published')->paginate(10));

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \App\Http\Requests\StoreVlabRequest $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreVlabRequest $request)
    {
        $data = $request->validated();

        if (isset($data['image'])) {
            $relativePath = $this->saveImage($data['image']);
            $data['image'] = $relativePath;
        }

        $vlab = Vlab::create($data);

        return new VlabResource($vlab);
    }


    /**
     * Display the specified resource.
     *
     * @param \App\Models\Vlab $vlab
     * @return \Illuminate\Http\Response
     */
    public function show(Vlab $vlab, Request $request)
    {
        $user = $request->user();
        if ($user->id !== $vlab->user_id) {
            return abort(403, 'Unauthorized action.');
        }
        return new VlabResource($vlab);
    }
    /**
     * Display the specified resource.
     *
     * @param \App\Models\Vlab $vlab
     * @return \Illuminate\Http\Response
     */
    public function showForGuest(Vlab $vlab)
    {

        return new VlabResource($vlab);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \App\Http\Requests\UpdateVlabRequest $request
     * @param \App\Models\Vlab $vlab
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateVlabRequest $request, Vlab $vlab)
    {
        $data = $request->validated();

        if (isset($data['image'])) {
            $relativePath = $this->saveImage($data['image']);
            $data['image'] = $relativePath;

            if ($vlab->image) {
                $absolutePath = public_path($vlab->image);
                File::delete($absolutePath);
            }
        }

        $vlab->update($data);
        return new VlabResource($vlab);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\Vlab $vlab
     * @return \Illuminate\Http\Response
     */
    public function destroy(Vlab $vlab, Request $request)
    {
        $user = $request->user();
        if ($user->id !== $vlab->user_id) {
            return abort(403, 'Unauthorized action.');
        }

        if ($vlab->image) {
            $absolutePath = public_path($vlab->image);
            File::delete($absolutePath);
        }

        $vlab->delete();
        return response('', 204);
    }

    private function saveImage($image)
    {
        //check if image is valid base64 string
        if (preg_match('/^data:image\/(\w+);base64,/', $image, $type)) {
            $image = substr($image, strpos($image, ',') + 1);
            //file extension
            $type = strtolower($type[1]); //jpg, png, gif

            if (!in_array($type, ['jpg', 'jpeg', 'gif', 'png', 'webp'])) {
                throw new \Exception('invalid image type');
            }
            $image = str_replace(' ', '+', $image);
            $image = base64_decode($image);

            if ($image === false) {
                throw new \Exception('base64_decode failed');
            }
        } else {
            throw new \Exception('did not match data URL with image data');
        }

        $dir = 'images/';
        $file = Str::random() . '.' . $type;
        $absolutePath = public_path($dir);
        $relativePath = $dir . $file;

        if (!File::exists($absolutePath)) {
            File::makeDirectory($absolutePath, 0755, true);
        }
        file_put_contents($relativePath, $image);

        return $relativePath;
    }


}
