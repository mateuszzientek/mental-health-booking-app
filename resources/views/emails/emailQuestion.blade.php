<div style="width: 100%; background-color: white; padding: 5rem 0">
    <div style="max-width: 700px; background-color: white; margin: 0 auto">
        <div style="width: 100%; background-color: #00efbc; padding: 20px 0"></div>

        <div style="width: 100%; gap: 10px; padding: 40px 0; display: grid">

            <p style="font-weight: 800; font-size: 1.25rem; padding: 0 30px">
                Question from MentalWell
            </p>
            <div style="font-size: .8rem; margin: 0 30px">
                <p>Name: <b>
                        {{ $emailData['name'] }} {{ $emailData['surname'] }}
                    </b></p>
                <p>Email: <b>
                        {{ $emailData['email'] }}
                    </b></p>
                <p>Message: <b>
                        {{ $emailData['content'] }}
                    </b></p>
            </div>
        </div>
    </div>
</div>
