<style scoped>
.footer {
    box-sizing: border-box;
    padding: 10px 5px;
    --alpha: 0.2;
    background-color: rgb(255, 255, 255);
    background-image: linear-gradient(to right, rgba(149, 229, 238, var(--alpha)), rgba(247, 177, 177, var(--alpha)));
}

.footer .container {
    display: flex;
    flex-direction: row;
    justify-content: center;

    
    width: min(100%, var(--view-width));
    box-sizing: border-box;
    padding: 15px;
    margin: 0 auto;
}

.footer .links {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.footer .link {
    margin-left: 5px;
    text-decoration: none;
}
@media screen and (max-width: 500px) {
        .footer {
            padding: 5px 10px;
        }
    }
</style>


<template>
    <div class="footer">
        <div class="container">
            <span class="copyright">© YinyunStudio 2023</span>
        </div>
    </div>
</template>