const imageFrame = document.querySelector(".imageFrame");
const imageDownloadButton = document.querySelector(".downloadImage");
const horizontalSlider = document.querySelector(".horizontalSlider");
const verticalSlider = document.querySelector(".verticalSlider");
const verticalSliderNum = document.querySelector(".verticalSliderNum");
const horizontalSliderNum = document.querySelector(".horizontalSliderNum");

const borderRadiusSlider = document.querySelector(".borderRadiusSlider");
const borderRadiusSliderNum = document.querySelector(".borderRadiusSliderNum");

const boxShadowThicknessSlider = document.querySelector(".boxShadowThicknessSlider");
const boxShadowThicknessSliderNum = document.querySelector(".boxShadowThicknessSliderNum");

const topBar = document.querySelector(".topBar");
const topBarSpan = document.querySelectorAll(".topBar span");
const windowTypeAndStyleNav = document.querySelector(".windowTypeAndStyleNav");
const windowOverLay = document.querySelector(".windowOverLay");
const windowTypeBtns = document.querySelectorAll(".windowTypeBtns button");
const windowStyleBtns = document.querySelectorAll(".windowStyleBtns button");
const tabButtons = document.querySelectorAll(".backgroundTab button");
const tabColors = document.querySelectorAll(".tabColor");
const gradientColorsDivs = document.querySelectorAll(".gradientColors div");
const imageBorderRadius = document.querySelectorAll(".bRadius");
const noWindow = document.querySelector(".noWindow");
const browserWindow = document.querySelector(".browserWindow");
const plainWindow = document.querySelector(".plainWindow");
const filterControls = document.querySelectorAll(".filterOptions input");
const topBarWidth = document.querySelector(".topBarWidth");

const resetFilterBtn = document.querySelector(".resetFilterBtn");

const padandBorderBtn = document.querySelectorAll(".paddingAndBorderRadiusTab button");
const frameAndImageSizeBtns = document.querySelectorAll(".frameAndImageSize button");
const padandBorder = document.querySelectorAll(".padandBorder");
const rightBar = document.querySelector(".right");
document.querySelector(".frameandImageSizeTogle").addEventListener("click", () => {
  document.querySelector(".imageSizeToggleModal").style.display = "flex";
});

document.querySelector(".topModel .ph-x").addEventListener("click", () => {
  document.querySelector(".imageSizeToggleModal").style.display = "none";
  // document.querySelector('html').style.overflowY = "visible"
});

document.querySelector(".windowTypeBtn").addEventListener("click", () => {
  document.querySelector(".windowTypeBtns").classList.toggle("hide");
});

document.querySelector(".windowStylyeBtn").addEventListener("click", () => {
  document.querySelector(".windowStyleBtns").classList.toggle("hide");
});

windowTypeBtns.forEach((windontypeBtn, index) => {
  windontypeBtn.addEventListener("click", () => {
    windowTypeBtns.forEach((unselectedBtn) => {
      unselectedBtn.classList.remove("activeWindowButton");
    });
    windowTypeBtns[index].classList.add("activeWindowButton");

    if (windowTypeBtns[0].classList.contains("activeWindowButton")) {
      document.querySelector(".windowStyle").style.display = "none";
    } else {
      document.querySelector(".windowStyle").style.display = "block";
    }
  });
});

windowStyleBtns.forEach((windonstyleBtn, index) => {
  windonstyleBtn.addEventListener("click", () => {
    windowStyleBtns.forEach((unselectedBtn) => {
      unselectedBtn.classList.remove("activeWindowButton");
    });
    windowStyleBtns[index].classList.add("activeWindowButton");
  });
});

windowStyleBtns[0].addEventListener("click", () => {
  topBarSpan.forEach((span) => {
    span.style.display = "none";
    topBar.style.display = "block";
  });
});

windowStyleBtns[1].addEventListener("click", () => {
  topBarSpan.forEach((span) => {
    topBarSpan[0].style.display = "inline-block";
    topBarSpan[1].style.display = "inline-block";
    topBarSpan[2].style.display = "inline-block";

    topBarSpan[0].style.backgroundColor = "#FF5F56";
    topBarSpan[1].style.backgroundColor = "#FFBD2E";
    topBarSpan[2].style.backgroundColor = "#27C93F";

    topBarSpan[0].style.border = "none";
    topBarSpan[1].style.border = "none";
    topBarSpan[2].style.border = "none";
  });
});

windowStyleBtns[2].addEventListener("click", () => {
  topBarSpan.forEach((span) => {
    topBarSpan[0].style.display = "inline-block";
    topBarSpan[1].style.display = "inline-block";
    topBarSpan[2].style.display = "inline-block";

    topBarSpan[0].style.backgroundColor = "#979799";
    topBarSpan[1].style.backgroundColor = "#979799";
    topBarSpan[2].style.backgroundColor = "#979799";
  });
});

windowStyleBtns[3].addEventListener("click", () => {
  topBarSpan.forEach((span) => {
    topBarSpan[0].style.display = "inline-block";
    topBarSpan[1].style.display = "inline-block";
    topBarSpan[2].style.display = "inline-block";

    topBarSpan[0].style.backgroundColor = "#E8E8E8";
    topBarSpan[1].style.backgroundColor = "#E8E8E8";
    topBarSpan[2].style.backgroundColor = "#E8E8E8";

    topBarSpan[0].style.border = "1px solid #979799";
    topBarSpan[1].style.border = "1px solid #979799";
    topBarSpan[2].style.border = "1px solid #979799";
  });
});

const solidBtn = document.querySelector("#solidBtn").addEventListener("click", () => {
  location.reload();
});

function resetImageFrame() {
  imageFrame.style.height = "70%";
  // imageFrame.style.marginTop = "10rem"
}

document.addEventListener("DOMContentLoaded", (e) => {
  const imgUrl = localStorage.getItem("image");

  const img = new Image();
  img.src = imgUrl;
  //   console.log(imgUrl);
  topBar.style.width = `${img.width}px`;

  window.onload = function () {
    if (!window.location.hash) {
      window.location = window.location + "#loaded";
      window.location.reload();
    }
  };

  topBarWidth.oninput = function () {
    topBar.style.width = this.value + "px";
    document.querySelector(".topBarWidthSliderNum").textContent = this.value + "px";
    console.log(this.value);
  };

  imageFrame.appendChild(img);

  const editingImage = Array.from(imageFrame.children)[1];

  frameAndImageSizeBtns[0].addEventListener("click", () => {
    editingImage.style.width = "83.33vw";
    editingImage.style.height = "46.875vh";
    editingImage.style.objectFit = "cover";
    resetImageFrame();
  });

  frameAndImageSizeBtns[1].addEventListener("click", () => {
    editingImage.style.width = "78.125vw";
    editingImage.style.height = "26.04vh";
    resetImageFrame();
  });

  frameAndImageSizeBtns[2].addEventListener("click", () => {
    editingImage.style.width = "62.5vw";
    editingImage.style.height = "62.5vh";
    editingImage.style.objectFit = "cover";
    resetImageFrame();
  });

  frameAndImageSizeBtns[3].addEventListener("click", () => {
    editingImage.style.width = "82.5vw";
    editingImage.style.height = "20.625vh";
    editingImage.style.objectFit = "cover";
    resetImageFrame();
  });

  frameAndImageSizeBtns[4].addEventListener("click", () => {
    editingImage.style.width = "56.25vw";
    editingImage.style.height = "56.25vh";
    editingImage.style.objectFit = "cover";
    resetImageFrame();
  });

  frameAndImageSizeBtns[5].addEventListener("click", () => {
    editingImage.style.width = "56.25vw";
    editingImage.style.height = "90vh";
    editingImage.style.objectFit = "cover";
    resetImageFrame();
    // imageFrame.style.height = "80vh"
    // imageFrame.style.marginTop = "6rem"
  });

  frameAndImageSizeBtns[6].addEventListener("click", () => {
    editingImage.style.width = "66.67vw";
    editingImage.style.height = "37.5vh";
    editingImage.style.objectFit = "cover";
    resetImageFrame();
  });

  editingImage.classList.add("box-shadow");
  topBar.classList.add("box-shadow");

  editingImage.style.borderBottomLeftRadius = `10px`;
  editingImage.style.borderBottomRightRadius = `10px`;

  noWindow.addEventListener("click", () => {
    topBar.style.display = "none";
    editingImage.style.borderTopLeftRadius = "10px";
    editingImage.style.borderTopRightRadius = "10px";
  });

  browserWindow.addEventListener("click", () => {
    topBar.style.display = "flex";
    document.querySelector(".browserBar").style.display = "block";
    editingImage.style.borderTopLeftRadius = "0";
    editingImage.style.borderTopRightRadius = "0";
  });

  plainWindow.addEventListener("click", () => {
    topBar.style.display = "flex";
    document.querySelector(".browserBar").style.display = "none";
    editingImage.style.borderTopLeftRadius = "0";
    editingImage.style.borderTopRightRadius = "0";
  });

  borderRadiusSlider.oninput = function () {
    borderRadiusSliderNum.textContent = this.value + "px";
    topBar.style.borderTopRightRadius = `${this.value}px`;
    topBar.style.borderTopLeftRadius = `${this.value}px`;
    editingImage.style.borderBottomLeftRadius = `${this.value}px`;
    editingImage.style.borderBottomRightRadius = `${this.value}px`;
    // editingImage.style.borderRadius = `${this.value}px`

    if (noWindow.classList.contains("activeWindowButton")) {
      editingImage.style.borderTopLeftRadius = `${this.value}px`;
      editingImage.style.borderTopRightRadius = `${this.value}px`;

      editingImage.style.borderTopLeftRadius = "10px !important";
    } else {
      editingImage.style.borderTopLeftRadius = "0px";
      editingImage.style.borderTopRightRadius = "0px";
    }
  };

  boxShadowThicknessSlider.oninput = function () {
    topBar.style.boxShadow = `3px 3px ${this.value}px rgba(0, 0, 0, .5)`;
    editingImage.style.boxShadow = `3px 3px ${this.value}px rgba(0, 0, 0, .5)`;
    topBar.style.boxShadow = `0 3px ${this.value}px rgb(0 0 0 / 10%), 0 10px ${this.value}px rgb(0 0 0 / 20%)`;
    editingImage.style.boxShadow = `0 3px ${this.value}px rgb(0 0 0 / 10%), 0 10px ${this.value}px rgb(0 0 0 / 20%)`;
    boxShadowThicknessSliderNum.textContent = `${this.value}px`;
  };

  let brightness = "100",
    saturation = "100",
    contrast = "100",
    grayscale = "0",
    inversion = "0",
    blurRadius = "0";
  let rotation = 0,
    flipHorizontal = 1,
    flipVertical = 1;

  const angle = 90;
  document.querySelector(".rotateImageClockWise").addEventListener("click", () => {
    rotation = (rotation + angle) % 360;
    imageFrame.style.transform = `rotate(${rotation}deg)`;
  });

  const reverseAngle = -90;
  document.querySelector(".rotateImageAntiClockWise").addEventListener("click", () => {
    rotation = (rotation + reverseAngle) % 360;
    imageFrame.style.transform = `rotate(${rotation}deg)`;
  });

  document.querySelector(".flipImageHorizontal").addEventListener("click", () => {
    imageFrame.style.transform === "scaleX(-1)"
      ? (imageFrame.style.transform = "scaleX(1)")
      : (imageFrame.style.transform = "scaleX(-1)");
  });

  document.querySelector(".flipImageVertical").addEventListener("click", () => {
    imageFrame.style.transform === "scaleY(-1)"
      ? (imageFrame.style.transform = "scaleY(1)")
      : (imageFrame.style.transform = "scaleY(-1)");
  });

  resetFilterBtn.addEventListener("click", () => {
    editingImage.style.filter = `brightness(100%) saturate(100%) contrast(100%) grayscale(0%) invert(0%) blur(0px)`;
    document.querySelector(".brightnessValue").textContent = `100%`;
    document.querySelector(".grayscaleValue").textContent = `0%`;
    document.querySelector(".contrastValue").textContent = `100%`;
    document.querySelector(".saturationValue").textContent = `100%`;
    document.querySelector(".inversionValue").textContent = `0%`;
    document.querySelector(".blurValue").textContent = `0px`;
  });

  document.getElementById("brightnessSlider").oninput = function () {
    brightness = this.value;
    document.querySelector(".brightnessValue").textContent = `${this.value}%`;
    editingImage.style.filter = `brightness(${brightness}%) saturate(${saturation}%) contrast(${contrast}%) grayscale(${grayscale}%) invert(${inversion}%) blur(${blurRadius}px)`;
  };

  document.getElementById("grayscaleSlider").oninput = function () {
    grayscale = this.value;
    document.querySelector(".grayscaleValue").textContent = `${this.value}%`;
    editingImage.style.filter = `brightness(${brightness}%) saturate(${saturation}%) contrast(${contrast}%) grayscale(${grayscale}%) invert(${inversion}%) blur(${blurRadius}px)`;
  };

  document.getElementById("contrastSlider").oninput = function () {
    contrast = this.value;
    document.querySelector(".contrastValue").textContent = `${this.value}%`;
    editingImage.style.filter = `brightness(${brightness}%) saturate(${saturation}%) contrast(${contrast}%) grayscale(${grayscale}%) invert(${inversion}%) blur(${blurRadius}px)`;
  };

  document.getElementById("saturationSlider").oninput = function () {
    saturation = this.value;
    document.querySelector(".saturationValue").textContent = `${this.value}%`;
    editingImage.style.filter = `brightness(${brightness}%) saturate(${saturation}%) contrast(${contrast}%) grayscale(${grayscale}%) invert(${inversion}%) blur(${blurRadius}px)`;
  };

  document.getElementById("inversionSlider").oninput = function () {
    inversion = this.value;
    document.querySelector(".inversionValue").textContent = `${this.value}%`;
    editingImage.style.filter = `brightness(${brightness}%) saturate(${saturation}%) contrast(${contrast}%) grayscale(${grayscale}%) invert(${inversion}%) blur(${blurRadius}px)`;
  };

  document.getElementById("blurRadiusSlider").oninput = function () {
    blurRadius = this.value;
    document.querySelector(".blurValue").textContent = `${this.value}px`;
    editingImage.style.filter = `brightness(${brightness}%) saturate(${saturation}%) contrast(${contrast}%) grayscale(${grayscale}%) invert(${inversion}%) blur(${blurRadius}px)`;
  };
});

function clrStorage() {
  localStorage.removeItem("image");
  location.href = "/";
}

// Simple example, see optional options for more configuration.
const pickr = Pickr.create({
  el: ".color-picker",
  theme: "monolith", // or 'monolith', or 'nano' or 'classic'
  default: "#98B0FC",

  swatches: [
    "rgba(244, 67, 54, 1)",
    "rgba(233, 30, 99, 0.95)",
    "rgba(156, 39, 176, 0.9)",
    "rgba(103, 58, 183, 0.85)",
    "rgba(63, 81, 181, 0.8)",
    "rgba(33, 150, 243, 0.75)",
    "rgba(3, 169, 244, 0.7)",
    "rgba(0, 188, 212, 0.7)",
    "rgba(0, 150, 136, 0.75)",
    "rgba(76, 175, 80, 0.8)",
    "rgba(139, 195, 74, 0.85)",
    "rgba(205, 220, 57, 0.9)",
    "rgba(255, 235, 59, 0.95)",
    "rgba(255, 193, 7, 1)",
  ],

  components: {
    // Main components
    preview: true,
    opacity: true,
    hue: true,

    // Input / output Options
    interaction: {
      hex: true,
      rgba: true,
      hsla: true,
      hsva: false,
      cmyk: false,
      input: true,
      clear: true,
      save: true,
    },
  },
});

pickr.on("change", (...args) => {
  let color = args[0].toRGBA();
  imageFrame.style.backgroundColor = `rgba(${color[0]},${color[1]},${color[2]},${color[3]})`;
});

imageDownloadButton.addEventListener("click", () => {
  html2canvas(document.querySelector(".imageFrame"), {
    allowTaint: true,
    useCORS: true,
  }).then(function (canvas) {
    let anchorTag = document.createElement("a");
    anchorTag.download = "filename.png";
    anchorTag.href = canvas.toDataURL();
    anchorTag.target = "_blank";
    anchorTag.click();
  });
});

horizontalSlider.oninput = function () {
  imageFrame.style.paddingRight = this.value + "px";
  imageFrame.style.paddingLeft = this.value + "px";
  horizontalSliderNum.textContent = this.value + "px";

  if (Number(verticalSlider.value) === 0 && Number(horizontalSlider.value) === 0) {
    imageFrame.style.borderRadius = "20px";
  } else {
    imageFrame.style.borderRadius = "0px";
  }
};

verticalSlider.oninput = function () {
  imageFrame.style.paddingTop = this.value + "px";
  imageFrame.style.paddingBottom = this.value + "px";
  verticalSliderNum.textContent = this.value + "px";

  if (Number(verticalSlider.value) === 0 && Number(horizontalSlider.value) === 0) {
    imageFrame.style.borderRadius = "20px";
  } else {
    imageFrame.style.borderRadius = "0px";
  }
};

function toggleMode() {
  topBar.classList.toggle("dark");
}

gradientColorsDivs.forEach((gradientColor) => {
  gradientColor.addEventListener("click", () => {
    imageFrame.style.background = window.getComputedStyle(gradientColor).background;
  });
});

tabButtons.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabColors.forEach((tabColor) => {
      tabColor.classList.remove("active");
    });
    tabButtons.forEach((unselectedTab) => {
      unselectedTab.classList.remove("active");
    });
    tabButtons[index].classList.add("active");
    tabColors[index].classList.add("active");
  });
});

padandBorderBtn.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    padandBorder.forEach((padandBorderItem) => {
      padandBorderItem.classList.remove("active");
    });
    padandBorderBtn.forEach((unselectedTab) => {
      unselectedTab.classList.remove("active");
    });
    padandBorderBtn[index].classList.add("active");
    padandBorder[index].classList.add("active");
  });
});

function openNav() {
  windowTypeAndStyleNav.style.right = "0";
  windowOverLay.style.display = "block";
}

function closeNav() {
  windowTypeAndStyleNav.style.right = "-400px";
  windowOverLay.style.display = "none";
}

function resetEdit() {
  location.reload();
}
