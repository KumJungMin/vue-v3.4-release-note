<script setup>
import Child from "./Child.vue";
</script>

<template>
  <h3>Props Validator에 다른 Props 값 사용하기</h3>
  <pre>
    <code class="comments">{{`// Child.vue`}}</code>
    <code>{{``}}</code>
    <code>{{`const props = defineProps({`}}</code>
    <code>{{`  maxRange: Number,`}}</code>
    <code>{{`  minRange: Number,`}}</code>
    <code>{{`  value: {`}}</code>
    <code>{{`    type: Number,`}}</code>
    <code class="highlight">{{`    validator: (value, props) =>`}}</code>
    <code class="highlight">{{`      value >= props.minRange && value <= props.maxRange,`}}</code>
    <code>{{`  },`}}</code>
    <code>{{`});`}}</code>
  </pre>
  <hr />
  <br />

  <h4>Case1. value가 범위 안일 때</h4>
  <Child :max-range="10" :min-range="0" :value="0" />
  <pre>
    <code>{{``}}</code>
    <code>{{ `<Child :max-range="10" :min-range="0" :value="0" />` }}</code>
  </pre>

  <br />
  <h4>Case2. value가 범위 밖일 때, props warning 발생</h4>
  <Child :max-range="10" :min-range="0" :value="11" />
  <pre>
    <code>{{``}}</code>
    <code>{{ `<Child :max-range="10" :min-range="0" ` }}<span class="error">{{ `:value="11"` }}</span>{{ ` />` }}</code>
  </pre>
  <div class="warning">
    [Vue warn]: Invalid prop: custom validator check failed for prop "value".
  </div>
</template>

<style>
pre {
  border-left: 0.2rem solid rgba(0 0 0 / 0.25);
  background: #f4f4f4;
  padding: 0.5rem;
}
code.comments {
  color: rgb(143, 143, 143);
}
code.highlight {
  color: rgb(0, 73, 220);
}
code .error {
  text-decoration: rgb(224, 0, 0) wavy underline;
}

.warning {
  padding: 4px 10px;
  border-radius: 4px;
  color: rgb(251 243 178);
  background-color: rgb(64 60 41);
}
</style>
