<template>
  <div :class="$style.topbar">
    <div class="mr-4">
      <cui-fav-pages />
    </div>
    <div class="mr-auto">
      <cui-search />
    </div>
    <div class="mr-4 d-none d-sm-block">
      <cui-language-switcher />
    </div>
    <div class="mr-4 d-none d-sm-block">
      <cui-actions />
    </div>
    <div>
      <cui-user-menu />
    </div>
  </div>
</template>

<script>
import CuiSearch from './Search'
import CuiLanguageSwitcher from './LanguageSwitcher'
import CuiActions from './Actions'
import CuiUserMenu from './UserMenu'
import CuiFavPages from './FavPages'

export default {
  components: {
    CuiSearch,
    CuiLanguageSwitcher,
    CuiActions,
    CuiUserMenu,
    CuiFavPages,
  },
}
</script>

<style lang="scss" module>
@import "./style.module.scss";
</style>
