<template>
  <div class="var-card-example">
    <app-type>{{ pack.basicUsage }}</app-type>
    <var-card :title="pack.title" :description="pack.description" />
    <app-type>{{ pack.showSubtitle }}</app-type>
    <var-card :title="pack.title" :subtitle="pack.subtitle" :description="pack.description" />
    <app-type>{{ pack.showImage }}</app-type>
    <var-card
      :title="pack.title"
      :subtitle="pack.subtitle"
      :description="pack.description"
      src="https://varlet-vue2.vercel.app/cat.jpg"
    />
    <app-type>{{ pack.useSlot }}</app-type>
    <var-card
      :title="pack.title"
      :subtitle="pack.subtitle"
      :description="pack.description"
      src="https://varlet-vue2.vercel.app/cat.jpg"
    >
      <template #extra>
        <var-button type="primary" style="margin-right: 10px">{{ pack.button }}</var-button>
        <var-button type="warning">{{ pack.button }}</var-button>
      </template>
    </var-card>
    <app-type>{{ pack.showRipple }}</app-type>
    <var-card :title="pack.title" :subtitle="pack.subtitle" :description="pack.description" ripple />
  </div>
</template>

<script>
import AppType from '@varlet-vue2/cli/site/mobile/components/AppType'
import VarButton from '../../button'
import VarCard from '..'
import dark from '../../themes/dark'
import { pack, use } from './locale'
import { watchLang, watchDarkMode } from '@varlet-vue2/cli/site/utils'

export default {
  name: 'CardExample',

  components: {
    VarButton,
    VarCard,
    AppType,
  },

  computed: {
    pack() {
      return pack.value
    },
  },

  created() {
    watchLang(this, use)
    watchDarkMode(this, dark)
  },
}
</script>
