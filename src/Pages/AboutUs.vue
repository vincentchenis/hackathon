<template>
    <div class="Main flexbox">
        <div class="centerBanner">
            Our Story
        </div>
        <div class="explanation" style="padding-bottom: 10vw;width:70%">
            Student Heroes is a team of passionate young people, dedicated to helping students explore their passion for volunteering. While working with
            high school students across NSW, our team noticed that young people are increasingly interested in charity work, but struggle to get involved on a regular basis. 
            To kick-start volunteering opportunities, our founders gamified charity work and created a competitive but friendly environment for young students to express their passions for social change.
        </div>
        <div class="mission flexbox">
            <div class="centerBanner" style="align-self:left">
                Our Team
            </div>
            <div style="align-self:center;width:80%">
                <img src="../assets/lol.png" style="width:100%">
                </image>
                <div class="bios">
                <div style="margin-left:2vw">
                    <h5>Vincent Chen</h5>
                    <p>Web developer</p>
                </div>
                <div>
                    <h5>Laurel Lu</h5>
                    <p>Marketing Lead</p>
                </div>
                <div>
                    <h5>Blake Im</h5>
                    <p>Project Manager</p>
                </div>
                <div>
                    <h5>Harry Partridge</h5>
                    <p>Web developer</p>
                </div>
                <div style="margin-right:2vw">
                    <h5>Stanley Chen</h5>
                    <p>Partnerships</p>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'About us'
}
</script>

<style scoped>
.bios {
    display:flex;
    flex-direction:row;
    justify-content:space-between;
}

.bios > div {
    width: 10vw
}

h5, p {
    text-align:center;
}

</style>