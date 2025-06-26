// 性別・ポジションなど、複数のセレクトを一括処理！
const selectBoxes = document.querySelectorAll('.gender-select, .position-select, .nenrei-select');
selectBoxes.forEach(selectBox => {
 const selected = selectBox.querySelector('.selected');
 const options = selectBox.querySelector('.selected-options');
 const items = options.querySelectorAll('li');
 // セレクトボックスをクリックで開閉
 selected.addEventListener('click', () => {
   options.style.display = options.style.display === 'block' ? 'none' : 'block';
 });
 // 各項目クリックで値を反映して閉じる
 items.forEach(item => {
   item.addEventListener('click', () => {
     selected.textContent = item.textContent;
     options.style.display = 'none';
   });
 });
 // 外側クリックで閉じる
 document.addEventListener('click', (e) => {
   if (!selectBox.contains(e.target)) {
     options.style.display = 'none';
   }
 });
});

const dateSelect = document.querySelector('.date-select');

const dateTrigger = dateSelect.querySelector('.selected');

const dateInput = dateSelect.querySelector('.date-picker');

dateTrigger.addEventListener('click', () => {

  dateInput.style.display = (dateInput.style.display === 'block') ? 'none' : 'block';

  dateInput.focus(); // カレンダー即表示

});

// 日付を選んだら文字反映して閉じる

dateInput.addEventListener('change', () => {

  dateTrigger.textContent = `参加日：${dateInput.value}`;

  dateInput.style.display = 'none';

});
 