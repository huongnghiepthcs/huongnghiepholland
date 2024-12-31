const questions = {
  "Kỹ thuật": [
    {
      question:
        "Nếu có đủ cơ hội và nguồn lực, bạn có thích học công nghệ (thử lắp ráp đồ đạc, máy móc, v.v.)",
    },
    {
      question:
        "Nếu có đủ cơ hội và nguồn lực, bạn có thích thao tác trên máy tính để giải trí hoặc học tập",
    },
    {
      question:
        "Nếu có đủ cơ hội và nguồn lực, bạn có thích sửa chữa vật dụng/đồ dùng cá nhân",
    },
    {
      question:
        "Nếu có đủ cơ hội và nguồn lực, bạn có thích cài đặt và kiểm tra ứng dụng trên điện thoại hoặc máy tính",
    },
    {
      question:
        "Nếu có đủ cơ hội và nguồn lực, bạn có thích chuẩn bị và lắp ráp vật dụng cắm trại, dã ngoại, trại hè",
    },
  ],
  "Nghiên cứu": [
    {
      question:
        "Nếu có đủ cơ hội và nguồn lực, bạn có thích tìm hiểu về chủ đề mình thích qua sách báo hoặc video",
    },
    {
      question:
        "Nếu có đủ cơ hội và nguồn lực, bạn có thích nghiên cứu cách giải quyết vấn đề mà mình quan tâm",
    },
    {
      question:
        "Nếu có đủ cơ hội và nguồn lực, bạn có thích quan sát và phân tích sự vật hoặc hành vi con người",
    },
    {
      question:
        "Nếu có đủ cơ hội và nguồn lực, bạn có thích đặt câu hỏi về chủ đề mình hứng thú",
    },
    {
      question:
        "Nếu có đủ cơ hội và nguồn lực, bạn có thích lý giải vấn đề trong cuộc sống một cách hợp lý (logic)",
    },
  ],
  "Nghiệp vụ": [
    {
      question:
        "Nếu có đủ cơ hội và nguồn lực, bạn có thích sắp xếp và ghi chú bài học theo quy tắc",
    },
    {
      question:
        "Nếu có đủ cơ hội và nguồn lực, bạn có thích tuân thủ luật lệ, quy tắc của trường lớp",
    },
    {
      question:
        "Nếu có đủ cơ hội và nguồn lực, bạn có thích dọn dẹp và sắp xếp bàn học định kỳ",
    },
    {
      question:
        "Nếu có đủ cơ hội và nguồn lực, bạn có thích thực hiện các việc cá nhân theo lịch cố định",
    },
    {
      question:
        "Nếu có đủ cơ hội và nguồn lực, bạn có thích làm việc theo sát quy trình, kế hoạch",
    },
  ],
  "Nghệ thuật": [
    {
      question:
        "Nếu có đủ cơ hội và nguồn lực, bạn có thích tham gia câu lạc bộ âm nhạc, hội họa, văn nghệ",
    },
    {
      question:
        "Nếu có đủ cơ hội và nguồn lực, bạn có thích mô tả các ý tưởng bằng hành động",
    },
    {
      question:
        "Nếu có đủ cơ hội và nguồn lực, bạn có thích Sáng tạo nội dung (âm nhạc, bài văn, tranh ảnh, v.v.) theo cảm hứng",
    },
    {
      question: "Nếu có đủ cơ hội và nguồn lực, bạn có thích học chơi nhạc cụ",
    },
    {
      question:
        "Nếu có đủ cơ hội và nguồn lực, bạn có thích phác họa và vẽ tranh",
    },
  ],
  "Xã hội": [
    {
      question:
        "Nếu có đủ cơ hội và nguồn lực, bạn có thích giảng hòa cuộc tranh cãi giữa những người bạn",
    },
    {
      question:
        "Nếu có đủ cơ hội và nguồn lực, bạn có thích sẵn sàng giúp đỡ mọi người xung quanh",
    },
    {
      question:
        "Nếu có đủ cơ hội và nguồn lực, bạn có thích giúp bạn bè vượt qua trở ngại trong học tập",
    },
    {
      question:
        "Nếu có đủ cơ hội và nguồn lực, bạn có thích làm vui lòng người khác",
    },
    {
      question:
        "Nếu có đủ cơ hội và nguồn lực, bạn có thích quan tâm đến cảm xúc của người xung quanh",
    },
  ],
  "Quản lý": [
    {
      question:
        "Nếu có đủ cơ hội và nguồn lực, bạn có thích trình bày thông tin trước lớp",
    },
    {
      question:
        "Nếu có đủ cơ hội và nguồn lực, bạn có thích giao nhiệm vụ cho thành viên trong nhóm",
    },
    {
      question:
        "Nếu có đủ cơ hội và nguồn lực, bạn có thích đảm nhiệm vai trò quản lý lớp (lớp trưởng, lớp phó, v.v.)",
    },
    {
      question:
        "Nếu có đủ cơ hội và nguồn lực, bạn có thích xung phong làm nhóm trưởng",
    },
    {
      question:
        "Nếu có đủ cơ hội và nguồn lực, bạn có thích dẫn   đầu, dẫn dắt người khác",
    },
  ],
};

const parts = [
  "Kỹ thuật",
  "Nghiên cứu",
  "Nghiệp vụ",
  "Nghệ thuật",
  "Xã hội",
  "Quản lý",
];
let currentPartIndex = 0;
let currentQuestionIndex = 0;
let scores = parts.reduce((acc, part) => ({ ...acc, [part]: 0 }), {});
let selectedScore = null;
let currentFontSize = 16;
let preliminaryAnswer = null;
let selectedCareerGroup = null;

const satisfactionOptions = [
  { text: "Rất thích 🥰", points: 5 },
  { text: "Thích 😊", points: 4 },
  { text: "Bình thường 🤔", points: 3 },
  { text: "Không thích 🙁", points: 2 },
  { text: "Rất không thích 😡", points: 1 },
];

function displayQuestion() {
  const currentPart = parts[currentPartIndex];
  const quizContainer = document.getElementById("quizContainer");
  quizContainer.innerHTML = "";

  const question = questions[currentPart][currentQuestionIndex];

  const questionTitle = document.createElement("h3");
  questionTitle.textContent = `Phần ${currentPart} - Câu hỏi ${
    currentQuestionIndex + 1
  }:`;
  quizContainer.appendChild(questionTitle);

  const questionText = document.createElement("p");
  questionText.textContent = question.question;
  questionText.style.fontSize = `${currentFontSize}px`; // Set dynamic font size
  quizContainer.appendChild(questionText);

  const optionsList = document.createElement("ul");
  optionsList.classList.add("options-list");

  satisfactionOptions.forEach((option) => {
    const optionItem = document.createElement("li");
    const button = document.createElement("button");
    button.classList.add("option");
    button.textContent = option.text;
    button.onclick = () => selectAnswer(option.points, button);
    optionItem.appendChild(button);
    optionsList.appendChild(optionItem);
  });

  quizContainer.appendChild(optionsList);

  const navigationContainer = document.createElement("div");
  navigationContainer.classList.add("navigation-container");

  const backButton = document.createElement("button");
  backButton.id = "backButton";
  backButton.textContent = "Quay lại";
  backButton.classList.add("nav-button");
  backButton.disabled = currentQuestionIndex === 0 && currentPartIndex === 0; // Disabled on the first question of the first part
  backButton.onclick = moveToPreviousQuestion;
  navigationContainer.appendChild(backButton);

  const nextButton = document.createElement("button");
  nextButton.id = "nextButton";
  nextButton.textContent = "Tiếp theo";
  nextButton.classList.add("nav-button");
  nextButton.disabled = true; // Initially disabled
  nextButton.onclick = moveToNextQuestion;
  navigationContainer.appendChild(nextButton);

  quizContainer.appendChild(navigationContainer);
}

function selectAnswer(points, button) {
  selectedScore = points;

  const options = document.querySelectorAll(".option");
  options.forEach((option) => option.classList.remove("selected"));
  button.classList.add("selected");

  document.getElementById("nextButton").disabled = false;
}

function moveToPreviousQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
  } else if (currentPartIndex > 0) {
    currentPartIndex--;
    currentQuestionIndex = questions[parts[currentPartIndex]].length - 1;
  }
  displayQuestion();
}

function moveToNextQuestion() {
  if (selectedScore !== null) {
    scores[parts[currentPartIndex]] += selectedScore;
    selectedScore = null;
  }
  currentQuestionIndex++;
  if (currentQuestionIndex >= questions[parts[currentPartIndex]].length) {
    if (currentPartIndex < parts.length - 1) {
      showTransitionScreen();
    } else {
      displayResult();
    }
  } else {
    displayQuestion();
  }
}

function showTransitionScreen() {
  const quizContainer = document.getElementById("quizContainer");
  quizContainer.innerHTML = `
        <h3>Bạn sắp bắt đầu Phần ${parts[currentPartIndex + 1]}</h3>
        <p>Nhấn nút "Bắt đầu" để tiếp tục bài trắc nghiệm.</p>
        <button id="startNextPartButton" class="start-part-button">Bắt đầu Phần ${
          parts[currentPartIndex + 1]
        }</button>
    `;

  document.getElementById("startNextPartButton").onclick = () => {
    currentPartIndex++;
    currentQuestionIndex = 0;
    if (currentPartIndex == parts.length) {
      displayResult();
    } else {
      displayQuestion();
    }
  };
}

const partDetails = {
  "Kỹ thuật": `<h3 class='title'>Đặc điểm của những người thuộc nhóm Kỹ thuật</h3>
        <p>Là nhóm người thực tế, ưa hành động hơn suy nghĩ, thích khám phá...</p>
        <p><strong>Điểm mạnh:</strong> Là những người trung thực, thẳng thắn và kiên trì trong công việc.</p>
        <p><strong>Điểm cần khắc phục:</strong> Đa phần người thuộc nhóm kỹ thuật bộc trực, hơi khô khan và không giỏi giao tiếp.</p>
        <p><strong>Ngành nghề:</strong> Cơ khí, Ô tô, Điện tử, Điện lạnh; Máy tính, Công nghệ thông tin; Xây dựng,…</p>
        <p><strong>Trải nghiệm ở lớp, trường:</strong> Thực hành sửa các vật dụng đơn giản</p>
        <p><strong>Các môn học cần phát huy:</strong> Công nghệ, vật lý, sinh học,…</p>
        <p><strong>Ở lớp:</strong> Tham gia thực hành các môn như Vật lý, Công nghệ hoặc thể dục, hỗ trợ giáo viên sửa chữa hoặc chuẩn bị thí nghiệm</p>
        <p><strong>Ở trường:</strong> Tham gia câu lạc bộ kỹ thuật, chế tạo mô hình, hoặc các hoạt động về khoa học ứng dụng. Thử sức trong các cuộc thi sáng tạo robot, mô hình cơ khí.</p>
        <p><strong>Ở nhà:</strong>Sửa chữa đồ dùng gia đình hoặc tự làm các dự án DIY (Do-It-Yourself). Trồng cây, làm vườn, chăm sóc thú cưng </p>
        `,
  "Nghiên cứu": `<h3 class='title'>Đặc điểm của những người thuộc nhóm Nghiên cứu</h3>
        <p>Thích phân tích, nghiên cứu sâu mọi vấn đề...</p>
        <p><strong>Điểm mạnh:</strong> ọ thích làm việc với ý tưởng hoặc dữ liệu để sáng tạo nên những giải pháp mới; có khả năng quan sát, phân tích, đánh giá vấn đề một cách logic và có hệ thống.</p>
        <p><strong>Điểm cần khắc phục:</strong> Thích các hoạt động cá nhân hoặc làm việc trong nhóm nhỏ.</p>
        <p><strong>Ngành nghề:</strong> Nhà nghiên cứu Khoa học; Kỹ sư máy tính; Bác sĩ, Dược sĩ,…</p>
        <p><strong>Trải nghiệm ở lớp, trường:</strong> Trải nghiệm tham gia nghiên cứu khoa học</p>
        <p><strong>Các môn học cần phát huy:</strong> Toán, khoa học tự nhiên, tin học, ngoại ngữ,…</p>
        <p><strong>Ở lớp:</strong>Tham gia các bài tập yêu cầu phân tích dữ liệu hoặc thí nghiệm khoa học. Đặt câu hỏi hoặc trình bày quan điểm cá nhân về vấn đề khoa học.</p>
        <p><strong>Ở trường:</strong>Gia nhập các câu lạc bộ nghiên cứu khoa học hoặc câu lạc bộ STEM. Tham gia các cuộc thi học thuật như Olympic Toán, Hóa, Sinh, hoặc tin học.</p>
        <p><strong>Ở nhà:</strong>Đọc sách chuyên ngành, tài liệu học thuật hoặc xem các chương trình khoa học.Tự làm các thí nghiệm nhỏ, sử dụng công cụ như kính hiển vi, phần mềm lập trình. </p>
        `,
  "Nghiệp vụ": `<h3 class='title'>Đặc điểm của những người thuộc nhóm Nghiệp vụ</h3>
        <p>Có tổ chức, logic, định hướng chi tiết...</p>
        <p><strong>Điểm mạnh:</strong> Tận tâm, lịch sự và rất kiên trì với mục tiêu của mình, </p>
        <p><strong>Điểm cần khắc phục:</strong> Cầu toàn trong công việc cũng như muốn làm người khác hài lòng nên rất dễ bị căng thẳng và áp lực </p>
        <p><strong>Ngành nghề:</strong> Kế toán, kiểm toán, thuế, nhân viên ngân hàng, giáo viên,…</p>
        <p><strong>Trải nghiệm ở lớp, trường:</strong> Các trọng trách quan trọng: Thủ quỷ, giữ sổ đầu bài</p>
        <p><strong>Các môn học cần phát huy:</strong> Tin học, toán, ngoại ngữ, giáo dục công dân,…</p>
        <p><strong>Ở lớp:</strong> Hỗ trợ giáo viên quản lý tài liệu, sổ sách hoặc làm thư ký nhóm. Luyện tập làm bài tập logic, thống kê, hoặc quản lý thời gian.</p>
        <p><strong>Ở trường:</strong> Tham gia các câu lạc bộ về quản trị văn phòng, theo dõi sổ sách quỹ, hoặc phân tích dữ liệu. Hỗ trợ tổ chức tài liệu, sắp xếp sự kiện.</p>
        <p><strong>Ở nhà:</strong>Thực hành các kỹ năng như sử dụng phần mềm Excel, làm báo cáo, hoặc quản lý ngân sách cá nhân. Sắp xếp đồ đạc ngăn nắp, lập kế hoạch chi tiêu hoặc lịch trình học tập chi tiết.</p>
        `,
  "Nghệ thuật": `<h3 class='title'>Đặc điểm của những người thuộc nhóm Nghệ thuật</h3>
        <p>Ưa thích tự do, yêu cái đẹp, trí tưởng tượng phong phú...</p>
        <p><strong>Điểm mạnh:</strong> Trí tưởng tượng phong phú, sáng tạo: có khiếu thẩm mỹ, có thể phối màu hoặc vẽ, viết, mặc đẹp, nhảy, chơi nhạc cụ,….</p>
        <p><strong>Điểm cần khắc phục:</strong> Bạn trẻ nhóm nghệ thuật thường thích làm những điều khác với những người xung quanh, vì vậy ít tuân thủ theo luật lệ, nề nếp.</p>
        <p><strong>Ngành nghề:</strong> Thiết kế đồ họa, ngoại ngữ; thanh nhạc, thời trang…</p>
        <p><strong>Trải nghiệm ở lớp, trường:</strong> Lớp phó văn thể mỹ, lớp phó văn nghệ</p>
        <p><strong>Các môn học cần phát huy:</strong> Mỹ thuật, âm nhạc, ngữ văn,…</p>
        <p><strong>Ở lớp:</strong> Sáng tác bài thơ, bài văn hoặc bài hát trong các tiết học văn hoặc âm nhạc. Tham gia biểu diễn kịch, vẽ tranh minh họa cho các dự án nhóm.</p>
        <p><strong>Ở trường:</strong> Tham gia các câu lạc bộ mỹ thuật, âm nhạc, văn thơ, hoặc sân khấu. Góp phần tổ chức các chương trình nghệ thuật, triển lãm hoặc sự kiện văn hóa.</p>
        <p><strong>Ở nhà:</strong>Tự luyện tập vẽ, sáng tác nhạc, viết truyện, làm đồ thủ công. Trang trí không gian sống hoặc học thiết kế đồ họa.</p>
        `,
  "Xã hội": `<h3 class='title'>Đặc điểm của những người thuộc nhóm Xã hội</h3>
        <p>Thích giúp đỡ người khác, làm việc cộng đồng...</p>
        <p><strong>Điểm mạnh:</strong> Thấu hiểu, có khả năng về ngôn ngữ, diễn đạt tốt ý tưởng truyền đạt kiến thức, có khả năng lắng nghe một cách kiên nhẫn.</p>
        <p><strong>Điểm cần khắc phục:</strong> Nhạy cảm, dễ bị ảnh hưởng bởi cảm xúc của người khác, dễ mủi lòng, hay che giấu sở thích hoặc khả năng thật.</p>
        <p><strong>Ngành nghề:</strong> Cố vấn, luật sư, quảng cáo marketing, du lịch, dịch vụ khách hàng,…</p>
        <p><strong>Trải nghiệm ở lớp, trường:</strong> Dịch vụ cộng đồng, dịch vụ cá nhân</p>
        <p><strong>Các môn học cần phát huy:</strong> Giáo dục công dân, ngữ văn, lịch sử,…</p>
        <p><strong>Ở lớp:</strong> Hỗ trợ bạn bè trong học tập, làm nhóm trưởng trong các dự án nhóm. Thuyết trình hoặc hướng dẫn bạn bè trong các hoạt động học tập chung.</p>
        <p><strong>Ở trường:</strong> Tham gia hoạt động tình nguyện, câu lạc bộ hỗ trợ cộng đồng hoặc đội hướng dẫn học sinh mới. Tổ chức hoặc tham gia các buổi tư vấn, giao lưu kỹ năng mềm.</p>
        <p><strong>Ở nhà:</strong>Hướng dẫn hoặc giúp đỡ em nhỏ trong việc học tập. Tổ chức các buổi trò chuyện hoặc thuyết trình trong gia đình.</p>
        `,
  "Quản lý": `<h3 class='title'>Đặc điểm của những người thuộc nhóm Quản lý</h3>
        <p>Yêu thích lãnh đạo, thuyết phục người khác...</p>
        <p><strong>Điểm mạnh:</strong> Quyết đoán, rất năng động, tham vọng, giao tiếp tốt; được nhiều người tin tưởng, nể phục. </li>
        <p><strong>Điểm cần khắc phục:</strong> Không thích, không có năng khiếu trong việc để ý đến các chi tiết.  </li>
        <p><strong>Ngành nghề:</strong> Quản lí doanh nghiệp; Marketing, quản trị, quản lí trong cơ quan nhà nước, trường học;…</li>
        <p><strong>Trải nghiệm ở lớp, trường:</strong> Lớp phó học tập, lớp trưởng, ...</li>
        <p><strong>Các môn học cần phát huy:</strong> Toán, ngữ văn, tin học, giáo dục công dân,…</p>
        <p><strong>Ở lớp:</strong> Đề xuất ý tưởng và dẫn dắt nhóm trong các dự án hoặc bài tập nhóm. Tổ chức thảo luận, tranh biện, hoặc lập kế hoạch học tập cho nhóm.</p>
        <p><strong>Ở trường:</strong> Tham gia câu lạc bộ kinh doanh, khởi nghiệp hoặc đội lãnh đạo học sinh. Tổ chức sự kiện, hội thảo, hoặc các buổi gây quỹ.</p>
        <p><strong>Ở nhà:</strong>Thực hành kỹ năng thuyết trình, lập kế hoạch cá nhân hoặc dự án nhỏ tại nhà. Học các khóa online về kỹ năng giao tiếp, bán hàng, hoặc lãnh đạo.</p>
        `,
};

let top3 = [];
let remainingGroups = [];

function displayDetails(groupsToShow, isInitialDisplay = true) {
  const resultContainer = document.getElementById("result");
  resultContainer.innerHTML = "";
  let currentDetailIndex = 0;

  function showDetail(index) {
    resultContainer.innerHTML = "";

    const [group] = groupsToShow[index];

    const detailDiv = document.createElement("div");
    detailDiv.classList.add("details-container");

    let pageContent = `<h2>Nhóm ${index + 1}: ${group}</h2> ${
      partDetails[group] || "<p>Thông tin chi tiết chưa được cập nhật.</p>"
    }`;
    if (index >= 3) {
      pageContent = `<h2>Nhóm ${index}: ${group}</h2> ${
        partDetails[group] || "<p>Thông tin chi tiết chưa được cập nhật.</p>"
      }`;
    }
    if (index === 3) {
      pageContent = `<h2>Các nhóm còn lại</h2><p>Các nhóm tiếp theo còn lại có số điểm thấp hơn 3 nhóm đầu. Tuy nhiên bạn cũng có thể khám phá xem bạn có đặc điểm gì với các nhóm nghề này</p>`;
    }
    detailDiv.innerHTML = `${pageContent}
             <div class="navigation-container">
                ${
                  index > 0
                    ? '<button class="nav-button" id="prevButton">Quay lại</button>'
                    : ""
                }
                ${
                  index < groupsToShow.length - 1
                    ? '<button class="nav-button" id="quizNextButton">Tiếp theo</button>'
                    : ""
                }
                  ${
                    index === 6
                      ? '<button class="nav-button" id="summaryBackButton">Quay lại kết quả</button>'
                      : ""
                  }
                ${
                  index === 6
                    ? '<button class="nav-button" id="showFormButton">Tiếp theo</button>'
                    : ""
                }
            </div>
        `;

    resultContainer.appendChild(detailDiv);

    if (index > 0) {
      document.getElementById("prevButton").onclick = () =>
        showDetail(index - 1);
    }
    if (index < groupsToShow.length - 1) {
      document.getElementById("quizNextButton").onclick = () =>
        showDetail(index + 1);
    }
    if (index === groupsToShow.length - 1) {
      document.getElementById("showFormButton").onclick =
        displayCompletionScreen;
      document.getElementById("summaryBackButton").onclick = goBackToSummary;
    }
  }

  showDetail(currentDetailIndex);
}

function displayResult() {
  const resultContainer = document.getElementById("result");
  const resultText = document.getElementById("resultText");

  top3 = Object.entries(scores)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 3);

  remainingGroups = Object.entries(scores)
    .sort(([, a], [, b]) => b - a)
    .slice(3);

  const predictionCorrect = top3.some(([part]) => part === selectedCareerGroup);

  resultText.innerHTML = `
        <h2>Kết quả</h2>
        <br>
        <h5>Top 3 nhóm có điểm cao nhất:</h5>
        <br>
        ${top3
          .map(
            ([part, score], index) => `
            <div dis>
            <span style='min-width: 200px'>
            ${index + 1}. ${part}
            </span>
            <span>
            - <span style='color: #6a11cb'>${score}</span> điểm
            </span>
        </div>`
          )
          .join("<br>")}<br><br>
        Dự đoán của bạn: ${
          selectedCareerGroup ? `Nhóm ${selectedCareerGroup}` : "Không chọn"
        }<br>
        ${predictionCorrect ? "Dự đoán chính xác!" : "Dự đoán không chính xác."}
        <div id="detailsButton" style='margin-top: 30px' class="nav-button">Xem chi tiết</div>
    `;

  resultContainer.style.display = "block";
  document.getElementById("detailsButton").onclick = () => {
    const allGroups = top3.concat(["Remaining"], remainingGroups);
    displayDetails(allGroups);
    handleNextStep("step__5", "step__6");
  };
  document.getElementById("quizSection").style.display = "none";
  document.getElementById("completionScreen").style.display = "none";
}

function goBackToSummary() {
  const details = document.querySelectorAll(".details-container");
  details.forEach((detail) => detail.remove());

  const resultText = document.getElementById("resultText");
  resultText.style.display = "block";

  const resultContainer = document.getElementById("result");
  resultContainer.style.display = "block";
  handleNextStep("step__5", "step__6");
  document.getElementById("quizSection").style.display = "none";
}

function clearScreen() {
  const allElements = document.querySelectorAll("body > .container");

  allElements.forEach((element) => element.remove());
}

function clearCompletionScreen() {
  const completionScreen = document.getElementById("completionScreen");
  if (completionScreen) {
    completionScreen.remove();
  }
}

function displayCompletionScreen() {
  document.getElementById("result").style.display = "none";
  document.getElementById("completionScreen").style.display = "block";
  handleNextStep("step__6", "step__7");
}

function submitResult() {
  const form = document.getElementById("resultForm");
  const formData = new FormData(form);
  const data = {};
  formData.forEach((value, key) => (data[key] = value));

  data.scores = JSON.stringify(scores);
  data.predictedCareer = selectedCareerGroup;
  data.preliminaryAnswer = preliminaryAnswer;

  fetch(
    "https://script.google.com/macros/s/AKfycbzlnfYsB5GIgJxueZU4fQmIenWrOt944h1dQH7a9RYxToPUzLV9KvNv0u6e9pjv0EngtA/exec",
    {
      method: "POST",
      body: JSON.stringify(data),
    }
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {

      if (data.status === "success") {
        // alert("Kết quả đã được gửi thành công!");
        document.getElementById("completionScreen").style.display = "none";
        handleNextStep("step__7", "step__8");
      } else {
        // alert("Có lỗi khi gửi kết quả. Vui lòng thử lại.");
        document.getElementById("completionScreen").style.display = "none";
        handleNextStep("step__7", "step__8");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      // alert("Có lỗi khi gửi kết quả. Vui lòng thử lại.");
    });
}

document.getElementById("resultForm").addEventListener("submit", (event) => {
  event.preventDefault();
  submitResult();
});

document.querySelectorAll(".career-option").forEach((option) => {
  option.addEventListener("click", () => {
    selectedCareerGroup = option.getAttribute("data-group");
    document.getElementById("frontQuestion").style.display = "none";
    document.getElementById("openingScreen").style.display = "flex";
  });
});

function openChatGpt() {
  return window.open('https://chatgpt.com/g/g-676c3474fb1c8191bde8c0175368c2b6-huong-nghiep-ai', '_blank')
}
function tryAgain() {
  window.location.reload()
}

function toggleSettingsMenu() {
  const menu = document.getElementById("settingsMenu");
  menu.classList.toggle("hidden");
}

function changeFontStyle(event) {
  document.body.style.fontFamily = event.target.value;
}

function toggleThemeMode(event) {
  if (event.target.value === "dark") {
    document.body.style.backgroundColor = "#333";
    document.body.style.color = "#fff";
  } else {
    document.body.style.backgroundColor = "#f5f7fa";
    document.body.style.color = "#444";
  }
}

function changeFontSize(event) {
  currentFontSize = parseInt(event.target.value, 10);
  displayQuestion();
}

function retakeQuiz() {
  scores = parts.reduce((acc, part) => ({ ...acc, [part]: 0 }), {});
  currentQuestionIndex = 0;
  selectedCareerGroup = null;

  document.getElementById("result").style.display = "none";
  document.getElementById("frontQuestion").style.display = "none";
  document.getElementById("openingScreen").style.display = "none";
  document.getElementById("completionScreen").style.display = "none";
  document.getElementById("quizSection").style.display = "block";

  displayQuestion(); // Restart the quiz
}
function getElementByClassName(name) {
  return document.querySelector(`${name}`);
}

let currentStep = "step__1";

const bgImage = {
  step__1: [""],
  step__2: ["./images/Questions-pana.svg", "./images/Questions-amico.svg"],
  step__3: ["./images/engineer.svg", "./images/leader.svg"],
  step__4: ["", ""],
};

// Initialize quiz on page load

function handleNextStep(cur, tar) {
  currentStep = tar;
  const preStep = getElementByClassName(`.${cur}`);
  const nextStep = getElementByClassName(`.${tar}`);
  nextStep.classList.add("active");
  nextStep.classList.remove("animate__fadeIn");
  preStep.classList.add("animate__fadeOut");
  preStep.classList.remove("active");

  const firstStepBg = getElementByClassName(".center__bg");
  firstStepBg.style.display = "none";

  const stepBgLeft = getElementByClassName(".left__bg");
  const stepBgRight = getElementByClassName(".right__bg");

  stepBgLeft.setAttribute("src", bgImage[currentStep][0]);
  stepBgRight.setAttribute("src", bgImage[currentStep][1]);
  stepBgLeft.classList.add("active");
  stepBgRight.classList.add("active");
  if(!stepBgLeft.getAttribute('src') && !stepBgRight.getAttribute('src')) {
    stepBgLeft.classList.remove("active");
    stepBgRight.classList.remove("active");
  }
}

window.onload = () => {
  const statedBtn = document.querySelector(".get-started");
  statedBtn.addEventListener("click", () => {
    // fade to step 2
    handleNextStep("step__1", "step__2");
  });

  const questionStarteds = document.querySelectorAll(".question-started .btn");
  questionStarteds.forEach((item) => {
    item.addEventListener("click", () => {
      // fade to step 3
      handleNextStep("step__2", "step__3");
    });
  });

  // Display the initial preliminary question
  document.querySelectorAll(".preliminary-option").forEach((option) => {
    option.addEventListener("click", () => {
      preliminaryAnswer = option.getAttribute("data-answer");
      document.getElementById("preliminaryQuestion").style.display = "none";
      document.getElementById("frontQuestion").style.display = "block";
    });
  });
  displayOpeningScreen();

  const startButton = document.getElementById("startButton");
  startButton.onclick = () => {
    document.getElementById("openingScreen").style.display = "none";
    document.getElementById("quizSection").style.display = "block";
    displayQuestion();
  };
  audioPlayer = document.getElementById("audioPlayer");
  selectMusic();

  // End
  const reStarted = getElementByClassName('.re-started')
  reStarted.addEventListener('click', () => {
    window.location.reload();
  })
};

function displayOpeningScreen() {
  document.querySelectorAll(".career-option").forEach((option) => {
    option.addEventListener("click", () => {
      selectedCareerGroup = option.getAttribute("data-group");
      document.getElementById("frontQuestion").style.display = "none";
      document.getElementById("openingScreen").style.display = "flex";
      handleNextStep("step__3", "step__4");
    });
  });
}

let audioPlayer;
let isPlaying = false;

function selectMusic() {
  const musicSelect = document.getElementById("musicSelect");
  currentMusic = musicSelect.value;
  audioPlayer.src = currentMusic;
  createCustomControls();
}

function toggleAudio() {
  if (isPlaying) {
    audioPlayer.pause();
    isPlaying = false;
    document.getElementById("playPauseButton").textContent = "Play";
  } else {
    audioPlayer.play();
    isPlaying = true;
    document.getElementById("playPauseButton").textContent = "Pause";
  }
}

function adjustVolume() {
  audioPlayer.volume = document.getElementById("volumeControl").value;
}

function createCustomControls() {
  const customControlsDiv = document.getElementById("customAudioControls");
  customControlsDiv.innerHTML = `
        <button id="playPauseButton" onclick="toggleAudio()">Play</button>
        <input type="range" id="volumeControl" min="0" max="1" step="0.1" value="1" oninput="adjustVolume()">
    `;
}
