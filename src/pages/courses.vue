<script>
export default {
  name: 'courses'
}
</script>

<template>
  <div>
    <h1>all courses</h1>
    <Card style="width: 25rem; overflow: hidden">
      <template #header>
        <img
          alt="user header"
          src="https://primefaces.org/cdn/primevue/images/usercard.png"
        />
      </template>
      <template #title>Advanced Card</template>
      <template #subtitle>Card subtitle</template>
      <template #content>
        <p class="m-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
          sed consequuntur error repudiandae numquam deserunt quisquam repellat
          libero asperiores earum nam nobis, culpa ratione quam perferendis
          esse, cupiditate neque quas!
        </p>
      </template>
      <template #footer>
        <div class="flex gap-3 mt-1">
          <Button
            label="More Details"
            severity="secondary"
            outlined
            class="w-full"
          />
          <Button label="Add to Favourties" class="w-full" />
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup></script>
