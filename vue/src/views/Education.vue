<template>
  <div id="carouselExampleInterval" class="carousel slide carousel-fade" data-mdb-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active" data-mdb-interval="2000">
        <img
          src="https://image.cnbcfm.com/api/v1/image/106604493-1594057373282harvarduniversitysdunsterhouseincambridgema.jpg?v=1594057738"
          class="d-block w-100" alt=""/>
      </div>
      <div class="carousel-item" data-mdb-interval="4000">
        <img src="https://www.science.org/do/10.1126/science.aav7395/abs/MIT_16x9_0.jpg" class="d-block w-100" alt=""/>
      </div>
      <div class="carousel-item" data-mdb-interval="5000">
        <img
          src="https://sciencebusiness.net/sites/default/files/styles/article/public/2020-07/universities-call-for-higher-budget.png?itok=3kv4rkjM"
          class="d-block w-100" alt=""/>
      </div>
    </div>
    <button class="carousel-control-prev" data-mdb-target="#carouselExampleInterval" type="button"
            data-mdb-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" data-mdb-target="#carouselExampleInterval" type="button"
            data-mdb-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <br><br>

  <div class="text-center mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 mb-2">
   Electrical Engineering Universities
  </div>
  <p class="text-base text-indigo-600 font-extrabold tracking-wide uppercase text-center text-xl">TOP 10</p>

  <br>
  <div class="container">
  <div class="cards">
    <div class="row row-cols-1 row-cols-md-3 g-5">
      <div v-for="feature in features" :key="feature.name" class="relative">
        <div class="col">
          <div class="card hover-shadow">
            <img :src="feature.image" class="card-img-top" alt="image"/>
            <div class="post-date">
              {{ feature.rank }}
              <span>Rank</span>
            </div>
            <div class="card-body">
              <a :href="feature.link" target="_blank">
                <h5 class="card-title text-gray-900 hover:text-indigo-700">{{ feature.name }}</h5>
              </a>
              <div class="card-header">
                <i class="fa-solid fa-location-dot"></i>
                {{ feature.location }}
              </div>
              <p class="card-text">{{ feature.description }}</p>
              <a :href="feature.link" target="_blank">
                <button class="custom-btn btn-3">
                  <span>Visit</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>

</template>


<script>
const features = [
  {
    name: 'Massachusetts Institute of Technology',
    description: 'The Massachusetts Institute of Technology (MIT) is a private land-grant research university in Cambridge, Massachusetts. Established in 1861, MIT has since played a key role in the development of modern technology and science.',
    location: ' Cambridge, United States',
    rank: '#1',
    link: 'https://www.mit.edu/',
    image: 'https://cdn.britannica.com/17/100117-050-EA32F934/Massachusetts-Institute-of-Technology-Cambridge.jpg',
  },
  {
    name: 'Stanford University',
    description: 'Stanford University, officially Leland Stanford Junior University, is a private research university in Stanford, California. The campus occupies 8,180 acres (3,310 hectares), among the largest in the United States, and enrolls over 17,000 students. Stanford is ranked among the top universities in the world.',
    location: '  Stanford, United States',
    rank: '#2',
    link: 'https://www.stanford.edu/',
    image: 'https://www.stanford.edu/wp-content/uploads/2022/04/Memorial-Church.jpg',
  },
  {
    name: 'University of California, Berkeley',
    description: 'The University of California, Berkeley is a public land-grant research university . Established in 1868 as the University of California, it is the state\'s first land-grant university and the first campus of the University of California system.It offers over 350 degree programs',
    location: ' Berkeley, United States',
    rank: '#3',
    link: 'https://www.berkeley.edu/',
    image: 'data:image/jpeg;base64,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',
  },
  {
    name: 'Nanyang Technological University',
    description: 'The Nanyang Technological University is a national research university in Singapore. It is the second oldest autonomous university in the country and is considered as one of the most prestigious universities in the world by various international metrics. NTU is consistently ranked within the top 80.',
    location: 'Singapore, Singapore',
    rank: '#4',
    link: 'https://www.ntu.edu.sg/',
    image: 'https://apru.org/wp-content/uploads/2021/12/Nanyang-Technological-University.png',
  },
  {
    name: 'National University of Singapore',
    description: 'The National University of Singapore is a national research university in Singapore. Founded in 1905 as the Straits Settlements and Federated Malay States Government Medical School, NUS is the oldest autonomous university in the country. It offers degree programmes in a wide range.',
    location: ' Singapore, Singapore',
    rank: '#5',
    link: 'https://www.nus.edu.sg/',
    image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFBcVFRUYFxcaGhsXGhsbGB0aGxsaGBobGxsaGxgcICwkGx4pIBsYJTYlKS4wMzMzGiI5PjkyPSwyMzABCwsLEA4QHhISHjIpIikyMjIyNDIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMv/AABEIAMIBAwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAAIDBAYBBwj/xABNEAACAQIEAwUEBgYHBQYHAAABAhEAAwQSITEFQVETIjJhcQaBkaEUI0JSsfAzYnKSwdEVU4KisuHxJEODwtIHNGNzk9MWNURUZLPD/8QAGgEAAwEBAQEAAAAAAAAAAAAAAAECAwQGBf/EACwRAAICAQMDAwMEAwEAAAAAAAABAhEDEiExBEFRExRhMoGhIjNxkVKxwQX/2gAMAwEAAhEDEQA/APQLlwqdR5U9WWrhysIofiMMRsAa6k0zJpokNwCn/TIHP4VALDDeo855TVaUybZcTFzyNd0J0FMszzFSldelQxocqEHYmrSWz0rlq7G8/CrCkGs5NlIVtDzqTKKQXoaifE2wYZ0B2gsAfxqGyyU264q1Hi8UltC7mFEawTuYGgoXY9pMKXyhyP1ipC/Hl76FYBkmnA1y24YAqQQdiDIPvpxpANIrgtjpSBPSnigBpIGpgeulNtXlacrBgDBggwemlYj2qwyXrwuNcyKuW14c2Zi5A2OkswWmcPwRsw1q6wBLKwPdzRpI9CPzzenYDW8T4xZw+XtWKlpIAVmmInYeYqDhftFYxDFELAjbMMubfw6+VZ7jzdpbFx7RvFEbKoYqdFk6jxElQPfVfiFi3Yt50t5e8pLJ4kiTn6tHQaxNPSqA9Crmag3AuLdsuVoFxQCejLydfIyPj50Xy1NAcZo1FQi83Q1YrjQBNFoDu4qFk3iq7Yk7U5L1VpaFZKy+ZrmXzqC5djY1F2pPOqpiCKjoaRzVQw901eR6lqijoDV1Q3Mik91R4mA9SBVZ+K2F3up7mB/CpCi3NKgl3j2Hk/Wj4H+VKiiist4DnU63wedRLhATz+FSrhPI/Cup6Tm1SHXbkroargN0+VWVsEcqk1ouuAuyuNIk1KojWad2Wc6mOtOxaAQF0jlU32H8iF09amsXjVXD2M2+1XUw8HQ6VMqKVkty6VRmjYEx6elYi1wy32jD60nNJIyhRmBaRpJHL1IrZYkdx5P2Tzjl1rNBR2zTH2CJMn9HcGijwnQ6nQiahbFIjw4CrdtF86jI2RzlyidJ1iJEyN6ivLbGGS52dkFwhIZ8iywmFursZ2YyKWAcm5d3gKsRDrOczlXfN1B06VO0/QrRUt4E1S0r6RztH7PUDXpQUVcLnQzZd7Tkx2dwqpJie6fBcEc6N8I47ca4tm7bhzIkabKW1Q7bbis7gUU22CBGXMMwtqbieFtHtP37Slo7q66dKZwe3dt3ENs5oeFOc3bbZmyEQwz2WILcwO6ZpPcD0kUq5FdFQMxnHuub/f2xOQH/AHyCMp26ZvfUWNeFWZ1ZvGN+/pB5fq+UVc44p1jtJ7a3se9HapMx9iN/1ZofxMQLfiHffY5t3Op9enKa07CK2LtBsE8orD6/Q3AoM9p9o7Tr6AnpVn2nT6gaa5lIgw4IBM2/vOInLzANVb0fQn/Rf78d+Qu9yZgjXQyemar3tQs2FHdMugAYlSx1gI/2H6E8xHOgCH2VxZXE5GBOdWAPNQTmzfsEqdPsNKnTLO9NeccAWcVbJYCXcjWCWCnMJ5XDEOuz+Ic49IqZAhoFccTpTjUD3QDrSW4FTEWCNZ50sNaG5q6DPLSmug30FXq7E0D7iEmRoK6DyirJA60mQCI1p2BWgirFtjlb0P4VYS1zNLEgC2/7LfgalyGkeT2nZUusrJK3Mo7RjAETA1310Ggqu2LYoCMQCxOqpbEAa7MitPKrDpNu7pbf60kh9AsWxqNpfaNee+lU0um2isl2yGIghSDlnU6s7A1ZRWbFP/XXPg4/5aVMnNqzqSdzkXX+5SqRG9fj6pfu2itwFIacwgh2QDSdI7QfCph7UW5RT2ozI9waaAWzcDAmd+43yoFxm2v0u8ZMlQuw0yobs+LpZI23IqBEW52ORhBS6kFd+2uYgJsTABkGkwo2Fr2iszHasCDGUqZ8apMRqMzKJ86mT2hstA7VNQraqV0cqF3jcso99Y204ZcwbSC58YHcfDXCcoXKTE6zPrrHMPYUOjZgV7O0Bod1uWnGn7JU+/3Uh0bkcUtb57W0+MDSJnfaKc2JRjPdMwdHBkHUR8R8awSW/q/sECwxJDKBAS6hPdOUCVUaRv8ADt2wD2UsncWzm1XTswA89I7Mz+yadsnSj0ZNVBAiakt7RVH2cSMJY8raD4KKJqpp2JojvpKN+yfM7dOdZwKe2eM3ht7KI8N7d9yNtOWnU1psTojk7ZWn4HprWVtX7b4hgInJb8QcHe+NBAAOuh5yelJMdFPhY+vvTv2Y1IyGA5j63w5dfUe+rmIQHBW5ie54r2QzMCLw+10PWqGBvql+9J07NtjmBYPJHZHQt589qB4viKuhWcumUGBBGbURuB+edZzyKKHQeQMEJfMCHXKb0KQ2VwCl61vGv1j7e+q+GxuZ1Z1ZVzqvaSGKiQv6a33tg3jXXPuAaB8Oxb25KORIMhDAOjbqwhuekHnUOB4mVuq5AMsJgZcy5gSp5RIGnlULOu6DSe00qoYbHo5ORg0GDBkj1FXga1BOzJ8ftgqdF/T2jBeBPboZzHnOuXrpVDiyx2ei+N9iR9vXfc9fOn+0KXe9DoE7ZI0ET2yQMvZk5pgTO+u1M4se5aBIJzsJyxqHjTQc+ca71T4Agd4wTEsF/T+NA4ibh2ynu89tYjnV32qYCwJKAFlBzrKNIPdc7op+8IgxQ/EITgDlZ1714ns+8dGub95efKd4FS8dwb27OcXH3AMIzrlgz2isxlNp0PLSmuAIuBWyuLQCSuYllgEiVbISI7yAwVuDlvBJr0avOMBdKX7bqBGc5J76d6Q5tONUMTmttty1E16PUyBDWqFkHOpzVfEITtQhMY+JA0qnfxQ61zE4B2iGihV3B3AYitYqJDbCC4sE1dsPNCLGGK6sauW7nQ6U5IaYWV6jxrjsn/Yb/Cap3MUqKXdgqqJJOwAqK1xO1fw1x7TZlCus+YEbbgdJrJqikzzrITaci2tz60nUxl7ijMOrDaKrJmtKrKbIJGozEldjrmYCpntZ8OD2XaxcZtGylTtIEHMeUQedQrZayqxbtmRsTnywBv3ViqZRUQTr3OezA8/2zXaVsGNVUb7T1/apUhGn48VXFGRqyNcMAbJbvrl3GpBPw1qrg7aWzYBJ/SG0O6uptXi5Pi0BFyKKe0WHU4xBqJt5JBn9Kz29vIvNDMPluLZeGXLea4RAMkvh0IM+ZzT61L5GuBuEtKtogElBbfUK0AGxaZdmKDb7QJ6c5myZSq5lzLbJOhy/Vxbbl960d+UbbUzDWFyFRuqXLc5bcrkwzpI74Ik25hZ31jcS3AG+sDMJs3I7o17Q4hxHe+zlOm2o1pMB96zmLEtr2F+1rnJkviCveZAdkPLlpIgmjjLqKpOcMHV4gmfrDispgjfvrM0Uu2u/l1zN2+6/ZRsQ5Grk6rc016aKNBlsVYy5FUkkBgwPOGuGdd9IrPJJrgNzT8J9qrlq1bUqhtomUCe+Qo02Ok6CjuH9srRudm6NbMgTIYbxMjltWAtYXuZ99J0kQMrOZ6TqJnlFOxFm0GZDeBcKCpBkF2UEgnYRz15RUKUkhPk9iZgytBnQjSDy89J9ay1+yLdw5EIlLYlFVQO/cnv7ncSPSN6DeyXG1TMrP3GJlYzAd3xwNYgAQByrRcVXLcLQpIS2dQxOl0xoNNC2h5HU6CtoSuNgY/EW/wDaDvOUtoR3YBObPuunXah30UFSZBJLTmbJ4TMZuUiCNN9KZxW2UuN3wWctmgFftSQoO66afCqQc5hrMmSfFt1HPn8q5ZPfgqghaskr4WMgnULcEKSNCuu43NDCpLQrAxI3gb6RPLyoiCFU9m6Esw1COh085g6kjT30PsMO6TqZJgESYMKIYabfOiSGafgmI7G4LrIRpvm010OYwZ6evOvUF2FedoJsC8rh1BMoAIgQdvIAEeu1BLXtJikuo5ctkA7g0XIACQwAgjfXUjWtobPT9yG6N3xwHITL/prX2VLR2yCIJjLGk7ga71R44h+r8fjfcDbPp/Zjbyq81w3sJbuZSC72XIVisTfQnvGdBrpzGmk1Fxy1pbgD9I/2/wBffTffUctq2bAGi2xwLZRcYzf/AEZ7NvFcGhjU8gepB5US9pbTG0uVbrEOD9U4S4vdbvCdH/Z5z5VVuYcHh7ZlVtb+ly4FG9zZiYGk+iz0oh7VYdWsoCtp++IFy52QnK0ZHGz9PKad7ABuAANihlK+Ji+X6t9AdL1lxD6wM6VvjWJ4XbcYm2LiXIDOVNy2LgEocvZ3lkqBr4o0NHsbx+1bYp3ncRKqBpP6zELy61LALBqaWFA8P7Q2rjFQLivyRkILRvlPhMevKp8PxNHfJ30Y7B0ZQQJPiiOR501QrCZqq6EmnzOzqf7QrP8AGfa+zhzl71wxMoAVHkX/AJTvTtITDb2pGooRj+M4fDtluNlY6hQrE89oEcutYzjftu13wZkAIIWdG/a+9Gvl5cwIw/tQAMrWbTLqcuTL3j9oFYymen+dGvwLk0/GOPNcJ7MA2pDLnUGTl0hegMmTrrVRONXFtlEREdozMogMeptjQ6aamqd241xu0JPf74WdAG70aaE67/hUTpOhGby01+Nc8sklKjshji4ajQ+0PDFuIi5AWEldcgBMZtlIMidwaEYbgDII7K0dAO8xaNOX1Qot7TOO0tKGytDHdojQctJmKE3gdJuc/wBboa6Ujns7b9n3AHeX5/8ATSqmxP8AWfI0qdAGrnE7dxsOXcNchQ5kLkKPbuajLEEgjTzp3BcFbNtNWXvgwSWk3bdm7AypJjs45c/SsVwnhVy/cCopUeLOzFEIBGbKxEc9q9E4f7PNay9netqobOPrC0NlZZgiPCzDprWMW5bsSbonwvDVJuMvanxO0202cXDC5mBGlxuh286FpxHDBQoTEwq5R3U27/8A4m/1jfLpWsw9h1zRetNmWNTtynTyoNb9mSBBv2uXIHbly6U26HZNwhLd7M6JdGVnkRbQTcXvGFeDM7nWdd9afjeAWozNYuGNdGHL+3RPgmFFgODcttmIIghdhH59Kv3r8ggPbjzak0mM8v4hxHA2ibLYa8AIJm4ADPMHOT/pVJuI4HlhHb1vn8MhrbY32dt3H7RrtiYA1CnbzJ86dhfZy2uufDt/ZX8alx8f6J3MWOO4ZZAwdsaQZult+WlsTNWrvtm52tp0lnunTTT9INPKtw3CLZAHa21j7oH86gf2dRhH0hemgHMR96pcZLh/gVMwye1uIkC3Zw+8eC51PPtalue2WJQAtZsHQNtcG8/+JWx/+GUDZvpIGs7D/qpP7N2yNcSIgDly/tVUW0t7Gr7mWT2ruNvawxGZVnM/2kLzGedAIPnT7fHJJH0PD5g+XxEahgJktpqa0g9nLQ/+qX+7O0b5qceAWsxb6Skkk8uZJ+/5/KpdlGTse0VshiMFaAjUq+WQYEEx+tz61xOPYdgM2CUADSbo0BgadwwNq1q+z1oT/tQ1EbjqD97yrq+z1kT/ALQNfMf9VPcTsqm8wwiXWs5bACuqduO7Dg2+72O4bKRroYp2JvsrAPadjmgDtkYZmZhzQayh18qLnDL2XY9umSAPCCd53LET7qWJwXaEE4mIMjKoGxJHPlJq7GZ/H8cS1bW5csMqM7ICLiEF1JDCBtqDr1oavtphf6q77iv8q1N/hKOoVsSSqkkDLsTvz1qMcHsD/eL69nJ+NOxGcHtdhTtau/G3Tl9rcNytXf37dZ/2s9lmS4922xuLca45yWmHZiVPe5cz8DWVdU1733uXmKY6PSX9rMMdDbf/ANS3y3pJ7R4dtBaPvuoP+WvO0tJJludzl+oKK8PwtozN0CRbGqTyH8qYUbt+JWF8VsDlrdHw/R+YqK7x6wxCi2TCyMt1fDO+tug3FeFmAVacpLNmJMwVbSBH2azfBMj3F7Q5VNsKYERN6OQoa7CV8muxOLwj6XMO8/s2n/FlNZXimGshy1t7ksZ7M2hbAUkz3w5BgUfu4DCLOW+R7x/Ks/xpUViLcv3ZD6mDrI0gGs5OkDZoFHdX9lf8IriL3l1jvD8fOkp0X9kfgKVm5FxNJ76/4hWE/wBxfY64ftf2GfacntbYC5hlJjWZk/KhN0HSLfPoeh86MYo4W84uPdy3AuQhWjQMTBDA671XexgzviDp+uo8vu12ppHIBWzf1fyP86VFvoOC/wDuD++n/TSo1AZvgGAuXVYK9wFCIW2CSRGxYHTqANdzWlOFxXZEqMQO4ywZzlgCBA8QO3eI+NYbhvE7lm6LqsARPzEA+cTW8wHtwEIS8r3MzAh1Croco8JOoBYc+dYwEnsBeGDGG4A9viAEakvcidNI7Mc/OliExu62+IAAtLG9cRQOpJt7Vs7vtxhEUsRdgNkP1f2um9DsZ/2gYG4pR0vMD0QDXr4xWrf6WlyTp3sC3sBdI7uIxUjxZrtwAEDkSB86NWsNcS1bD3XLhBP1jk6dTOpod/T2GuIWtrdKExlIUsoGoGXOBMg7nYDent7c4FQEGGNyBq3Z2wJJM6T19fU1yYXPU1J2V/BVxD3c/dvXNp8b+fOfKhWDx2NW+S1y6becxmdmSMxADAGY1HMVoLHtfg7mq8OuONpWxbb3SDRbBYrh17x2Wwzkj9Jb7OYII11TeN66qDcxuI9ssUjMpWz3ZG1zpP8AWVHb9tMWwOVLWgnQXP8A3K2uK9iMHdc3Beclt8ty2RoABEL0ApWf+z+wogXbpEEQcjDURsVg+VNRRP6qMm/tRi8qmLUkAkfWAiZmQbnlVNPa7GsSFCSI/rOfWbtbY/8AZ7hQP0l0GZzZlBPuiPlUKeweCQybtyeZN1B/y0SUewLUY4e1uOJIlRB11fntvcrqe1WOLAZ1mdd+oXm3U1rx7J8MQnNfE85xCj0kTSXgnB13u2zH/wCQTuQeTdamkVuAW4/i1TM10DXLAVSZiee/xqMe0mIOb61pWJHZ2+fQkeYrVDDcHAIlWGhMNdfXYeGalt2uECctkt1i1fadv1deVN6fAql5MZe9pMSsfWHVsuq24+SmreF4jiboB+kBQXKwEQ7CfuelbAf0dywbtrP/AHZ/j3xVhL2FHhwD/wDoWx1+8w/JoTj3RLjKtmee8Q4jiUy/7TvrpbUkCBA8MTufhVK9xXEZ0AvsVK5mJVFjSvTmx1gD/uEeq4ddtt7lcfjFpY/2aykie9dsL+BNDcfA1GXk8jx2ExGIOfW5oVBJGms5dfj76p4vAXELBlykgkCeRYQflXqvtEUxQts16zYyZhAuC4Dny8xljw9DWC4mcMXPaXA0SgKNmBUGQYUEj30rRaVAZMIxY7b3OfVQKvYbhdxmERobZ3jwqZq1ZweDYiLzAkncxq0A6sgohguGYfMVXEFm0gBwTKDQd0idJNA7oGY6w1prQY7ksQLjMGAK8yB/GquDuAuCFCjKugOwFwnn6VqV9ksIPDiZCkR4Nc0A8/Kok9n8OhYW78kLEZkkQwYfHvH3UrBtMH4tF013Ucx50N4hblSZaAqgCYXXnpzo1iuxIVgc4VQpJIXUanxFQfEKBcSxAdsyqiLC6dojeERPdMzvUt2QaQNv+eQrmGP1tvSe+v40KwfE87ZWiYJkfxrr8Y7O4OzCMQJ7xOmxEAEcvxrJq8lnXGSWKi/j3E3ARvdYCAD4QOv7VUMNbQLdgse6AdBpLrtUHEuIZ7Vu5kQFrlwHKWgmEk6a6zUODxR7G82QGOzAEtzY/wAq37nMWPotv7zfuiuUL/pcf1Y/falRSHZcvcHuOSyqYJ0giB6UX4W97D27lqBlYmQyhiDEEjodPlWq4dwkLbVFEkbnz5nyq9b4AsQSAOm5pQi0kG3c88x5/wBnuToe0De4k/5VnjFe1pwGwPEC3qdPlFRXMRh7Ss1u2GygmUQRp+vpPuJNa1S3FZ5dgMBeezcRbVxpKsIRokeccx+FTYT2Sxrz9SV03ZlHPpM/KvRH4pcNtigtggabt6GdvlQ/ivEXVSDcYSDGpI26IFHyNZuUUrFbAnAOAY22vaWsRaRGJkZmZSQYMqVAnSOulFMTjb9sRcu4BvWQf8dZXOrW9SRG4nQe7l/nT3wdq4xMkA8l6+8fKs/XiluLUE8RiRGZrODYbgjNBB5g6zyqrZ4gjNcUYfDlgjEgG5upGjTGk/hVd7LHusGKRlEaEQBB+XLrTQi23uXF8VwNIaIhzMKI6jnNZxzp3Yaye9xdLZj6NZykSJBGp3nveQHuNV7nHh9nD4br4J39WqtiUFwBS0ZNunQ8qls8FS4AguQV1Jic0/DanDIqSfJalsTYXjlwyEt2hpMLaXcfHzohiuN4lLFplyh7jXF1t21y5CB4Quu9V+HcKt2ry653mQSvdGh0ykmes+VGeK4K3fyhu4FLMApG7ZQx7wPQfE1akmOwDd9pry6F7s8+8F/wgUKv8bxLkn6ReAAkAXbgnXyboflWmucMsIyWyhKkGY3JBJBMDU94jSpk4dYB0sMd9yRt6t5UKXIWA8PiLz4FmN5w30lVzPdfY2ycsz11iheItXFM5+1JBGmZ9CIMmIBreWrKhcgsDJOfKSsZoiYM6xpV6zbAbS1aVZ30BjmYy/xq7CjzfC2iLV1DbOd8mXu6d1iWmfKtFxPBXu0tdml0j6LYB7M5SDJLRB3itmMbZTe7bX1dR8NaaPaPCj/f2/7Jzf4ZoFRlsdgVS2rX+3IIlFu3WYjLH2c0KdvWu4L2RW4oe1kZSN1upAnkdSao+2+PXF3LRs5mW2HBYjKJYrtOp8PSgP0Y9kkgT2l0awBrbtgd4neeXrToGbBvYC4ToPhc/h2Rq1w32MxNm4l1PEskZlLgyCIIyiQQY99efrg3C5l1GbKI3O+oXc7UZJuBrAJe39WubVgBL3DqAZGgG4iN6VCpm3x3BcVcXKuGtoZkPnuFlI5rCDX1mhyexN0A9pdS3rOsDrJOcidzTsbcFw2hbvwRc1VmcMQSuwmI0Op66VR4LiiEyZ0JYrnaYDLJEqYM+g13qXHYWhBG37KWACXxYYDU5TmG4HhVWB1IpmI4PgF37S4fJAB/fKx8K7hsNibaBGCsDLCHBzdwMuYnUITlIg9J2NEsPgHKIGtnbVhcV/PbrJ+EVhPXF3Gv+lRgjE8U4QM4bD2mtrDTNzNJO3XLHShi8Kub5SG6xPzFek3+CvupnyIg0OuWWQ95SPdp8RXNPqcsN2inEyTcMZrKW8pLK7uRHJgon4g0rXC7i2rlvIwLMhGh2XNP4itFiGf7Kz5yf8IiqrNc+8B+fM011bashpIzn9AP9xvgaVaCbn3vwrlHuZeQ2NfjHe3bCMJAIyukjruJlTEVzB8ZfnDrMSTrqY3Hu3rntDbL2bijWVbb0MfwrKYC1fXJKtsMxOhBDPqZ8UAW96+/LC+UccM8W6NhjOIW7gADQIkq2kyAdRswAIPMa0JfGJbthJMi3l+AA99CcRh2JDNIiNNwAFgDQmOXM+oofjcY7DJcUld50zctm1BEjzrizKaZ1xmq3HXsQ7lntA6tmy+hM5eZ3qtcxTGXi40aaaKJO2vmdqJ4a+sd1tuX2h5AQZOw0J84FT9orgTJOxkb+oMQf86+ZNyjyiWBTAXOpBBjQAzJ5GDH+groYD7M8yRoNJj123oticIgRuzU6iCAANeRPSTzmhdvhzgEkqo17rHN7tvKphki1bDSTpjJXXeJMiNDJ5a8qF8SvAjMrFvQHY66SNNt6vrgXP6TzHPXfUn1qzbwuTQIBudtfn7vKqWSMXaFXcBoGCkiSd9iN+XlM7U5rpCHk3kdsu23pz6Uaa2Cw67E9enlyNcVgv2VAggyIknSfXnT9VPsOwNa4kw+sJOYCBJ29D86IrxO4AHPehZ6SD61ZQgQcgIJiYB9eU/HrXXsWxGwncEwIInXWAOu29DypvgLKg4mbjhl7piBt/Heq9riF4q5e4xIzQRAIgeQ/MUQu27TDwgEfdIE6b6b8qV29aHiidBJG+86xB0Iq/Ue9J7gpGbucQuHe7cb/iH+ddtoX1O20s3Oj9jh7XDNu2QP1VWB6k6D41bf2XaAblzJOmpBPppp8619dFqMnwVOGq5VLVsnaITUtNxy2g1IykVYwXsviA6sLJAE+LKm4ie+20n/AEpz8JFplNm4XuSDyCiDJ6zpOnpWwtYwugZpWRqrSI9xpwyotY9WzIeG+y9sWz2wDOTIy6wIGkxHWmvwCwm7WgsyAzZYO3WD8KdcuqRlzSPP8NUP5JqO3h40zqq/2h+DKPlSeR2arGkh68IwZ0ZrQJ3CmZHqAPwqT+hsI0ZXPdEd0XAY6SBVW/YtxrcmOgVvxBqFbdsGQxJ/8tB//OpeZLuGhBrC4HBprEkGZNppnmZyyTVwYzBR4dByFq4NvdWcVLYMgNrv3bf8qiK21MgPr5gf4an3C8i0o1X9IYRCI1nUeED4FhrUOI46gjLbPvJAnoSoYfOs4lwcs3objkfjUqYtRpktz1jX486l9TFdx0gje4ncuGEAA8tx6kE/8vrXL9zKhDnNI22PuHKhr44/ej0EfhrVc3hvr61zZOrtUl/Yakh6zzpmJUZWOkiNfOdvPn8PWmm/0Un12+W9QOGbfly5VyRjTtsiTTQ7sh1FcqDs/I/n30qqvkz+xu3tAiIqje4cDtPxosAK6wEV7NTo+Q4WZt8CBQ3H8OU/ZGupBEg+fr5jXzrTX9TQzFITOlaaVLZgs2gxuL4OAYGgJPd5e5+XTXpvTExToQrjNA0D6QP1WGsehj1rSNbn06H+FVbmDEaEECTkbaTvB+yfMVx5+iveP9djqx51IqYbFI/hJU7GdOUmH006k5fKanxNkg95d9Z3+HXpOtVXwoGoEHMO6dOR8L7c/tRtuajXiLWyyMQus5Ggg6ATrrJjca+dfIzdI4vimbqRca6EAGusQInSAPOmveUd094bHSdx15VS+lI7912tsROslNuolk56Q3qKqYy02hg6nukQyGNYRl7vXTX3Vy+2fc2TQTbCkkZLiga6GZHp86oY5LikkhSBGgJImRvzpYXOwnYfeJ2jlpzovbdANDJIEmNTHVTScnjfkelMALijqFBHUATPp0qwli5dEOCq/wB7bTbb1NGbHf2GswAAJPKBFFVRLI7wD3Trl3W30Lfeb5eu4PV8KgUDPYP2XDDNcOVN5cnX9ldz+HnRXCcKtKYtWhcI3e5sPODoB661fw9g3T2lxjlmJ5sfup08zy8zRe3YUCBCgbADQefmfM61cZSn32NIYwemEJEXHJH3U7qjy2kj4VMbCZcuQZegJG3nvVvLyn5VVxNwJpuT8vM1bUYq2apJHU7NB4Ao/Vqvib6/YUnzOnyFV2c8/jXLrqmjat93p0zHr+qNesVg8sn9OyG2NAY8z7ulQuq7E6+Wvz2prOX3OnSNPhtPzrqp0MTWMsv3M9Xg5mjbX3/610s3Qfn31KqAetI1m8j7BuRZj1+Q/lXA/nPupzJSM0tTfcVCUD8muMormvnTgKm2FDI/On8qWtSIPX410j8zRdhpK5DeVIE9DVgW/P5Ux18jTDSQ+40qf+dqVAUa0OTziuM3nVcqeZpwIr3ek87rZMGFRPanX01rouaaCpA5pcD2YNxOAU6wJ1Pyn1NUL1pRyn88qPtbnlFUrmF89CeUe+dJP+laRlfJDTjvFAJz5T6ioMRZVwQQDpsSQJPNSNUPpFFblnKx2BB2MER+fwqpdABpTxqS4NsefyzNYrhen1ZAOso7AHn4X8JHPl76pYO9cslhmNs6BgRuN4KnQz5itPiEVhDDTrVDFWmIAYdqg6+IA9GGo9x9a4cnR7fpO6GZMgt8SteJ0yO0agEyfNJ29CN9FNcys4L6OBs1syqjowMFNQPEo8qrPw1W0ttmme48Kw02DaK23l76jXtLbR3rbA/st7p1X3V83J06i91TOlTDvCsSyd5SJJMabfeNELYLuqAmWMfzJ9BNC8PjO8BeUEgeIQrCTMad1uuwJ61oOAPbNwsrg5UaJBVgxECRqOZ1mvnzwPX5RonewYs2RlEDQaLry9PPf30isbU+0pygDX01+YpjjWCD6TXQotHTa7HTcMa0IdyxJ67fw+VFwooQ65SVnbT+VY9RdIXcaXyK1zmsBf22MKfcAzf2RQpXkyTv7yes+tE8QM1u4PulLnqFzIf/ANk+6haIJrnlwjHJd0WbZJqdDr/pVcNl2qQMTyjzmsZLcIkrkTqT6RUNy+FjNpy16+tSifUelRYtFI12/CpVWUDGxFzPOxG3TprNE8PeLKCd41od2eZjqJ0/jrU+RkXz2AidP41pJJ0hXW5eZ9NYrgcHah6Ys/a9w/P4Vatg7z+fSpcNPI1KyZmFcUr1qHEMkeL3f6VSzsGXaNj5z093vojCwcqCmcfkU4OKgGU7H8fXpXez86S2KTJe7+TSqDs2/JFKq3HZpyOtcC9KcHruavdHmNjkVKj0wNTgaTKQ+ajdBy6R/lXZrhakNsp4i2SCDMSOuvLTT0FDb2BkSJGmgjXUmN/9aNsAdo3B94qvcsmGCxA0jSYOp6AfnetIyo5547dgF7AG4M/n5VWKnlpRu/gAQJKzsdY0MwYy+WhidDrQx7bTG/PSdv8ALfyq0lII5ZQqyncUHca9edROGIgkMuwDAGNdwGBWeUxNWjb/ANKhdIrOeNNVJHdjzp8MixIUtm7Ix5PB2j7QIj0irHAbqJfzTcAYZTKLGo+/m8hyqPMRyrhfrXBPoYPjY645ndh64B2yd9T3LgiCZ71vXRSPn/GriM32W/vx+MVl7T5Tpp6aVYXFvtnj89RWb6DwzZdSu6DjXLnaIM/dytIzZtZWNz61zHrcjMozEbzbU6eWlZ5r7SD2jyBAOaYnff0HwpDHXP6wn1VT/CaiXQyaqx+4RfbiBRlm2upKmQRKlGkeIb7VBiriIf0cqRKsrESPfOo2Iqr9KuEg5yNZ0JHIjYH31L9LuFSpIYHbMScpjcBgRyg9R6Vzy/8APyJVSYnli+4/6daCklH0/XX/AKKtdvbPNx7gf4ihyhjIJtj/AISHTQ8l9avdmpHitk8u66zr5ERWEugnX0jjkXkkW5aP2mHqn8mNQ4gqy927b1nfMs/3Y3BrpseVr+zcYH+9NV0wndA7NvdcQ+e2UVl7KS5iV6nyNweEeTJRp6OmvMaTPOrOMW4qklGAjUxI+IFUkwmSZF0a87QjlzDnT3Ui0OMt1QQraZmQ6ldZYAfOpl0y1bpoevYCPjDmOUgwRPUfhRXDcQ0AdvMc5qnicXfnv2xdXkz21uD3XF0HPnTMNjLDHW1k21S4fTUXJAA8orSfTxlESkXsQ8sCDruPfpzqPOx0BjrPSp0to6gW7gU9LgykjbRxKn3xUF3DXLWrKQp0ndTzMOCV2nY1h6bit1wVZ29eNsZjJiPn84pmF4xmYZhAjmI1obxVzAG3lrMUNS5lIaT56RWsenjKFvkWppm57T9UfGlQuzxElRoNutKuX0pF60bwGnTUYNdFe1o80mSTSBppNcL0qK1DzXGNML0gpNFBdj1qVTUQU13NFSUmNuW9VIAkHck+8wNzGlQX7SswVwYmFMGQYkHMQNBrzO/lVia6Xp2S0mB8Zhy7LlSFJO0ddyxMMY6mapYjDMDyCgAkjptMMcx18tZ08tMADHltXHtKZkTPXkQIkDrVKbWxDxb2mZT6O2wBJ5gAyvIBgdj8d6jYCSDuND6+nwrW/RlkGWgGY0156k6nXXeuDAIZBAKnlAGskzI+FGuPdDSyLhmMZkmCyiN9QK4biR4l/eH86y/E8NhTjsSmJbL9fbVWLHRZJeQsSCAFJ+zmB5Gaa4TBZbnetyTcdD2jErbKjsu7mEvmDSDmYSJRgZXkl1STrT+T6cOnk4puX4NezJ99f3hXRk++vxH86xaYHAvbH1uRhaDOZ17Qpb0UEwyAm4SPEWXKIBWeNhMCjoQ+dJxObM2Y9y39T3VKHvOJGonMBOkmfdfH5NVgf+X4NrmX76/vCpFuL95f3hWTTg2CuMy23zM3aZES5r3XzIAGUnvJOpnKBqCdao4zhOEW6ETEF1ytJLooLAqPHBCb3DBEns9PGKXufgfo/JvDfX7y/vD+dN+lD7y/EVirnCcCCFGIYkqxkOpUMGVV+x3gwYvGhAWDrtIeBYIXGVsVADMhGdJBA0JbLBHMkD9XUjVe4+CvT+TbDGKftL+8K79LT76/vCvP+EcHw727ty65VUkTnBUEhAmwBcku5gER2cGZq5/Q/DzkH0gL3iHPaKSRlJicuXTfNoD4fFBpe4+A9P5Np9LUDR1n9odT50reNVhDupPmQenWsAeGYTK7m4QokKFuKM7JbttlAYEnMzuM2y5RoZqVuF8PBA+kMZDGc6wMpQLICyQwZniQRkKnXUHr/A/T+TatZsZge6p+8j5T8jp/nVe9hROl1Lhja7ln07VSGHxrHYjh+BR7ZW8XU3LIYZgFCMWNw6d6AAFgkEbyZFWLXB8GbRvZmZFtFmGcDLcPhtlsvefvQCAAMglTmrOUoy7DUa7mjD2hAY9mZjxi4k+RHeUfvGpkvNb7yXQFmJRwVOg0MHTnoQKxPEuG4JEm3iGdi2UarAXNq5UDMQACI0mAw0IFT4vhmBQEJfzTdtrmLKStsxnIVR3tDObb7MSDPLLCm7TopI03E8fauALdRGP3kYW2G+o07M7faA33oUMKpE2HW6NyphLg/wCGTr/YLULbheCCqTfYMQAVDowVjcVSC4XvBFJYkCGjQiCaj4vgMEqXWs3WLKwCLnVgQSh00BIys4kTBt6+IRax0qGaSyuYAi4mvWJ99KvN6VZ+h8/gD6SpGlSr0B54Y35+FcG1KlQS+Ry1JbpUqllRJOVMuUqVItnBTTvSpUCZItPG9KlSKQ9q6KVKkWeA+3P/AMwxP/mH8BQGuUq+bP6mfYh9K/gVKlSqShUqVKgBUqVKgBUqVKgBUqVKgBUqVKgBUqVKgBUqVKgBUqVKgD//2Q==',
  },
  {
    name: 'University of Cambridge',
    description: 'The University of Cambridge is a collegiate research university in Cambridge, United Kingdom. Founded in 1209 and granted a royal charter by Henry III in 1231, Cambridge is the world\'s third-oldest surviving university.Cambridge is the world\'s third-oldest surviving university.',
    location: ' Cambridge, United Kingdom',
    rank: '#6',
    link: 'https://www.cam.ac.uk/',
    image: 'https://www.cam.ac.uk/sites/www.cam.ac.uk/files/styles/content-580x288/public/study-at-cambridge-undergraduate-883x432.jpg?itok=xrkkc53X',
  },
  {
    name: 'ETH Zurich - Swiss Federal Institute of Technology',
    description: 'ETH Zurich is a public research university in the city of Zürich, Switzerland. Founded by the Swiss Federal Government in 1854 with the stated mission to educate engineers and scientists, the school focuses primarily on science, technology, engineering.',
    location: ' Zürich, Switzerland\n',
    rank: '#7',
    link: 'https://ethz.ch/en.html',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/56/ETHZ.JPG',
  },
  {
    name: 'University of Oxford',
    description: 'The University of Oxford is a collegiate research university in Oxford, England. There is evidence of teaching as early as 1096, making it the oldest university in the English-speaking world and the world\'s second-oldest university in continuous operation. Oxford is the home of numerous scholarships',
    location: 'Oxford, United Kingdom',
    rank: '#8',
    link: 'https://www.ox.ac.uk/',
    image: 'https://cdn.britannica.com/03/117103-050-F4C2FC83/view-University-of-Oxford-England-Oxfordshire.jpg',
  },
  {
    name: 'Imperial College London',
    description: 'mperial College London, legally the Imperial College of Science, Technology and Medicine, is a public research university in London. Imperial grew out of Prince Albert\'s vision for an area of culture, including the Royal Albert Hall, Victoria & Albert Museum, Natural History Museum, and several Royal Colleges.',
    location: ' London, United Kingdom',
    rank: '#9',
    link: 'https://www.imperial.ac.uk/',
    image: 'https://www.imperial.ac.uk/ImageCropToolT4/imageTool/uploaded-images/homepage-default-social--tojpeg_1523872141375_x1.jpg',
  },
  {
    name: 'Swiss Federal Institute of Technology Lausanne',
    description: 'The École polytechnique fédérale de Lausanne is a public research university located in Lausanne, Switzerland. It specializes in natural sciences and engineering. It is one of the two Swiss Federal Institutes of Technology.',
    location: ' Lausanne, Switzerland',
    rank: '#10',
    link: 'https://www.epfl.ch/en/',
    image: 'https://www.epfl.ch/schools/sti/it/wp-content/uploads/ZESCPA6NF52Z33LZKWXJ_prvw_158711.jpg',
  },

]

export default {
  name: "Education",
  components: {},
  setup() {
    return {
      features,
    }
  }
};
</script>

<style lang="scss" scoped>
.card-header {
  margin-left: -25px;
  margin-bottom: 15px;
}

p {
  text-align: justify;
}
.cards {
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 30px;
}
.carousel .carousel-item {
  max-height: 500px;
}
.carousel-item img {
  object-fit: cover;
  max-height: 600px;
}
button {
  margin: 20px;
  outline: none;
  color: white;
}
.custom-btn {
  width: 120px;
  height: 35px;
  padding: 10px 25px;
  border: none;
  font-family: 'Lato', sans-serif;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  font-weight: 400;
  display: block;
  margin: auto;
}
.btn-3 {
  line-height: 35px;
  padding: 0;
}
.btn-3:hover {
  background: transparent;
  color: #000;
}
.btn-3 span {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
}
.btn-3:before,
.btn-3:after {
  position: absolute;
  content: "";
  left: 0;
  top: 0;
  background: #000;
  transition: all 0.3s ease;
}
.btn-3:before {
  height: 0;
  width: 2px;
}
.btn-3:after {
  width: 0;
  height: 2px;
}
.btn-3:hover:before {
  height: 100%;
}
.btn-3:hover:after {
  width: 100%;
}
.btn-3 span:before,
.btn-3 span:after {
  position: absolute;
  content: "";
  right: 0;
  bottom: 0;
  background: #000;
  transition: all 0.3s ease;
}
.btn-3 span:before {
  width: 2px;
  height: 0;
}
.btn-3 span:after {
  width: 0;
  height: 2px;
}
.btn-3 span:hover:before {
  height: 100%;
}
.btn-3 span:hover:after {
  width: 100%;
}
span {
  color: black;
}
.card-img-top + .post-date {
  margin-top: 0;
  margin-left: 0;
}
.col .post-date {
  font-size: 27px;
  font-weight: 600;
  color: #333333;
  background: #ffd200;
  display: inline-block;
  width: 60px;
  height: 85px;
  text-align: center;
  position: absolute;
  line-height: 55px;
}

.col .post-date span {
  font-size: 13px;
  font-weight: normal;
  color: #ffffff;
  background: #323232;
  width: 60px;
  height: 32px;
  display: block;
  position: absolute;
  bottom: 0;
  letter-spacing: 1px;
  line-height: 32px;
}
.card-img-top {
  min-height: 230px;
  max-height: 230px;
}
</style>
