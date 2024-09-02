<template>
  <div class="footer">
    <div class="container">
      <div class="footer__box">
        <a href="" class="footer__logo">
          <img src="../../assets/images/footer-logo.png" alt="" />
        </a>
        <ul class="footer__list">
          <li><a href="" class="footer__link">Nega biz</a></li>
          <li><a href="" class="footer__link">Natijalar</a></li>
          <li><a href="" class="footer__link">Kurslar</a></li>
          <li><a href="" class="footer__link">Savollar</a></li>
        </ul>
        <div class="footer__media">
          <a href=""><img src="../../assets/images/phone.png" alt="" /></a>
          <a href=""><img src="../../assets/images/insta.png" alt="" /></a>
          <a href=""><img src="../../assets/images/tg.png" alt="" /></a>
          <a href=""><img src="../../assets/images/youtube.png" alt="" /></a>
        </div>
      </div>
      <p class="footer__commit">Made by <span>SOLIWEB</span></p>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "../../assets/sass/media.scss";

.footer {
  position: relative;
  background: #333333;
  margin-top: 80px;
  padding: 25px 0;

  @include media(1000) {
    margin-top: 60px;
  }

  @include media(900) {
    margin-top: 50px;
  }

  @include media(800) {
    padding: 20px 0;
    margin-top: 40px;
  }

  @include media(700) {
    margin-top: 30px;
  }

  @include media(550) {
    padding: 20px 0;
    margin-top: 25px;
  }

  @include media(400) {
    padding: 15px 0;
    margin-top: 20px;
  }

  @include media(380) {
    margin-top: 15px;
  }

  &__logo {
    @include media(380) {
      display: none;
    }

    img {
      @include media(850) {
        width: 80px;
      }

      @include media(800) {
        width: 70px;
      }

      @include media(700) {
        width: 60px;
      }

    }
  }

  &__box {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @include media(380) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;
    }
  }

  &__list {
    display: flex;
    align-items: center;
    gap: 35px;

    @include media(950) {
      gap: 30px;
    }

    @include media(850) {
      gap: 25px;
    }

    @include media(700) {
      flex-direction: column;
      gap: 8px;
    }

    @include media(500) {
      gap: 5px;
    }
  }

  &__link {
    font-size: 18px;
    color: #fff;
    font-family: "HelveticaNeueCyr";

    @include media(950) {
      font-size: 16px;
    }

    @include media(850) {
      font-size: 15px;
    }

    @include media(700) {
      font-size: 14px;
    }
  }

  &__media {
    display: flex;
    align-items: center;
    gap: 30px;

    @include media(850) {
      gap: 25px;
    }

    @include media(750) {
      gap: 20px;
    }
  }

  &__commit {
    position: absolute;
    left: 5px;
    bottom: 5px;
    font-size: 16px;
    color: #c3c3c3;
    text-align: center;

    @include media(950) {
      font-size: 15px;
    }

    @include media(850) {
      font-size: 12px;
    }

    @include media(750) {
      font-size: 10px;
      text-align: left;
    }

    @include media(650) {
      font-size: 8px;
    }

    span {
      font-family: "Montserrat";
      font-weight: 500;
      font-size: 18px;

      @include media(950) {
        font-size: 17px;
      }

      @include media(850) {
        font-size: 14px;
      }

      @include media(750) {
        font-size: 13px;
      }

      @include media(650) {
        font-size: 10px;
      }

      @include media(550) {
        font-size: 8px;
      }
    }
  }
}
</style>
