<template>
  <div class="gks">
    <div class="container">
      <h2 class="title">{{ $t("gks.title") }}</h2>
      <div class="gks__box">
        <img src="../../assets/images/gks.png" alt="" />
        <div class="gks__info">
          <div class="gks__info-text">
            <h3>{{ $t("gks.info_text_1") }}</h3>
            <p>{{ $t("gks.info_text_2") }}</p>
          </div>
          <div class="gks__info-text">
            <h3>{{ $t("gks.info_text_3") }}</h3>
            <ul>
              <li>{{ $t("gks.list_item_1") }}</li>
              <li>{{ $t("gks.list_item_2") }}</li>
              <li>{{ $t("gks.list_item_3") }}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="gks__video">
        <iframe
          allowfullscreen
          rel="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          src="https://www.youtube.com/embed/zj355hKD3lY"
        ></iframe>
        <p class="gks__video-desc">{{ $t("gks.video_desc") }}</p>
      </div>
    </div>
  </div>
</template>

<script setup></script>
