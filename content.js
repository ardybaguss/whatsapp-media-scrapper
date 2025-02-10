(function () {
  var dlTimeout = 1500; // Waktu tunggu untuk unduhan
  var nextTimeout = 500; // Waktu tunggu sebelum pindah ke media berikutnya
  var maxDownloads = 100; // Jumlah maksimum unduhan
  var downloadCount = 0;
  var firstDownload = true; // Menandai apakah ini unduhan pertama

  var download = function () {
      try {
          var nextMediaBtn = document.querySelector('.x78zum5.x6s0dn4.xl56j7k.x3x2bpi.xwvwv9b.xexx8yu.x4uap5.x18d9i69.xkhd6sd.x1f6kntn.xk50ysn.x7o08j2.xtvhhri.x14yjl9h.xudhj91.x18nykt9.xww2gxu.xu306ak.x12s1jxh.xkdsq27.xwwtwea.x1gfkgh9.x10l6tqk.x8jeoy8.xyw6214.x160vmok.x1sr6hwe');

          var image = document.querySelector('.x6s0dn4.x78zum5.x5yr21d.xl56j7k.x6ikm8r.x10wlt62.x1n2onr6.xh8yej3.xhtitgo._ao3e');
          var video = document.querySelector('video.x10l6tqk.x5yr21d.xh8yej3');

          if (image || video) {
              var mediaUrl = image ? image.src : video.src;
              var mediaType = image ? 'Gambar' : 'Video';

              // Mencari caption
              var captionElement = document.querySelector('._alhf.x104kibb.x1okw0bk.x14atkfc.xisnujt.x1aliel9.xexx8yu.xc73u3c.x18d9i69.x5ib6vp.x14vqqas.xack27t.x8x9d4c.x6ikm8r.x10wlt62.x12lqup9.x17fgdl5.x16cd2qt.xlyipyv.x1vvkbs.x126k92a.x6by6y.x1s7n7y8.x1ua5tub._ao3e');
              var captionText = captionElement ? captionElement.innerText : 'NoCaption';

              // Menentukan ekstensi file
              var fileExt = image ? '.jpg' : '.mp4';

              // Membuat elemen untuk mengunduh media
              var a = document.createElement('a');
              a.href = mediaUrl;
              a.download = captionText + fileExt;
              document.body.appendChild(a);
              a.click();
              document.body.removeChild(a);

              console.log(mediaType + " berhasil diunduh: " + captionText);
          }

          if (firstDownload) {
              firstDownload = false; // Menandai bahwa unduhan pertama sudah selesai
          } else {
              downloadCount += 1;
          }

          setTimeout(() => {
              if (nextMediaBtn && downloadCount < maxDownloads) {
                  nextMediaBtn.click(); // Pindah ke media berikutnya
                  setTimeout(download, nextTimeout); // Tunggu sebelum unduhan berikutnya
              } else {
                  console.log("Proses unduhan selesai atau tombol 'Next' tidak ditemukan.");
              }
          }, nextTimeout);
      } catch (ex) {
          console.error("Error dalam proses download:", ex);
      }
  };

  // Mulai proses unduhan
  download();
})();
