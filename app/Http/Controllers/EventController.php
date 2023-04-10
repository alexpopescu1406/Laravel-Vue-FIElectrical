<?php

namespace App\Http\Controllers;

use App\Http\Resources\EventResource;
use App\Models\Event;
use App\Http\Requests\StoreEventRequest;
use App\Http\Requests\UpdateEventRequest;
use Illuminate\Http\Request;
use phpDocumentor\Reflection\Types\Resource_;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use App\Models\EventInstructor;

class EventController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return EventResource::collection(Event::where('status', 'Published')->paginate(10));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \App\Http\Requests\StoreEventRequest $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreEventRequest $request)
    {
        $data = $request->validated();

        if (isset($data['image'])) {
            $relativePath = $this->saveImage($data['image']);
            $data['image'] = $relativePath;
        }

        $event = Event::create($data);

        return new EventResource($event);
    }


    /**
     * Display the specified resource.
     *
     * @param \App\Models\Event $event
     * @return \Illuminate\Http\Response
     */
    public function show(Event $event, Request $request)
    {
        $user = $request->user();
        if ($user->id !== $event->user_id) {
            return abort(403, 'Unauthorized action.');
        }
        return new EventResource($event);
    }
    /**
     * Display the specified resource.
     *
     * @param \App\Models\Event $event
     * @return \Illuminate\Http\Response
     */
    public function showForGuest(Event $event)
    {

        return new EventResource($event);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \App\Http\Requests\UpdateEventRequest $request
     * @param \App\Models\Event $event
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateEventRequest $request, Event $event)
    {
        $data = $request->validated();

        if (isset($data['image'])) {
            $relativePath = $this->saveImage($data['image']);
            $data['image'] = $relativePath;

            if ($event->image) {
                $absolutePath = public_path($event->image);
                File::delete($absolutePath);
            }
        }

        $event->update($data);
        // Get ids as plain array of existing questions
        $existingIds = $event->instructors()->pluck('id')->toArray();
        // Get ids as plain array of new questions
        $newIds = Arr::pluck($data['instructors'], 'id');
        // Find questions to delete
        $toDelete = array_diff($existingIds, $newIds);
        //Find questions to add
        $toAdd = array_diff($newIds, $existingIds);

        // Delete questions by $toDelete array
        EventInstructor::destroy($toDelete);

        // Create new questions
        foreach ($data['instructors'] as $instructor) {
            if (in_array($instructor['id'], $toAdd)) {
                $instructor['event_id'] = $event->id;
                $this->createInstructor($instructor);
            }
        }

        // Update existing questions
        $instructorMap = collect($data['instructors'])->keyBy('id');
        foreach ($event->instructors as $instructor) {
            if (isset($instructorMap[$instructor->id])) {
                $this->updateInstructor($instructor, $instructorMap[$instructor->id]);
            }
        }
        return new EventResource($event);
    }

    private function createInstructor($data)
    {
        if (is_array($data['data'])) {
            $data['data'] = json_encode($data['data']);
        }
        $validator = Validator::make($data, [
            'instructor' => 'required|string',
            'type' => ['required', Rule::in([
                Event::TYPE_TEXT,
                Event::TYPE_TEXTAREA,
                Event::TYPE_SELECT,
                Event::TYPE_RADIO,
                Event::TYPE_CHECKBOX,
            ])],
            'description' => 'nullable|string',
            'data' => 'present',
            'event_id' => 'exists:App\Models\Event,id'
        ]);

        return EventInstructor::create($validator->validated());
    }
    private function updateInstructor(EventInstructor $instructor, $data)
    {
        if (is_array($data['data'])) {
            $data['data'] = json_encode($data['data']);
        }
        $validator = Validator::make($data, [
            'id' => 'exists:App\Models\EventInstructor,id',
            'question' => 'required|string',
            'type' => ['required', Rule::in([
                Event::TYPE_TEXT,
                Event::TYPE_TEXTAREA,
                Event::TYPE_SELECT,
                Event::TYPE_RADIO,
                Event::TYPE_CHECKBOX,
            ])],
            'description' => 'nullable|string',
            'data' => 'present',
        ]);

        return $instructor->update($validator->validated());
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\Event $event
     * @return \Illuminate\Http\Response
     */
    public function destroy(Event $event, Request $request)
    {
        $user = $request->user();
        if ($user->id !== $event->user_id) {
            return abort(403, 'Unauthorized action.');
        }

        if ($event->image) {
            $absolutePath = public_path($event->image);
            File::delete($absolutePath);
        }

        $event->delete();
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
