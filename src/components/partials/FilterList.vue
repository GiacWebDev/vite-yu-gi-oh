<script>
import { store } from '../../Data/store';
import { archetype } from '../../Data/archetype';
import SelectArchetype from './SelectArchetype.vue';

export default {
    name: 'filterList',
    emits: ['searchFilter'],

    components: {
        SelectArchetype,
    },

    data() {
        return {
            store,
            archetype,
        }
    },

    created() {
        // store.getApiArchetypes();
        archetype.getApiArchetypes();
    }

}
</script>

<template>
    <div class="pb-3">
        <select name="choose_archetype" id="choose_archetype" @change="$emit('searchFilter')"
            v-model="store.archetypeSelected">
            <selectArchetype v-for="filter in archetype.listsArchetype" :type="filter.archetype_name" :key="filter"/>
        </select>
    </div>
</template>


<style lang="scss" scoped></style>