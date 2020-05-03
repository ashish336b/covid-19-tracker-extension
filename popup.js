var app = new Vue({
  el: "#app",
  data: {
    coronaVirusData: {},
  },
  created() {
    this.countDown;
  },
  computed: {
    countDown: async function () {
      this.coronaVirusData = this.count;
      var result = await axios.get(
        "https://coronavirus-monitor-v2.p.rapidapi.com/coronavirus/cases_by_country.php",
        {
          headers: {
            "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
            "x-rapidapi-key":
              "37a28f22c2msh592074f3f5ebd4fp1c4821jsnf756dd81549f",
          },
        }
      );
      this.coronaVirusData = result.data.countries_stat;
      this.coronaVirusData.shift();
    },
  },
  mounted: function () {
    this.$nextTick(function () {
      window.setInterval(() => {
        this.countDown;
      }, 1000 * 60 * 60);
    });
  },
});

$(document).ready(function () {
  $("#search").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $(".table tbody tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});
