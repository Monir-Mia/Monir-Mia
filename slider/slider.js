<!-- Custom Script for Hover Slide Image with Duration -->
<script>
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.hover-slide-image').forEach(container => {
      const img = container.querySelector('img');
      const duration = container.getAttribute('data-duration') || '3s';
      img.style.transition = `transform ${duration} ease`;

      container.addEventListener('mouseenter', () => {
        const containerHeight = container.offsetHeight;
        const imgHeight = img.offsetHeight;
        const diff = imgHeight - containerHeight;
        img.style.transform = `translateY(-${diff}px)`;
      });

      container.addEventListener('mouseleave', () => {
        img.style.transform = 'translateY(0)';
      });
    });
  });
</script>
