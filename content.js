(function () {
    var dlTimeout = 1500; // Waktu tunggu untuk unduhan
    var nextTimeout = 500; // Waktu tunggu sebelum pindah ke media berikutnya
    var maxDownloads = 100; // Jumlah maksimum unduhan
    var downloadCount = 1;
  
    var download = function () {
      try {
        // Selector untuk tombol Next berdasarkan class yang Anda berikan
        var nextMediaBtn = document.querySelector('.x78zum5.x6s0dn4.xl56j7k.x3x2bpi.xwvwv9b.xexx8yu.x4uap5.x18d9i69.xkhd6sd.x1f6kntn.xk50ysn.x7o08j2.xtvhhri.x14yjl9h.xudhj91.x18nykt9.xww2gxu.xu306ak.x12s1jxh.xkdsq27.xwwtwea.x1gfkgh9.x10l6tqk.x8jeoy8.xyw6214.x160vmok.x1sr6hwe');
  
        // Memeriksa gambar
        var image = document.querySelector('.x6s0dn4.x78zum5.x5yr21d.xl56j7k.x6ikm8r.x10wlt62.x1n2onr6.xh8yej3.xhtitgo._ao3e');
        if (image) {
          var imageUrl = image.src;
          console.log('Gambar URL:', imageUrl);
  
          // Mencari caption gambar menggunakan class yang diberikan
          var caption = document.querySelector('._alhf.x104kibb.x1okw0bk.x14atkfc.xisnujt.x1aliel9.xexx8yu.xc73u3c.x18d9i69.x5ib6vp.x14vqqas.xack27t.x8x9d4c.x6ikm8r.x10wlt62.x12lqup9.x17fgdl5.x16cd2qt.xlyipyv.x1vvkbs.x126k92a.x6by6y.x1s7n7y8.x1ua5tub._ao3e');
          var captionText = caption ? caption.innerText : 'NoCaption'; // Jika tidak ada caption, beri nama default
  
          // Membuat elemen anchor untuk mengunduh gambar
          var a = document.createElement('a');
          a.href = imageUrl;
          a.download = captionText + '.jpg'; // Menggunakan caption sebagai nama file tanpa angka tambahan
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a); // Menghapus elemen setelah klik
  
          console.log("Gambar berhasil diunduh: " + captionText);
        }
  
        // Memeriksa video
        var video = document.querySelector('video.x10l6tqk.x5yr21d.xh8yej3');
        if (video) {
          var videoUrl = video.src;
          console.log('Video URL:', videoUrl);
  
          // Mencari caption video menggunakan class yang diberikan
          var caption = document.querySelector('._alhf.x104kibb.x1okw0bk.x14atkfc.xisnujt.x1aliel9.xexx8yu.xc73u3c.x18d9i69.x5ib6vp.x14vqqas.xack27t.x8x9d4c.x6ikm8r.x10wlt62.x12lqup9.x17fgdl5.x16cd2qt.xlyipyv.x1vvkbs.x126k92a.x6by6y.x1s7n7y8.x1ua5tub._ao3e');
          var captionText = caption ? caption.innerText : 'NoCaption'; // Jika tidak ada caption, beri nama default
  
          // Membuat elemen anchor untuk mengunduh video
          var a = document.createElement('a');
          a.href = videoUrl;
          a.download = captionText + '.mp4'; // Menggunakan caption sebagai nama file tanpa angka tambahan
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a); // Menghapus elemen setelah klik
  
          console.log("Video berhasil diunduh: " + captionText);
        }
  
        setTimeout(() => {
          if (nextMediaBtn) {
            nextMediaBtn.click(); // Navigasi ke media berikutnya
          } else {
            console.error("Tombol 'Next' tidak ditemukan!");
            return;
          }
  
          downloadCount += 1;
  
          if (downloadCount <= maxDownloads) {
            download(); // Lanjutkan unduhan berikutnya
          }
        }, nextTimeout);
      } catch (ex) {
        console.error("Error dalam proses download:", ex);
      }
    };
  
    // Mulai proses unduhan
    download();
  })();
  