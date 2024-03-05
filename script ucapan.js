$(document).ready(function () {
  $(".container")
    .click(function () {
      $(".foto").stop().animate(
        {
          top: "75px",
        },
        "slow"
      );
    })
    .mouseleave(function () {
      $(".foto").stop().animate(
        {
          top: "600px",
        },
        "fast"
      );
    });
});

$(document).ready(function () {
  $(".container")
    .click(function () {
      $(".card").stop().animate(
        {
          top: "-130px",
        },
        "slow"
      );
    })
    .mouseleave(function () {
      $(".card").stop().animate(
        {
          top: 140,
        },
        "slow"
      );
    });
});

$(document).ready(function () {
  $(".container")
    .click(function () {
      $(".cardblur").stop().animate(
        {
          top: "255",
        },
        "slow"
      );
    })
    .mouseleave(function () {
      $(".cardblur").stop().animate(
        {
          top: 115,
        },
        "slow"
      );
    });
});

$(document).ready(function () {
  $(".container")
    .mouseenter(function () {
      $(".heartblur").stop().animate(
        {
          top: "220",
        },
        "slow"
      );
    })
    .mouseleave(function () {
      $(".heartblur").stop().animate(
        {
          top: 320,
        },
        "slow"
      );
    });
});

$(document).ready(function () {
  $(".container")
    .click(function () {
      $(".heart").stop().animate(
        {
          top: "-170",
        },
        "slow"
      );
    })
    .mouseleave(function () {
      $(".heart").stop().animate(
        {
          top: -285,
        },
        "slow"
      );
    });
});







$(".container")
.mouseenter(function () {
  $(".foto").stop().animate(
    {
      top: "75px",
    },
    "slow"
  );
})


$(document).ready(function () {
$(".container")
.mouseenter(function () {
  $(".card").stop().animate(
    {
      top: "-130px",
    },
    "slow"
  );
})
.mouseleave(function () {
  $(".card").stop().animate(
    {
      top: 140,
    },
    "slow"
  );
});
});

$(document).ready(function () {
$(".container")
.mouseenter(function () {
  $(".cardblur").stop().animate(
    {
      top: "255",
    },
    "slow"
  );
})
.mouseleave(function () {
  $(".cardblur").stop().animate(
    {
      top: 115,
    },
    "slow"
  );
});
});

$(document).ready(function () {
$(".container")
.mouseenter(function () {
  $(".heart").stop().animate(
    {
      top: "-170",
    },
    "slow"
  );
})
.mouseleave(function () {
  $(".heart").stop().animate(
    {
      top: -285,
    },
    "slow"
  );
});
});