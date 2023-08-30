<style scoped>
.editer {
    min-height: 300px;
    max-height: calc( 100vh - 205px );
    padding: 0 15px;
    border: rgba(0, 0, 0, 0.1) solid 1px;
    overflow: auto;

    scrollbar-width: thin;
    scrollbar-color: #a6a6a6 transparent;
}
.editer::-webkit-scrollbar {
    width: 3px;
    background-color: transparent;
}
.editer::-webkit-scrollbar-thumb {
    background-color: #a6a6a6;
    border-radius: 1.5px;
}

.toolbar {
    position: sticky;
    top: 0;
    left: 0;
    height: 40px;
    margin: 0 -15px;
    padding: 3px 5px 0 5px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    z-index: 1;
    background: #fff;
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.1);
}

.toolbar button {
    --color: transparent;
    color: #000;
    width: 25px;
    height: 25px;
    border-radius: 5px;
    line-height: 25px;
    text-align: center;
    border: none;
    padding: 0;
    margin: 0 2px;
    transition: box-shadow 200ms;
}

.toolbar button:hover {
    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.05);
}

.toolbar button.active {
    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.08);
}

.textbox {
    padding-top: 10px;
    padding-bottom: 25px;
}

:deep(.ProseMirror) {
    outline: none;
}


.loading {
    height: 50px;
    border-radius: 2px;
    background: linear-gradient(110deg, #cecece 44%, #e1e1e1 47%, #e7e7e7 50%, #e1e1e1 53%, #cecece 56%);
    opacity: 0.2;
    background-size: 250% 100%;
    background-position-y: center;
    animation: loading 2s ease infinite;
}
@keyframes loading {
    from {
        background-position-x: 0%;
    }

    to {
        background-position-x: 100%;
    }
}
</style>

<template>
    <div class="editer" v-if="editer">
        <div class="toolbar">
            <button
                class="bold"
                :class="{ active: editer.isActive('bold') }"
                @click="editer.chain().focus().toggleBold().run()"
            >B</button>
            
            <button
                class="italic"
                :class="{ active: editer.isActive('italic') }"
                @click="editer.chain().focus().toggleItalic().run()"
            >I</button>
        </div>
        
        
        <EditorContent class="textbox" :editor="editer" />
    </div>
    <div class="loading" v-else></div>
</template>
  
<script setup>
    import { useEditor, EditorContent } from '@tiptap/vue-3'
    import StarterKit from '@tiptap/starter-kit'
    // import Document from '@tiptap/extension-document'
    // import Paragraph from '@tiptap/extension-paragraph'
    // import Text from '@tiptap/extension-text'

    
    const editer = useEditor({
        extensions: [
            StarterKit,
            // Document,
            // Paragraph,
            // Text
        ],
        content: initial_content,
    })
    const initial_content = "Adipisicing est non esse eiusmod Lorem sint ipsum mollit voluptate officia nisi irure elit. Sunt sint laborum esse non aute ea ipsum fugiat commodo nisi ut. Pariatur pariatur ex elit non veniam. Eiusmod nostrud ullamco dolore consectetur laboris veniam qui.\nQui dolore laboris sunt ut. Lorem labore adipisicing veniam consequat commodo. Laboris irure incididunt proident exercitation.\nOccaecat Lorem tempor duis consequat do cupidatat fugiat. Enim dolor ipsum ipsum aliqua ipsum dolor ex sunt veniam exercitation fugiat qui duis eiusmod. Consectetur dolor fugiat adipisicing ut amet sit consectetur.\nSit quis voluptate anim do est eu dolor voluptate aliqua sit deserunt eiusmod. Lorem excepteur consequat irure ipsum ipsum cupidatat qui in. Occaecat anim sit cillum esse.\nLorem exercitation sit enim amet elit mollit ut et anim ullamco ut cupidatat. Veniam nostrud veniam amet nostrud. Labore fugiat occaecat incididunt ex qui deserunt. Incididunt dolore eu eiusmod consectetur. Ea cupidatat voluptate Lorem in occaecat eu irure esse.\nDuis ea ullamco dolor ea sit irure cupidatat ullamco duis. Pariatur nulla aute ullamco fugiat laborum duis id amet aliqua elit nisi. Anim cillum irure exercitation ex sint officia anim aliquip aute eiusmod eiusmod. Nisi ex Lorem qui sint laboris consectetur consectetur velit. Qui deserunt consequat aliqua officia ipsum exercitation fugiat duis do culpa. Laborum et sint nostrud Lorem quis aute culpa quis eiusmod voluptate nostrud est. Eu ex elit dolor elit.\nNon veniam proident ullamco reprehenderit mollit incididunt minim. Nostrud id culpa adipisicing cupidatat dolor duis ullamco ipsum sit eu excepteur est magna est. Labore officia irure commodo sint in exercitation veniam fugiat. Nostrud proident aute magna anim consequat ipsum nostrud sint veniam excepteur nisi in esse.\nMinim incididunt reprehenderit nisi elit reprehenderit dolore laboris do consectetur id id velit. Ullamco reprehenderit excepteur exercitation consequat consectetur quis ea officia minim do sunt nulla. Amet adipisicing dolor Lorem duis aute amet veniam amet anim mollit magna occaecat cillum reprehenderit. Aliquip laboris elit ipsum voluptate. Ipsum velit voluptate est nisi dolor exercitation tempor nostrud tempor voluptate exercitation ullamco.\nDo elit irure consequat sit ex commodo ad nisi nisi sint voluptate sunt culpa cillum. Sunt non ea ad eiusmod et laboris occaecat sit proident. Consequat est labore tempor duis pariatur consequat ea occaecat sint amet non et pariatur. Aute ex laborum deserunt velit quis dolore sunt ut elit adipisicing aliqua elit amet.\nIn officia dolor incididunt culpa non sit magna veniam. Aliquip eiusmod ex ut nostrud Lorem nulla eiusmod. Nostrud culpa fugiat exercitation elit adipisicing exercitation fugiat. Commodo voluptate sit laboris amet. Irure cupidatat qui enim et sint eiusmod excepteur excepteur ut esse eiusmod exercitation eu sint. Nisi fugiat non sit non culpa esse proident quis enim.\nAdipisicing incididunt labore cillum fugiat officia in deserunt voluptate incididunt. Amet excepteur nisi consequat veniam nisi incididunt ea aute reprehenderit ea proident sunt fugiat consequat. Officia ad esse aliquip cillum nulla consectetur incididunt occaecat aute ipsum sunt. Enim ex tempor excepteur aliquip dolor culpa in do. Ut ea laborum irure ad quis dolor id magna enim est.\nExercitation cillum quis enim laborum sit culpa officia officia anim nisi. Incididunt ad in dolore aute non mollit. Qui officia velit anim do ex occaecat est ut aliqua ea non nulla fugiat et. Ut cillum tempor proident non officia ipsum laboris esse reprehenderit tempor. Velit esse esse cillum eiusmod eiusmod ex irure deserunt. Fugiat laborum occaecat fugiat laborum voluptate. Elit eu non do consectetur quis non enim occaecat tempor aute.\nPariatur consequat dolore esse est occaecat elit. Lorem exercitation cupidatat consectetur laboris. In non sint occaecat culpa nostrud.\nDolore veniam proident minim duis nostrud commodo minim aute ullamco eiusmod tempor sit ea. Est elit cillum eiusmod nulla tempor est id duis Lorem Lorem mollit eiusmod id. Id Lorem sunt Lorem mollit commodo sit dolor dolor aliqua ea. Et dolor aliqua ut ut fugiat nisi minim quis laborum labore.\nDuis voluptate sit aliqua elit cillum pariatur deserunt. Sit fugiat quis cillum elit proident excepteur exercitation dolore qui do ad adipisicing. Ad non ut labore eiusmod irure ea incididunt pariatur voluptate commodo. Nisi do adipisicing ad duis fugiat irure adipisicing esse qui amet labore. Consequat incididunt deserunt labore esse id elit sint ex exercitation non fugiat. Quis laborum adipisicing sit in cupidatat quis cupidatat ea proident quis pariatur cupidatat ut proident.\nDolor dolor cupidatat irure consequat velit sit nulla. Cillum velit velit eu consequat. Sit exercitation tempor ut labore voluptate anim reprehenderit et magna sunt sunt aute. Eu irure et irure est in duis elit.\nReprehenderit sint occaecat non consequat. Dolore sit mollit dolore non dolore. Cupidatat tempor cupidatat amet reprehenderit culpa aute ullamco nulla consequat ullamco. Fugiat enim sint veniam aliqua. Magna do sit mollit officia tempor. Laborum aliqua sit veniam nulla qui id eu aliqua cupidatat minim dolor. In tempor cupidatat ad commodo sunt et cillum anim sint aliqua cupidatat consequat esse.\nTempor minim pariatur exercitation exercitation dolor commodo dolore aliqua exercitation eu. Ad duis deserunt Lorem culpa magna sint ea tempor eu sunt proident. Dolor culpa culpa aliqua quis fugiat. Proident excepteur fugiat in consectetur eu nisi pariatur.\nMinim veniam incididunt non laboris id tempor labore sint excepteur Lorem dolore est. Aliquip elit culpa eiusmod proident tempor ex enim ut commodo. Irure est exercitation Lorem sunt aute culpa sint. Do ea excepteur reprehenderit dolore laborum dolor qui non deserunt. Nisi commodo irure exercitation mollit velit est proident deserunt dolor. Sit pariatur aliquip nostrud sint et irure elit ad pariatur sunt quis voluptate.\nMollit aliquip laborum ad ullamco pariatur reprehenderit commodo veniam nostrud aliquip velit consectetur. Eiusmod quis aliqua sunt dolor ullamco pariatur voluptate fugiat ea est voluptate anim. Eu veniam ipsum occaecat ex labore ad velit dolor sit esse minim est est incididunt. Tempor consequat excepteur consequat laboris elit. Voluptate enim ut dolor labore tempor ad mollit eiusmod reprehenderit labore. Aliquip laborum consectetur amet commodo cillum ipsum fugiat sunt. Voluptate tempor est sunt commodo do do velit sit magna.\nAdipisicing culpa in proident esse aute magna deserunt. Ex enim sit cillum ullamco nisi pariatur adipisicing cillum sunt sint reprehenderit anim in cillum. Qui enim nostrud ex Lorem ea ea sint. Aute mollit laborum ullamco magna ad dolor voluptate in occaecat minim laboris ex. Duis elit cupidatat esse proident eu nulla non ut enim excepteur. Exercitation sunt aliqua voluptate nisi. Elit minim fugiat in et.\nAd Lorem Lorem in esse anim eiusmod ea. Laborum sint Lorem eu irure id velit nisi eiusmod. Exercitation ea aliquip cupidatat anim aliqua. Culpa sunt reprehenderit ad qui ex minim veniam ullamco consequat culpa enim sit ex.\nDeserunt ullamco consequat culpa pariatur laboris cillum aliquip. Elit duis esse reprehenderit ex nisi. Deserunt commodo eu irure veniam consequat culpa sint nostrud. Velit duis qui aliqua amet labore occaecat exercitation et id. Tempor qui esse deserunt ex esse irure excepteur. Aute sint aute ad amet.\nLabore consectetur exercitation ut irure esse Lorem eiusmod ad nisi cillum cupidatat cillum. Eu qui eiusmod cupidatat id ullamco laboris consectetur enim mollit cillum. Incididunt velit do adipisicing mollit ea tempor ipsum commodo. Mollit exercitation cillum in tempor consequat irure labore cillum.\nProident amet ut ad sunt sunt elit minim eiusmod amet consectetur veniam fugiat anim. Lorem dolor labore proident eu nostrud exercitation ut magna ipsum laboris nostrud ad enim. Fugiat minim eiusmod eiusmod eiusmod nisi enim nisi ad magna. Sunt culpa in ut duis sint sit nostrud sunt.\nSunt do minim laboris Lorem tempor tempor esse veniam ipsum labore veniam ullamco incididunt. Lorem laboris nulla ad aute ea proident excepteur dolore do nulla anim officia amet. Labore velit est enim occaecat consequat. Ipsum officia exercitation veniam anim enim.\nFugiat do eu eiusmod anim nulla sint commodo et et fugiat. Non do consectetur quis laboris tempor enim Lorem dolore et in in aliquip reprehenderit aute. Do anim ex nostrud excepteur.\nAmet excepteur fugiat laborum ullamco. In consequat ullamco est occaecat mollit duis elit ullamco dolor anim ea qui labore anim. Minim commodo in sint duis velit occaecat exercitation cupidatat. Nisi amet exercitation officia cupidatat exercitation aliquip consequat dolore qui anim consequat. Nostrud aliquip nostrud voluptate adipisicing.\nConsectetur nulla excepteur dolore velit exercitation. Incididunt et voluptate incididunt do quis minim cillum qui minim. Nostrud deserunt occaecat nisi quis cupidatat aute in nulla nulla amet Lorem aute eiusmod adipisicing.\nEu est officia est dolore irure duis fugiat nisi duis non enim. Nisi in consectetur cupidatat commodo fugiat. Ipsum laborum non mollit incididunt eiusmod. Pariatur irure laborum culpa fugiat. Quis ea nostrud reprehenderit incididunt exercitation incididunt laboris anim Lorem reprehenderit veniam velit."
</script>