// сбрасывает выбранные элементы в селекте
// для настройки визуала кнопки
["button_size", "button_view", "button_has-icon"].forEach((item) => {
    document.getElementById(item).selectedIndex = 0;
  });


// хранит предыдущие классы для замены через селект
let btnSizeSelectPrevValue = "mw-button_size_m";
let btnViewSelectPrevValue = "mw-button_view_primary";
let btnHasIconSelectPrevValue = "mw-button_has-icon_no-icon";

// заменяет классы у стендаа кнопки через id
const getActiveSelectOption = (id) => {
  const optionValue = document.getElementById(id).value;
  const codeSnippetNode = document.getElementById("button_code");
  const previewButtonClassList = document.getElementById("preview-button").classList;
  const newClassName = "mw-" + id + "_" + optionValue;
  if (id.includes("size")) {
    previewButtonClassList.remove(btnSizeSelectPrevValue);
    previewButtonClassList.add(newClassName);
    btnSizeSelectPrevValue = newClassName;
  }

  if (id.includes("view")) {
    previewButtonClassList.remove(btnViewSelectPrevValue);
    previewButtonClassList.add(newClassName);
    btnViewSelectPrevValue = newClassName;
  }

  if (id.includes("icon")) {
    previewButtonClassList.remove(btnHasIconSelectPrevValue);
    previewButtonClassList.add(newClassName);
    btnHasIconSelectPrevValue = newClassName;
  }
  

  codeSnippetNode.innerHTML = `&lt;div class="${document.getElementById("preview-button").classList}"&gt;&lt;/div&gt;`;
  hljs.highlightElement(codeSnippetNode);
};
