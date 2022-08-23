<?php

namespace App\Http\Controllers;

use App\Http\Resources\ToolResource;
use App\Models\Tool;
use App\Http\Requests\StoreToolRequest;
use App\Http\Requests\UpdateToolRequest;
use Illuminate\Http\Request;
use phpDocumentor\Reflection\Types\Resource_;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;

class ToolController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $user = $request->user();
        return ToolResource::collection(Tool::where('user_id', $user->id)->paginate(10));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \App\Http\Requests\StoreToolRequest $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreToolRequest $request)
    {
        $data = $request->validated();

        if (isset($data['image'])) {
            $relativePath = $this->saveImage($data['image']);
            $data['image'] = $relativePath;
        }

        $tool = Tool::create($data);

        return new ToolResource($tool);
    }


    /**
     * Display the specified resource.
     *
     * @param \App\Models\Tool $tool
     * @return \Illuminate\Http\Response
     */
    public function show(Tool $tool, Request $request)
    {
        $user = $request->user();
        if ($user->id !== $tool->user_id) {
            return abort(403, 'Unauthorized action.');
        }
        return new ToolResource($tool);
    }
    /**
     * Display the specified resource.
     *
     * @param \App\Models\Tool $tool
     * @return \Illuminate\Http\Response
     */
    public function showForGuest(Tool $tool)
    {

        return new ToolResource($tool);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \App\Http\Requests\UpdateToolRequest $request
     * @param \App\Models\Tool $tool
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateToolRequest $request, Tool $tool)
    {
        $data = $request->validated();

        if (isset($data['image'])) {
            $relativePath = $this->saveImage($data['image']);
            $data['image'] = $relativePath;

            if ($tool->image) {
                $absolutePath = public_path($tool->image);
                File::delete($absolutePath);
            }
        }

        $tool->update($data);
        return new ToolResource($tool);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\Tool $tool
     * @return \Illuminate\Http\Response
     */
    public function destroy(Tool $tool, Request $request)
    {
        $user = $request->user();
        if ($user->id !== $tool->user_id) {
            return abort(403, 'Unauthorized action.');
        }

        if ($tool->image) {
            $absolutePath = public_path($tool->image);
            File::delete($absolutePath);
        }

        $tool->delete();
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
