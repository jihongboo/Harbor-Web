/*
  Harbor Official Website Interactivity
*/

document.addEventListener('DOMContentLoaded', () => {
  
  // ==========================================
  // 1. 移动端导航菜单 (Mobile Menu)
  // ==========================================
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      navMenu.classList.toggle('active');
      
      // 切换汉堡按钮的样式动画
      const spans = menuToggle.querySelectorAll('span');
      if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(4px, -4px)';
      } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });

    // 点击页面其他区域关闭菜单
    document.addEventListener('click', () => {
      if (navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        const spans = menuToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });
  }

  // ==========================================
  // 2. 滚动淡入曝光动效 (Scroll Reveal)
  // ==========================================
  const revealElements = document.querySelectorAll('.reveal');
  
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target); // 仅触发一次
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    // 降级处理
    revealElements.forEach(el => el.classList.add('active'));
  }

  // ==========================================
  // 3. 多端客户端切换 (Ecosystem Device Tabs)
  // ==========================================
  const deviceTabs = document.querySelectorAll('.device-tab');
  const ecosystemImage = document.querySelector('.ecosystem-image img');
  
  // 设备与截图的路径映射
  const deviceImages = {
    mac: 'assets/images/mac-harbor.png',
    iphone: 'assets/images/screenshot-home.png',
    tv: 'assets/images/mac-native.png',
    vision: 'assets/images/screenshot-detail.png'
  };

  if (deviceTabs && ecosystemImage) {
    deviceTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        // 移除其他激活状态
        deviceTabs.forEach(t => t.classList.remove('active'));
        // 添加当前激活状态
        tab.classList.add('active');
        
        const deviceType = tab.dataset.device;
        const targetSrc = deviceImages[deviceType];
        
        if (targetSrc) {
          // 添加淡出渐变效果
          ecosystemImage.style.opacity = '0';
          ecosystemImage.style.transform = 'scale(0.98)';
          
          setTimeout(() => {
            ecosystemImage.src = targetSrc;
            ecosystemImage.style.opacity = '1';
            ecosystemImage.style.transform = 'scale(1)';
          }, 300);
        }
      });
    });
  }

  // ==========================================
  // 4. 截图展示画廊轮播 (Gallery Slider)
  // ==========================================
  const slider = document.querySelector('.gallery-slider');
  const slides = document.querySelectorAll('.gallery-slide');
  const prevBtn = document.querySelector('.gallery-arrow.prev');
  const nextBtn = document.querySelector('.gallery-arrow.next');
  const dotsContainer = document.querySelector('.gallery-dots');
  
  if (slider && slides.length > 0) {
    let currentIndex = 0;
    const slideCount = slides.length;
    
    // 动态生成指示点
    for (let i = 0; i < slideCount; i++) {
      const dot = document.createElement('span');
      dot.classList.add('gallery-dot');
      if (i === 0) dot.classList.add('active');
      dot.dataset.index = i;
      dotsContainer.appendChild(dot);
    }
    
    const dots = document.querySelectorAll('.gallery-dot');
    
    const updateGallery = (index) => {
      // 范围限制
      if (index < 0) index = slideCount - 1;
      if (index >= slideCount) index = 0;
      
      currentIndex = index;
      
      // 移动滑块
      slider.style.transform = `translateX(-${currentIndex * 100}%)`;
      
      // 更新指示点状态
      dots.forEach(dot => dot.classList.remove('active'));
      dots[currentIndex].classList.add('active');
    };
    
    // 左右按钮事件
    if (prevBtn && nextBtn) {
      prevBtn.addEventListener('click', () => {
        updateGallery(currentIndex - 1);
      });
      
      nextBtn.addEventListener('click', () => {
        updateGallery(currentIndex + 1);
      });
    }
    
    // 指示点点击事件
    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        const index = parseInt(dot.dataset.index);
        updateGallery(index);
      });
    });

    // 自动轮播（可选，为不打扰用户阅读，仅在鼠标离开时自动，或只使用手动切换）
    // 此处使用手动，符合苹果极简交互设计
  }
});
