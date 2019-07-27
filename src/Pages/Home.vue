<template>
    <div class = "Main flexbox">
        <div class="header1">Come as a student, leave as a hero.</div>
        <div class="explanation" style="padding-bottom: 10vw;">Join hundreds of students who have decided to do more for their community. </div>
        <div class="mission">
          <img class="empower" src='../assets/empowerment.png'>
          <div class ="Leftbanner">Our Mission</div>
          <div class="leftexplanation">
            We aim to empower every student to make the social change they're passionate about, giving them unforgettable experiences and fulfilling work.
            Our main goal is to simplify the volunteering process for students who want to make a real impact in their communities.
         </div>
        </div>

        <div class ="centerBanner">Why join?</div>
        <div class="deck">
          <b-card-group deck>
            <b-card title="Find Opportunities" img-src="https://picsum.photos/id/1023/300/300" img-alt="Image" img-top>
              <b-card-text>
                With increasing demands for skilled workers in the workforce, volunteering opportunities will up-skill your students and place them in a talent acquisition league of their own.
              </b-card-text>
            </b-card>

            <b-card title="Earn Rewards" img-src="https://www.latestbuy.com.au/img/landingPages/gift-giving/gift-giving.jpg" img-alt="Image" img-top>
              <b-card-text>
                5 opportunities to win trips to an international volunteering conference, $500 in credit for the top 10 ranking students to donate to a charity of their choice and $50 in westfield gift cards for the highest ranked student in each school.              </b-card-text>
            </b-card>

            <b-card title="Make a Difference" img-src="https://picsum.photos/id/1035/300/300" img-alt="Image" img-top>
              <b-card-text>
                We’ll help your students maximize their problem solving potential whilst assisting with real life implementation.
              </b-card-text>
            </b-card>
          </b-card-group>
        </div>
    </div>
</template>

<script>
export default {
    name: 'home'
}
</script>

<style scoped>
    .deck {
      padding-left: 5vw;
      padding-right: 5vw;
      text-align: center;
    }
    .header1 {
      color: #f60090;
      align-self: center;
      padding: 2vh 2vw 2vh 2vw;
      font-weight: 900;
      font-size: 3em;
      margin: 10vh 0 5vh 0;
    }
    .Leftbanner {
      color: #f60090;
      align-self: left;
      padding: 2vh 0 2vh 2vw;
      font-weight: 900;
      font-size: 3em;
      margin: 5vh 0 0 5vh;
      width: 500px;
    }
    .leftexplanation {
      align-self: left;
      margin-left: 5vh;
      padding: 0 0 0 2vw;
    }
    .empower {
      width: 20vw;
      float: right;
      padding-top: 2vw;
    }
    .mission {
      padding-left: 5vw;
      padding-right: 5vw;
      padding-bottom: 8vh;
      background-color: #d8d9dc;
    }
</style>

// Empowerment icon from https://www.flaticon.com/free-icon/empowerment_1939585
// Scholar hat icon from https://www.flaticon.com/free-icon/graduation-hat_422
