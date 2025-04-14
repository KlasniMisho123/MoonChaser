export const weatherTypeInfo = [
    {
    imgSrc: "https://i.pinimg.com/736x/76/8b/50/768b50c7c5e3dd9c98a2dfb1cf5fd329.jpg",
      label: "Clear Skies",
      description: "Clear skies usually indicate dry, sunny, and calm weather conditions with minimal cloud cover.",
      fact: "Did you know? Clear skies are most common in desert climates due to low humidity.",
      suggestion: "A great day to go for a walk or enjoy a picnic in the park!",
      stats: [
        "Average temperature: 25–30°C",
        "UV Index: High (6–8)",
        "Humidity: 20–40%",
        "Visibility: Excellent (10+ km)"
      ]
    },
    {
    imgSrc: "https://i.pinimg.com/736x/04/6a/eb/046aeb05b2396c31672bb33ba4d5fe54.jpg",
      label: "Partly Cloudy",
      description: "Partly cloudy weather brings a mix of sun and clouds, offering mild temperatures and moderate UV levels.",
      fact: "Did you know? Partly cloudy skies can enhance sunset colors due to scattered light.",
      suggestion: "Perfect for outdoor activities with some sun protection.",
      stats: [
        "Average temperature: 20–28°C",
        "UV Index: Moderate (4–6)",
        "Humidity: 30–50%",
        "Visibility: Very Good (8–10 km)"
      ]
    },
    {
    imgSrc: "https://i.pinimg.com/736x/77/9b/5a/779b5a7cf79aa90a79eb76c541ee8b1c.jpg",
      label: "Overcast",
      description: "Overcast skies are fully covered with clouds, resulting in cooler temperatures and diffused sunlight.",
      fact: "Did you know? Overcast skies can still allow up to 80% of UV rays through.",
      suggestion: "A cozy day for reading or visiting a coffee shop.",
      stats: [
        "Average temperature: 18–24°C",
        "UV Index: Low (1–3)",
        "Humidity: 50–70%",
        "Visibility: Good (5–8 km)"
      ]
    },
    {
    imgSrc: "https://i.pinimg.com/736x/d0/ef/9f/d0ef9fa995e4c600d7eee8dafd12febd.jpg",
      label: "Rain",
      description: "Rainy conditions are characterized by steady or intermittent precipitation and higher humidity levels.",
      fact: "Did you know? The smell of rain is called 'petrichor', caused by plant oils and soil bacteria.",
      suggestion: "Keep an umbrella handy or enjoy the calming sound of rain indoors.",
      stats: [
        "Average temperature: 15–22°C",
        "Precipitation: Moderate to Heavy",
        "Humidity: 70–90%",
        "Visibility: Moderate (3–6 km)"
      ]
    },
    {
    imgSrc: "https://i.pinimg.com/736x/ff/19/de/ff19deae39162d6b4a5683d60b21f33d.jpg",
      label: "Thunderstorms",
      description: "Thunderstorms involve lightning, thunder, and potentially heavy rain or hail with gusty winds.",
      fact: "Did you know? Lightning heats the air to 30,000°C—five times hotter than the sun’s surface!",
      suggestion: "Stay indoors and unplug electronics during the storm.",
      stats: [
        "Average temperature: 20–26°C",
        "UV Index: Variable",
        "Humidity: 60–85%",
        "Visibility: Poor to Moderate (2–5 km)"
      ]
    },
    {
    imgSrc: "https://i.pinimg.com/736x/ec/2d/b5/ec2db5288856c5326b10ac1d58de433d.jpg",
      label: "Snow",
      description: "Snowy weather occurs in cold climates and can lead to icy conditions and reduced visibility.",
      fact: "Did you know? Snowflakes can have up to 180 intricate branches and no two are alike.",
      suggestion: "Bundle up and consider enjoying winter sports or hot cocoa indoors.",
      stats: [
        "Average temperature: -5 to 0°C",
        "Snowfall: Light to Heavy",
        "Humidity: 60–80%",
        "Visibility: Low (1–3 km)"
      ]
    },
    {
    imgSrc: "https://i.pinimg.com/736x/54/83/bb/5483bb592c24f186c634e5d953694ed4.jpg",
      label: "Fog",
      description: "Fog consists of low-lying clouds that significantly reduce visibility and can create hazardous travel conditions.",
      fact: "Did you know? Fog is essentially a cloud at ground level formed by condensation.",
      suggestion: "Drive carefully and keep your headlights on low beam if traveling.",
      stats: [
        "Average temperature: 5–12°C",
        "Humidity: 90–100%",
        "Visibility: Very Low (< 1 km)",
        "Wind: Calm to Light"
      ]
    },
    {
    imgSrc: "https://i.pinimg.com/736x/39/90/73/3990730201a8a1c4c7aa15c0fd1232fe.jpg",
      label: "Windy",
      description: "Windy conditions involve strong and consistent air movement that can affect temperature and comfort levels.",
      fact: "Did you know? The fastest wind speed ever recorded on Earth was 407 km/h during a tornado.",
      suggestion: "Secure loose objects outdoors and wear windproof clothing.",
      stats: [
        "Average temperature: 10–20°C",
        "Wind speed: 30–60 km/h",
        "UV Index: Varies",
        "Humidity: 30–50%"
      ]
    },
    {
        imgSrc: "https://i.pinimg.com/736x/3b/33/49/3b3349fa71d4903193c75f1221620191.jpg",
      label: "Extreme Weather",
      description: "Extreme weather includes severe events like heatwaves, hurricanes, or blizzards with significant impacts.",
      fact: "Did you know? Extreme weather events are increasing in frequency due to climate change.",
      suggestion: "Stay updated with local alerts and prepare an emergency kit in advance.",
      stats: [
        "Conditions vary widely",
        "High risk factors",
        "Emergency alerts often issued",
        "Impact: High"
      ]
    }
  ];
  
  export const moonPhaseInfo = [
    {
      imgSrc: "https://assets.science.nasa.gov/dynamicimage/assets/science/psd/lunar-science/internal_resources/366/new-moon.jpg?w=640&h=613&fit=clip&crop=faces%2Cfocalpoint",
      label: "New Moon",
      description: "The Moon is between Earth and the Sun, making it invisible from Earth.",
      energy: "A time for reflection, intention setting, and new beginnings.",
      visibility: "0%",
      nextPhase: "Waxing Crescent"
    },
    {
      imgSrc: "https://assets.science.nasa.gov/dynamicimage/assets/science/psd/lunar-science/internal_resources/368/waxing-crescent.jpg?w=640&h=613&fit=clip&crop=faces%2Cfocalpoint",
      label: "Waxing Crescent",
      description: "A thin sliver of the Moon becomes visible after the New Moon.",
      energy: "Ideal for planning and building momentum toward goals.",
      visibility: "1–49%",
      nextPhase: "First Quarter"
    },
    {
      imgSrc: "https://assets.science.nasa.gov/dynamicimage/assets/science/psd/lunar-science/internal_resources/367/first-quarter.jpg?w=640&h=613&fit=clip&crop=faces%2Cfocalpoint",
      label: "First Quarter",
      description: "Half the Moon is visible; the right side is illuminated.",
      energy: "Time for action, making decisions, and facing challenges.",
      visibility: "50%",
      nextPhase: "Waxing Gibbous"
    },
    {
      imgSrc: "https://assets.science.nasa.gov/dynamicimage/assets/science/psd/lunar-science/internal_resources/365/waxing-gibbous.jpg?w=640&h=613&fit=clip&crop=faces%2Cfocalpoint",
      label: "Waxing Gibbous",
      description: "More than half of the Moon is visible and growing toward full.",
      energy: "Refinement and preparation before completion.",
      visibility: "51–99%",
      nextPhase: "Full Moon"
    },
    {
      imgSrc: "https://science.nasa.gov/wp-content/uploads/2023/08/full.jpg",
      label: "Full Moon",
      description: "The entire face of the Moon is illuminated and fully visible.",
      energy: "Heightened emotions, celebration, and manifestation.",
      visibility: "100%",
      nextPhase: "Waning Gibbous"
    },
    {
      imgSrc: "https://science.nasa.gov/wp-content/uploads/2023/08/waning-gibbous.jpg",
      label: "Waning Gibbous",
      description: "The Moon begins to shrink but remains more than half lit.",
      energy: "Gratitude, sharing, and introspection.",
      visibility: "99–51%",
      nextPhase: "Last Quarter"
    },
    {
      imgSrc: "https://science.nasa.gov/wp-content/uploads/2023/08/third-quarter.jpg",
      label: "Last Quarter",
      description: "Half the Moon is lit again, this time on the left side.",
      energy: "Release, forgiveness, and letting go of what no longer serves you.",
      visibility: "50%",
      nextPhase: "Waning Crescent"
    },
    {
      imgSrc: "https://science.nasa.gov/wp-content/uploads/2023/08/waning-crescent.jpg",
      label: "Waning Crescent",
      description: "A thin crescent remains before the Moon disappears into the New Moon.",
      energy: "Rest, reflection, and restoration before the next cycle.",
      visibility: "49–1%",
      nextPhase: "New Moon"
    }
  ];
  