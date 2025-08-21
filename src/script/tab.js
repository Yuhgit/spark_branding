document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll("#tab-menu li");
  const contents = document.querySelectorAll(".tab-content");

  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      // タブのactive状態切り替え
      tabs.forEach((t) =>
        t.classList.remove("border-richgreen", "bg-richgreen", "text-white")
      );
      tab.classList.add("border-richgreen", "bg-richgreen", "text-white");

      // コンテンツ表示切り替え
      contents.forEach((content) => {
        content.classList.add("hidden");
      });
      const target = document.getElementById("tab-" + tab.dataset.tab);
      if (target) target.classList.remove("hidden");
    });
  });

  // 初期表示（最初のタブをactiveに）
  if (tabs.length > 0) tabs[0].click();
});
