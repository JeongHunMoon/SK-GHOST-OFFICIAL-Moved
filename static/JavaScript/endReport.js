function showInputPopup() {
    // Create a wrapper for the input fields
    var inputWrapper = document.createElement('div');
    inputWrapper.id = 'inputWrapper';
    inputWrapper.innerHTML = `
        <div class="inputRow">
            <div class="inputColumn">
                <label class="inputLabel" for="value1">SOP: New</label>
                <input type="text" class="inputField" id="value1">
            </div>
            <div class="inputColumn">
                <label class="inputLabel" for="value2">ITS: New</label>
                <input type="text" class="inputField" id="value2">
            </div>
        </div>
        <div class="inputRow">
            <div class="inputColumn">
                <label class="inputLabel" for="value3">Done</label>
                <input type="text" class="inputField" id="value3">
            </div>
            <div class="inputColumn">
                <label class="inputLabel" for="value4">Done</label>
                <input type="text" class="inputField" id="value4">
            </div>
        </div>
        <div class="inputRow">
            <div class="inputColumn">
                <label class="inputLabel" for="value5">Open</label>
                <input type="text" class="inputField" id="value5">
            </div>
            <div class="inputColumn">
                <label class="inputLabel" for="value6">Waiting</label>
                <input type="text" class="inputField" id="value6">
            </div>
        </div>

        <div class="inputRow">
            <div class="inputColumn">
                <label class="inputLabel" for="value7">Transferred</label>
                <input type="text" class="inputField" id="value7">
            </div>
            <div class="inputColumn">
                <label class="inputLabel" for="value8">Transferred</label>
                <input type="text" class="inputField" id="value8">
            </div>
        </div>

        <button id="submitButton" onclick="submitValues()">Submit</button>
        <button id="cancelButton" onclick="cancelInput()">Cancel</button>
    `;

    // Append the input fields to the body
    document.body.appendChild(inputWrapper);
}

function submitValues() {
    // Get the input values
    var values = [];
    for (var i = 1; i <= 8; i++) {
        var inputValue = document.getElementById('value' + i).value.trim();
        values.push(inputValue);
    }

    // Check if values are valid numbers
    for (var i = 0; i < values.length; i++) {
        if (!isValidNumber(values[i])) {
            alert('Please enter valid numeric values.');
            return; // Stop execution if values are not valid
        }
    }
    document.body.removeChild(document.getElementById('inputWrapper'));

    // Log the values to the console
    console.log('Values:', values);
    return values;

    // Remove the input fields and wrapper from the body

}

function cancelInput() {
    // Clear input fields
    for (var i = 1; i <= 8; i++) {
        document.getElementById('value' + i).value = '';
    }

    // Remove the input fields and wrapper from the body
    document.body.removeChild(document.getElementById('inputWrapper'));
}

function isValidNumber(value) {
    // Check if the value is a valid number
    return !isNaN(value) || value === '';
}


function endReport() {

    //  팝업창을 먼저 띄우고, 3개 입력 받게 한다.
    // 입력 받은 3개 값을 나에게 메시지 보내기로 보내면 된다.

    let endReportText = null

    endReportText = showInputPopup()
    console.log("---")
    console.log(endReportText)

    Kakao.API.request({
        url: '/v2/api/talk/memo/default/send',
        data: {
            template_object: {
                object_type: 'text',
                text: endReportText,
                link: {
                    // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
                    mobile_web_url: 'http://3.145.154.90:8080', // //https://developers.kakao.com
                    web_url: 'http://3.145.154.90:8080'
                },
            },
        },
    })
        .then(function (res) {
            alert('success: ' + JSON.stringify(res));
        })
        .catch(function (err) {
            alert('error: ' + JSON.stringify(err));
        });
}
