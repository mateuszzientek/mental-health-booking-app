<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PersonalDataRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'month' => 'required|string',
            'day' => 'required|numeric',
            'year' => 'required|numeric',
            'name' => 'required|string|alpha|max:55',
            'surname' => 'required|string|alpha|max:55',
            'gender' => 'required|string',
            'phoneNumber' => [
                'required',
                'size:9',
                'regex:/^[0-9]*$/'
            ]

        ];
    }

    public function messages()
    {
        return [
            'phoneNumber.regex' => 'Incorrect phone number'
        ];
    }
}
