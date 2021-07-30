<?php

namespace App\Http\Controllers\Traits;

use Intervention\Image\Facades\Image;
use Illuminate\Support\Facades\Storage;

trait WithImages
{

    private $image;
    private $widths;
    private $image_name;

    /**
     * Undocumented function
     *
     * @param \Illuminate\Http\UploadedFile $image
     * @return string
     */
    protected function storeImage(\Illuminate\Http\UploadedFile $image)
    {
        $this->image = $image;
        $path = $this->image->store('public');
        $this->image_name = str_replace('public/', '', $path);

        $this->createResizedImage('thumbs', 150);
        $this->createResizedImage('small', 400);
        $this->createResizedImage('medium', 800);

        return $this->image_name;
    }

    /**
     * Undocumented function
     *
     * @param string $image_name
     * @return void
     */
    protected function deleteImage($image_name)
    {
        if ($image_name == 'user.png' || $image_name == 'no-image.png') {
            return;
        }
        Storage::delete('public/' . $image_name);
        Storage::delete('public/thumbs' . $image_name);
        Storage::delete('public/small' . $image_name);
        Storage::delete('public/medium' . $image_name);
    }

    /**
     * Undocumented function
     *
     * @param string $folder
     * @param integer $width
     * @return void
     */
    private function createResizedImage($folder, $width)
    {
        $resized = Image::make($this->image)->resize($width, null, function ($constraint) {
            $constraint->aspectRatio();
        });
        $resized->save("../storage/app/public/{$folder}/$this->image_name");
    }
}
