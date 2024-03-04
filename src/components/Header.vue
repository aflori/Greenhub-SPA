<script setup>
    import Logo_greenhub from "./icons/Logo_greenhub.vue"
    import LogoData from "./molecules/LogoData.vue"
    import MenuLink from "./molecules/MenuLink.vue"
    let toto = "titi";
</script>

<template>
    <header class="bg-accent">
        <div id="logos" class="flex flex-row justify-evenly container">
            <LogoData />
            <!-- <Logo_greenhub class="h-10"/> -->
            <!-- <Logo_greenhub class="h-10"/> -->
            <!-- <Logo_greenhub class="h-10"/> -->
        </div>
    </header>
    <div id="menu" class="flex flex-row justify-evenly container">
        <MenuLink :url="toto" text="abcd"/>
    </div>
</template>
