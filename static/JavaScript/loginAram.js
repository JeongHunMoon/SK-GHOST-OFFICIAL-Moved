function loginAram(profile, name) {
    const loginAlarmDiv = document.createElement('div');
    loginAlarmDiv.id = 'loginAlarm';
    document.body.appendChild(loginAlarmDiv);

    // 생성된 div에 스타일 추가
    loginAlarmDiv.style.position = 'absolute';
    loginAlarmDiv.style.top = '-20%'; /* 최상단으로 이동하여 처음에는 보이지 않도록 조정 */
    loginAlarmDiv.style.left = '50%';
    loginAlarmDiv.style.transform = 'translateX(-50%)';
    loginAlarmDiv.style.width = '10vw';
    loginAlarmDiv.style.height = '10vw';

    loginAlarmDiv.style.maxWidth = '80px';
    loginAlarmDiv.style.maxHeight = '80px';

    loginAlarmDiv.style.minWidth = '50px';
    loginAlarmDiv.style.minHeight = '50px';

    loginAlarmDiv.style.borderRadius = '50%';
    loginAlarmDiv.style.overflow = 'hidden';
    loginAlarmDiv.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)'; // 그림자 추

    // 이미지 추가
    const image = document.createElement('img');
    image.src = profile; // 이미지 경로를 수정해주세요
    image.style.width = '100%';
    image.style.height = '100%';
    loginAlarmDiv.appendChild(image);

    // span 태그를 원 밖으로 이동
    const nameSpan = document.createElement('span');
    nameSpan.style.position = 'absolute';
    nameSpan.style.top = '-5%'; /* 최상단으로 이동하여 처음에는 보이지 않도록 조정 */
    nameSpan.style.left = '50%';
    nameSpan.style.transform = 'translateX(-50%)';
    nameSpan.style.fontSize = '17px';
    nameSpan.style.color = '#000000'; // 검정색
    nameSpan.style.textAlign = 'center';
    nameSpan.style.fontWeight = 'bold'; // 볼드
    nameSpan.textContent = name;
    document.body.appendChild(nameSpan);

    // 애니메이션 추가
    loginAlarmDiv.style.animation = 'loginAlarmAnimation 4s ease-in-out 0s 1';
    nameSpan.style.animation = 'loginAlarmAnimation 4s ease-in-out 0.5s 1';

    // 애니메이션 키프레임 추가
    const styleSheet = document.styleSheets[0];
    const keyframes = `
        @keyframes loginAlarmAnimation {
            0% {
                top: -20%;
                opacity: 1;
            }

            25% {
                top: 50px;
                opacity: 1;
            }

            50% {
                top: 50px;
                opacity: 1;
            }

            75% {
                top: 50px;
                opacity: 1;
            }

            100% {
                top: -20%;
                opacity: 1;
            }
        }
    `;

    try {
        styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
    } catch (error) {
        // insertRule이 지원되지 않는 경우, addRule 사용
        styleSheet.addRule('loginAlarmAnimation', keyframes, styleSheet.cssRules.length);
    }
    // 0.5초 후에 오디오 재생
    setTimeout(function () {
        let audio = new Audio('../../sound/sound2.mp3');
        audio.play();
    }, 500);
}
