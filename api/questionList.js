const questions = [
  {
    answers: [
      "Give an arm signal as well as using your indicators",
      "Check road markings to see that U-turns are permitted ",
      "Look over your shoulder for a final check",
      "Select a higher gear than normal",
    ],
    category: 1,
    correctAnswer: 2,
    explanation:
      "If you have to make a U-turn, slow down and ensure that the road is clear in both directions. Make sure that the road is wide enough for you to carry out the manoeuvre safely. Use your mirrors and look round to check it's safe before turning across the road.",
    id: 1,
    mediaType: "image",
    question: "What should you do before making a U-turn?",
  },
  {
    answers: [
      "Move to the right",
      "Slow down",
      "Change gear",
      "Keep to 30 mph",
    ],
    category: 1,
    content: require("./../assets/qimage/AB2003n1.jpg"),
    correctAnswer: 1,
    explanation:
      "You should slow down and be cautious. Hump bridges are often narrow and there may not be enough room for you to pass an oncoming vehicle at this point. Also, there's no footpath, so be aware of pedestrians in the road.",
    id: 2,
    mediaType: "image",
    question: "What should you do as you approach this bridge?",
  },
  {
    answers: [
      "Just after a bend",
      "In a one-way street",
      "On a dual carriageway",
      "Approaching a dip in the road",
    ],
    category: 1,
    correctAnswer: 3,
    explanation:
      "Oncoming vehicles or other hazards can be hidden from view by dips in the road. If you can’t see into the dip, wait until you have a clear view and can see that it's safe before starting to overtake.",
    id: 3,
    mediaType: "video",
    question: "Where should you avoid overtaking?",
  },
  {
    answers: [
      "Heavy vehicles should take the next road on the left to avoid a weight limit",
      "The road ahead bends to the left",
      "Overtaking traffic should move back to the left",
      "The road ahead has a camber to the left",
    ],
    category: 1,
    content: require("./../assets/qimage/AB2007n1.jpg"),
    correctAnswer: 2,
    explanation:
      "In this picture, the road marking shows that overtaking drivers or riders need to return to the left. These markings show the direction drivers must pass hatch markings or solid double white lines. They're also used to show the route that high vehicles should take under a low arched bridge. ",
    id: 4,
    mediaType: "image",
    question: "What does this curved arrow road marking mean?",
  },
  {
    answers: [
      "Stop immediately",
      "Answer it immediately",
      "Leave it until you have stopped in a safe place",
      "Pull up at the nearest kerb",
    ],
    category: 1,
    correctAnswer: 2,
    explanation:
      "It’s illegal to use a hand-held mobile or similar device when driving or riding, except in a genuine emergency. The safest option is to switch off your mobile phone before you set off, and use a message service. If you've forgotten to switch your phone off and it rings, you should leave it. When you've stopped in a safe place, you can see who called and return the call if necessary.",
    id: 5,
    mediaType: "image",
    question:
      "What should you do if your mobile phone rings while you're driving or riding?",
  },
  {
    answers: [
      "To help you choose the correct lane",
      "To help you keep the correct separation distance",
      "To make you aware of your speed",
      "To tell you the distance to the roundabout",
    ],
    category: 1,
    content: require("./../assets/qimage/AB2009n1.jpg"),
    correctAnswer: 2,
    explanation:
      "These lines are often found on the approach to a roundabout or a dangerous junction. They give you extra warning to adjust your speed. Look well ahead and do this in good time.",
    id: 6,
    mediaType: "image",
    question: "Why are these yellow lines painted across the road?",
  },
  {
    answers: [
      "Accelerate hard",
      "Maintain your speed",
      "Be ready to stop",
      "Brake hard",
    ],
    category: 1,
    correctAnswer: 2,
    explanation:
      "The longer traffic lights have been green, the sooner they'll change. Allow for this as you approach traffic lights that you know have been green for a while. They're likely to change soon, so you should be prepared to stop.",
    id: 7,
    mediaType: "image",
    question:
      "What should you do when you're approaching traffic lights that have been green for some time?",
  },
  {
    answers: [
      "Sound the horn",
      "Use the mirrors",
      "Select a higher gear",
      "Flash the headlights",
    ],
    category: 1,
    correctAnswer: 1,
    explanation:
      "Before slowing down or stopping, check the mirrors to see what's happening behind you. Also assess what's ahead and make sure you give the correct signal if it will help other road users.",
    id: 8,
    mediaType: "video",
    question:
      "What should you do before slowing down or stopping your vehicle?",
  },
  {
    answers: [
      "You'll be able to corner more quickly",
      "You'll help the large vehicle to stop more easily",
      "You'll give the driver a chance to see you in their mirrors",
      "You'll keep out of the wind better",
    ],
    category: 1,
    correctAnswer: 2,
    explanation:
      "If you're following a large vehicle but are so close to it that you can't see its exterior mirrors, the driver won't be able to see you. Keeping well back will also allow you to see the road ahead by looking past the large vehicle.",
    id: 9,
    mediaType: "image",
    question:
      "You're following a large vehicle. Why should you stay a safe distance behind it?",
  },
  {
    answers: [
      "Because you'll need to accelerate out of danger",
      "To assess how your actions will affect the traffic behind",
      "Because you'll need to brake sharply and stop",
      "To check what's happening on the road ahead",
    ],
    category: 1,
    correctAnswer: 1,
    explanation:
      "You should be constantly scanning the road for clues about what's going to happen next. Check your mirrors regularly, particularly as soon as you spot a hazard. What's happening behind may affect how you respond to hazards ahead.",
    id: 10,
    mediaType: "image",
    question: "Why should you use your mirrors when you see a hazard ahead? ",
  },
  {
    answers: [
      "Stop and then move forward slowly and carefully for a clear view",
      "Move quickly to where you can see so you only block traffic from one direction",
      "Wait for a pedestrian to let you know when it's safe for you to emerge",
      "Turn your vehicle around immediately and find another junction to use",
    ],
    category: 1,
    correctAnswer: 0,
    explanation:
      "At junctions, your view is often restricted by buildings, trees or parked cars. You need to be able to see in order to judge a safe gap. Edge forward slowly and keep looking all the time. Don’t cause other road users to change speed or direction as you emerge.",
    id: 11,
    mediaType: "image",
    question:
      "You're waiting to turn right at the end of a road. What should you do if your view is obstructed by parked vehicles?",
  },
  {
    answers: [
      "Your view could be obstructed",
      "Your sun visor might get tangled",
      "Your radio reception might be affected",
      "Your windscreen could mist up more easily",
    ],
    category: 1,
    correctAnswer: 0,
    explanation:
      "Ensure that you can see clearly through the windscreen of your vehicle. Stickers or hanging objects could obstruct your view or draw your attention away from the road.",
    id: 12,
    mediaType: "image",
    question:
      "There are objects hanging from your interior mirror. Why could this be a hazard?",
  },
  {
    answers: [
      "Play some loud music",
      "Stop on the hard shoulder for a rest",
      "Drive faster to complete your journey sooner",
      "Leave the motorway and stop in a safe place ",
    ],
    category: 1,
    correctAnswer: 3,
    explanation:
      "If you feel sleepy, you should leave the motorway at a service area or at the next exit and stop in a safe place to rest. A supply of fresh air can help to keep you alert before you reach the exit, but it isn't a substitute for stopping and resting.",
    id: 13,
    mediaType: "image",
    question:
      "You're on a long motorway journey. What should you do if you start to feel sleepy?",
  },
  {
    answers: [
      "To make your dials easier to see",
      "So others can see you more easily",
      "So that you blend in with other drivers",
      "Because the street lights are lit",
    ],
    category: 1,
    correctAnswer: 1,
    explanation:
      "Your headlights and tail lights help others on the road to see you. It may be necessary to turn on your headlights during the day if visibility is reduced; for example, due to heavy rain. In these conditions, the light might fade before the street lights are timed to switch on. Be seen to be safe.",
    id: 14,
    mediaType: "image",
    question:
      "Why should you switch your headlights on when it first starts to get dark?",
  },
  {
    answers: [
      "Using a mobile phone",
      "Using the windscreen wipers",
      "Using the demisters",
      "Using the mirrors",
    ],
    category: 1,
    correctAnswer: 0,
    explanation:
      "Except for emergencies, it’s illegal to use a hand-held mobile phone while you're driving. Even using a hands-free kit can severely distract your attention.",
    id: 15,
    mediaType: "image",
    question: "What’s most likely to distract you while you’re driving?",
  },
  {
    answers: [
      "When you're receiving a call",
      "When you've parked safely",
      "When you're driving at less than 30 mph",
      "When your car has automatic transmission",
    ],
    category: 1,
    correctAnswer: 1,
    explanation:
      "It's illegal to use a hand-held mobile phone while you're driving, except in a genuine emergency. Even using a hands-free kit can distract your attention. Park in a safe and convenient place before receiving or making a call or using text messaging. Then you'll also be free to take notes or refer to papers.",
    id: 16,
    mediaType: "image",
    question:
      "You're driving your car. When may you use a hand-held mobile phone?",
  },
  {
    answers: [
      "Apply the parking brake and footbrake together",
      "Keep both hands on the steering wheel",
      "Select reverse gear",
      "Give an arm signal",
    ],
    category: 1,
    correctAnswer: 1,
    explanation:
      "As you drive, look well ahead and all around so that you’re ready for any hazards that might develop. If you have to stop in an emergency, react as soon as you can while keeping control of the vehicle. Keep both hands on the steering wheel so you can control the vehicle's direction of travel.",
    id: 17,
    mediaType: "image",
    question:
      "You're driving on a wet road. What should you do if you have to stop your vehicle in an emergency?",
  },
  {
    answers: [
      "Give a signal after moving off",
      "Look around before moving off",
      "Look around after moving off",
      "Use the exterior mirrors only",
    ],
    category: 1,
    correctAnswer: 1,
    explanation:
      "Before moving off, you should use both the interior and exterior mirrors to check that the road is clear. Look around to check the blind spots and, if necessary, give a signal to warn other road users of your intentions. Also look well ahead as you'll have to steer out into the road to pass the parked car.",
    id: 18,
    mediaType: "image",
    question: "What should you do when you move off from behind a parked car?",
  },
  {
    answers: [
      "Sound your horn as you pass",
      "Keep close to them as you pass",
      "Leave them plenty of room as you pass",
      "Change down one gear before you pass",
    ],
    category: 1,
    content: require("./../assets/qimage/BB1439n1.jpg"),
    correctAnswer: 2,
    explanation:
      "Allow the cyclist plenty of room in case they wobble or swerve around a pothole or raised drain. Look well ahead before you start to overtake, because you'll need to cross the hazard line. Look for entrances where vehicles could be waiting to pull out. ",
    id: 19,
    mediaType: "image",
    question:
      "You're travelling along this road. How should you pass the cyclist?",
  },
  {
    answers: [
      "When you're driving on a motorway",
      "When you're driving on a dual carriageway",
      "When you're approaching a one-way street",
      "When you're approaching bends and junctions",
    ],
    category: 1,
    correctAnswer: 3,
    explanation:
      "Windscreen pillars can obstruct your view, particularly at bends and junctions. Look out for other road users – especially cyclists, motorcyclists and pedestrians who can easily be overlooked.",
    id: 20,
    mediaType: "image",
    question:
      "When do windscreen pillars cause a serious obstruction to your view?",
  },
  {
    answers: [
      "Open the window to look behind",
      "Open the door to look behind",
      "Look in the nearside mirror",
      "Ask someone to guide you",
    ],
    category: 1,
    correctAnswer: 3,
    explanation:
      "If you want to turn your car around, try to find a place where you have good all-round vision. If this isn’t possible, and you’re unable to see clearly, then get someone to guide you.",
    id: 21,
    mediaType: "image",
    question:
      "What should you do if you can't see clearly behind when you're reversing?",
  },
  {
    answers: [
      "An area covered by your right-hand mirror",
      "An area not covered by your headlights",
      "An area covered by your left-hand mirror",
      "An area not visible to the driver",
    ],
    category: 1,
    correctAnswer: 3,
    explanation:
      "Modern vehicles provide the driver with a good view of both the road ahead and behind using well-positioned mirrors. However, the mirrors can’t see every angle of the scene behind and to the sides of the vehicle. It’s essential that you know when and how to check the vehicle's blind spots, so that you’re aware of any hidden hazards.",
    id: 22,
    mediaType: "image",
    question: "What does the term ‘blind spot’ mean?",
  },
  {
    answers: [
      "It will improve your safety",
      "It will increase your concentration ",
      "It will reduce your view ",
      "It will divert your attention ",
    ],
    category: 1,
    correctAnswer: 3,
    explanation:
      "Talking to someone while you're driving can distract you and, unlike when someone is in the car with you, the person on the other end of a mobile phone is unable to see the traffic situations you're dealing with. They won't stop speaking to you even if you're approaching a hazardous situation. You need to concentrate on your driving at all times.",
    id: 23,
    mediaType: "image",
    question:
      "What's likely to happen if you use a hands-free phone while you're driving?",
  },
  {
    answers: [
      "Stop, apply the parking brake and then select a low gear",
      "Position your vehicle well to the left of the side road",
      "Check that the central reservation is wide enough for your vehicle",
      "Make sure that you leave enough room for a vehicle behind",
    ],
    category: 1,
    content: require("./../assets/qimage/BB1632.jpg"),
    correctAnswer: 2,
    explanation:
      "Before emerging right onto a dual carriageway, make sure that the central reservation is deep enough to protect your vehicle. If it isn't, you should treat the dual carriageway as one road and check that it’s clear in both directions before pulling out. Neglecting to do this could place part or all of your vehicle in the path of approaching traffic and cause a collision.",
    id: 24,
    mediaType: "image",
    question:
      "You're turning right onto a dual carriageway. What should you do before emerging?",
  },
  {
    answers: ["Lorries", "Buses", "Motorcyclists", "Coaches"],
    category: 1,
    content: require("./../assets/qimage/BB1633.jpg"),
    correctAnswer: 2,
    explanation:
      "Windscreen pillars can completely block your view of pedestrians, motorcyclists and cyclists. You should make a particular effort to look for these road users; don’t just rely on a quick glance.",
    id: 25,
    mediaType: "image",
    question:
      "You're waiting to emerge from a junction. The windscreen pillar is restricting your view. What should you be particularly aware of?",
  },
  {
    answers: [
      "Turn it off while you're driving in built-up areas",
      "Choose a voice that you find calming",
      "Only set the destination when you're lost",
      "Set it before starting your journey",
    ],
    category: 1,
    correctAnswer: 3,
    explanation:
      "Sat navs can be useful when driving on unfamiliar routes. However, they can also distract you and cause you to lose control if you look at or adjust them while you're driving. Set the sat nav before starting your journey, or pull up in a safe place before making any changes to it.",
    id: 26,
    mediaType: "image",
    question:
      "How can you make sure that a satellite navigation (sat nav) system doesn't distract you when you're driving?",
  },
  {
    answers: [
      "Stop and wait for the green light",
      "Stop and wait for the red light",
      "Give way to pedestrians waiting to cross",
      "Give way to pedestrians already on the crossing",
    ],
    category: 2,
    correctAnswer: 3,
    explanation:
      "Pelican crossings are signal-controlled crossings operated by pedestrians. Push-button controls change the signals. Pelican crossings have no red-and-amber stage before green; instead, they have a flashing amber light. This means you must give way to pedestrians who are on the crossing but if the crossing is clear you can continue.",
    id: 1,
    mediaType: "image",
    question:
      "What must you do when the amber light is flashing at a pelican crossing?",
  },
  {
    answers: [
      "Another vehicle may be coming",
      "They may not be looking",
      "It's safer for you to carry on",
      "They may not be ready to cross",
    ],
    category: 2,
    correctAnswer: 0,
    explanation:
      "If people are waiting to use a pedestrian crossing, slow down and be prepared to stop. Don't wave them across the road, because another driver may not have seen them, may not have seen your signal, and may not be able to stop safely.",
    id: 2,
    mediaType: "image",
    question:
      "Why should you never wave people across at pedestrian crossings?  ",
  },
  {
    answers: [
      "Your engine will overheat",
      "Your mirrors will need adjusting",
      "Your view of the road ahead will be restricted",
      "Your sat nav will be confused",
    ],
    category: 2,
    correctAnswer: 2,
    explanation:
      "‘Tailgating’ is the term used when a driver or rider follows the vehicle in front too closely. It's dangerous because it restricts your view of the road ahead and leaves no safety margin if the vehicle in front needs to slow down or stop suddenly. Tailgating is often the underlying cause of rear-end collisions or multiple pile-ups. ",
    id: 3,
    mediaType: "image",
    question: "Why is it dangerous to travel too close to the vehicle ahead?",
  },
  {
    answers: [
      "Your brakes will overheat",
      "Your fuel consumption will be increased",
      "Your engine will overheat",
      "Your view ahead will be reduced",
    ],
    category: 2,
    content: require("./../assets/qimage/AB2023n1.jpg"),
    correctAnswer: 3,
    explanation:
      "Staying back will increase your view of the road ahead. This will help you to see any hazards that might occur and give you more time to react.",
    id: 4,
    mediaType: "image",
    question: "What will happen if you follow this vehicle too closely?",
  },
  {
    answers: ["One second", "Two seconds", "Three seconds", "Four seconds"],
    category: 2,
    correctAnswer: 3,
    explanation:
      "Water will reduce your tyres' grip on the road. The safe separation gap of at least two seconds in dry conditions should be doubled, to at least four seconds, in wet weather.",
    id: 5,
    mediaType: "image",
    question:
      "What's the minimum time gap you should leave when following a vehicle on a wet road?",
  },
  {
    answers: ["Speed up", "Slow down", "Hold your speed", "Change direction"],
    category: 2,
    correctAnswer: 1,
    explanation:
      "A long lorry with a heavy load will need more time to pass you than a car, especially on an uphill stretch of road. Slow down and allow the lorry to pass.",
    id: 6,
    mediaType: "image",
    question:
      "You're being overtaken by a long, heavily laden lorry. What should you do if it's taking a long time for it to overtake?",
  },
  {
    answers: [
      "Motorway maintenance",
      "Bomb disposal",
      "Snow plough",
      "Breakdown recovery",
    ],
    category: 2,
    correctAnswer: 1,
    explanation:
      "Emergency vehicles use blue flashing lights. If you see or hear one, move out of its way as soon as it's safe and legal to do so.",
    id: 7,
    mediaType: "image",
    question: "Which vehicle will use a blue flashing beacon?",
  },
  {
    answers: [
      "Pull over as soon as it's safe to do so",
      "Accelerate hard to get away from it",
      "Maintain your speed and course",
      "Brake harshly and stop well out into the road",
    ],
    category: 2,
    correctAnswer: 0,
    explanation:
      "Pull over in a place where the ambulance can pass safely. Check that there are no bollards or obstructions in the road that will prevent it from passing.",
    id: 8,
    mediaType: "image",
    question:
      "What should you do if you're being followed by an ambulance showing flashing blue lights?",
  },
  {
    answers: ["Fire engine", "Road gritter", "Ambulance", "Doctor's car"],
    category: 2,
    correctAnswer: 3,
    explanation:
      "A green flashing beacon on a vehicle means the driver or passenger is a doctor on an emergency call. Give way to them if it's safe to do so. Be aware that the vehicle may be travelling quickly or may stop in a hurry.",
    id: 9,
    mediaType: "image",
    question:
      "What type of emergency vehicle is fitted with a green flashing beacon?",
  },
  {
    answers: ["Tram drivers", "Bus drivers", "Lorry drivers", "Taxi drivers"],
    category: 2,
    content: require("./../assets/qimage/AB2036.jpg"),
    correctAnswer: 0,
    explanation:
      "These signs apply only to tram drivers, but you should know their meaning so that you're aware of the priorities and are able to anticipate the actions of the driver.",
    id: 10,
    mediaType: "image",
    question: "Who should obey diamond-shaped traffic signs?",
  },
  {
    answers: ["Cars", "Cycles", "Buses", "Lorries"],
    category: 2,
    correctAnswer: 1,
    explanation:
      "The narrow wheels of a bicycle can become stuck in the tram rails, causing the cyclist to stop suddenly, wobble or even lose balance altogether. The tramlines are also slippery, which could cause a cyclist to slide or fall off.",
    id: 11,
    mediaType: "image",
    question:
      "On a road where trams operate, which vehicles will be most at risk from the tram rails?",
  },
  {
    answers: [
      "To alert others to your presence",
      "To allow you right of way",
      "To greet other road users",
      "To signal your annoyance",
    ],
    category: 2,
    correctAnswer: 0,
    explanation:
      "You mustn't use your vehicle's horn between 11.30 pm and 7 am in a built-up area or when you're stationary, unless a moving vehicle poses a danger. Its function is to alert other road users to your presence.",
    id: 12,
    mediaType: "image",
    question: "When should you use your vehicle's horn?",
  },
  {
    answers: [
      "In the right-hand lane",
      "In the left-hand lane",
      "In either lane, depending on the traffic",
      "Just left of the centre line",
    ],
    category: 2,
    correctAnswer: 0,
    explanation:
      "When you’re in a one-way street and want to turn right, you should take up a position in the right-hand lane. This will allow other road users, not wishing to turn, to pass on the left. Indicate your intention and take up the correct position in good time.",
    id: 13,
    mediaType: "image",
    question:
      "You're in a one-way street and want to turn right. Where should you position your vehicle when there are two lanes?",
  },
  {
    answers: [
      "To allow other drivers to pull out in front of you",
      "To give a better view into the road that you're joining",
      "To help other road users know what you intend to do",
      "To allow drivers to pass you on the right",
    ],
    category: 2,
    correctAnswer: 2,
    explanation:
      "If you wish to turn right into a side road, take up your position in good time. Move to the centre of the road when it's safe to do so. This will allow vehicles to pass you on the left. Early planning will show other traffic what you intend to do.",
    id: 14,
    mediaType: "image",
    question:
      "You wish to turn right ahead. Why should you take up the correct position in good time?",
  },
  {
    answers: ["Toucan", "Puffin", "Pelican", "Zebra"],
    category: 2,
    correctAnswer: 0,
    explanation:
      "A toucan crossing is designed to allow pedestrians and cyclists to cross at the same time. Look out for cyclists approaching the crossing at speed.",
    id: 15,
    mediaType: "image",
    question:
      "Which type of crossing allows cyclists to ride across with pedestrians?",
  },
  {
    answers: [
      "Accelerate to make a gap behind you",
      "Touch the brakes sharply to show your brake lights",
      "Maintain your speed to prevent the vehicle from overtaking",
      "Allow the vehicle to overtake",
    ],
    category: 2,
    correctAnswer: 3,
    explanation:
      "Don’t enforce the speed limit by blocking another vehicle’s progress. This will only cause frustration. Allow the other vehicle to pass when you can do so safely.",
    id: 16,
    mediaType: "image",
    question:
      "You're travelling at the legal speed limit. What should you do if the vehicle behind approaches quickly, flashing its headlights?",
  },
  {
    answers: [
      "When showing that you're giving way",
      "When showing that you're about to turn",
      "When telling them that you have right of way",
      "When letting them know that you're there",
    ],
    category: 2,
    correctAnswer: 3,
    explanation:
      "You should only flash your headlights to warn others of your presence. Don't use them to greet others, show impatience or give priority to other road users, because they could misunderstand your signal.",
    id: 17,
    mediaType: "image",
    question: "When should you flash your headlights at other road users?",
  },
  {
    answers: [
      "Accelerate and keep to the middle",
      "Slow down and keep to the right",
      "Accelerate and look to the left",
      "Slow down and look both ways",
    ],
    category: 2,
    correctAnswer: 3,
    explanation:
      "Be cautious, especially when your view is restricted by hedges, bushes, walls, large vehicles, etc. In the summer months, these junctions can become more difficult to deal with, because growing foliage may further obscure your view.",
    id: 18,
    mediaType: "image",
    question:
      "You're approaching an unmarked crossroads. How should you deal with the junction?",
  },
  {
    answers: [
      "Before restarting the engine after it has stalled",
      "When checking your gap from the vehicle in front",
      "Before using the 'Mirrors - Signal - Manoeuvre' routine",
      "When traffic lights change to green",
    ],
    category: 2,
    correctAnswer: 1,
    explanation:
      "In good conditions, the 'two-second rule' can be used to check the distance between your vehicle and the one in front. This technique works on roads carrying faster traffic. Choose a fixed object, such as a bridge, sign or tree. When the vehicle ahead passes this object, say to yourself 'Only a fool breaks the two-second rule.' If you reach the object before you finish saying this, you're too close.",
    id: 19,
    mediaType: "image",
    question:
      "The conditions are good and dry. When should you use the 'two-second rule'?",
  },
  {
    answers: ["Steady red", "Flashing amber", "Steady amber", "Flashing green"],
    category: 2,
    correctAnswer: 2,
    explanation:
      "Puffin crossings have infra-red sensors that detect when pedestrians are crossing and hold the red traffic signal until the crossing is clear. The use of a sensor means there's no flashing amber phase as there is with a pelican crossing.",
    id: 20,
    mediaType: "image",
    question: "Which colour follows the green signal at a puffin crossing?",
  },
  {
    answers: [
      "Ignore the driver behind and continue to travel within the speed limit",
      "Slow down, gradually increasing the gap between you and the vehicle in front",
      "Signal left and wave the driver behind to come past",
      "Move over to a position just left of the centre line of the road",
    ],
    category: 2,
    correctAnswer: 1,
    explanation:
      "If the driver behind is following too closely, there’s a danger they’ll collide with the back of your vehicle if you stop suddenly. You can reduce this risk by slowing down and increasing the safety margin in front of you. This reduces the chance that you’ll have to stop suddenly and allows you to spread your braking over a greater distance. This is an example of defensive driving.",
    id: 21,
    mediaType: "image",
    question:
      "You're in a line of traffic. What action should you take if the driver behind is following very closely?",
  },
  {
    answers: [
      "Continue along the single-track road",
      "Stop in the passing place",
      "Move over onto the verge",
      "Wait opposite the passing place ",
    ],
    category: 2,
    correctAnswer: 3,
    explanation:
      "When you meet oncoming vehicles on a single-track road, you should allow them to pass. You should pull into a passing place on your left or wait opposite a passing place on your right. Do not move onto the verge as there may be hidden hazards.",
    id: 22,
    mediaType: "image",
    question:
      "You’re travelling along a single-track road. There’s a passing place on your right. What should you do if you see a vehicle coming towards you?",
  },
  {
    answers: [
      "Full-beam headlights",
      "Sidelights",
      "Dipped headlights",
      "Fog lights",
    ],
    category: 2,
    correctAnswer: 2,
    explanation:
      "Use the full-beam headlights only when you can be sure that you won’t dazzle other road users.",
    id: 23,
    mediaType: "image",
    question:
      "You're driving on a clear night. Which lights should you use if the national speed limit applies and there's a steady stream of oncoming traffic?",
  },
  {
    answers: [
      "Slow down and let the vehicle turn",
      "Drive on, keeping to the left",
      "Overtake on the right of it",
      "Hold your speed and sound your horn",
    ],
    category: 2,
    correctAnswer: 0,
    explanation:
      "Large, long vehicles need extra room when making turns at junctions. They may move out to the right in order to make a left turn. Keep well back and don't attempt to pass them on their left.",
    id: 24,
    mediaType: "image",
    question:
      "You're driving behind a large goods vehicle. What should you do if it signals left but steers to the right?",
  },
  {
    answers: [
      "Accelerate to get closer to the red car",
      "Give a long blast on the horn",
      "Drop back to leave the correct separation distance",
      "Flash your headlights several times",
    ],
    category: 2,
    content: require("./../assets/qimage/BB1013n1.jpg"),
    correctAnswer: 2,
    explanation:
      "There are times when other drivers make incorrect or ill-judged decisions. Be tolerant and try not to retaliate or react aggressively. Always consider the safety of other road users, your passengers and yourself.",
    id: 25,
    mediaType: "image",
    question:
      "You're driving along this road. What should you do if the red car cuts in close in front of you?",
  },
  {
    answers: [
      "Use the parking brake and release the footbrake",
      "Keep your foot on the footbrake",
      "Balance the clutch with the accelerator",
      "Use the parking brake and footbrake together",
    ],
    category: 2,
    correctAnswer: 0,
    explanation:
      "In queuing traffic, your brake lights can dazzle drivers behind you. If you apply your parking brake, you can take your foot off the footbrake. This will turn off the brake lights so that they can't dazzle the driver behind you.",
    id: 26,
    mediaType: "image",
    question:
      "You're waiting in a traffic queue at night. How can you avoid dazzling drivers behind you? ",
  },
  {
    answers: [
      "Move closer to the car ahead, so the driver behind has no room to overtake",
      "Wave the driver behind to overtake when it's safe",
      "Keep a steady course and allow the driver behind to overtake",
      "Accelerate to get away from the driver behind",
    ],
    category: 2,
    correctAnswer: 2,
    explanation:
      "Keep a steady course to give the driver behind an opportunity to overtake safely. If necessary, slow down. Reacting incorrectly to another driver's impatience can lead to danger.",
    id: 27,
    mediaType: "image",
    question:
      "You're driving in traffic at the speed limit for the road. What should you do if the driver behind is trying to overtake?",
  },
  {
    answers: [
      "The lane isn't in operation",
      "The lane is only in operation at peak times",
      "The lane is in operation 24 hours a day",
      "The lane is only in operation in daylight hours",
    ],
    category: 2,
    content: require("./../assets/qimage/BB1022n1.jpg"),
    correctAnswer: 2,
    explanation:
      "Bus-lane signs show the vehicles allowed to use the lane and its times of operation. Where no times are shown, the bus lane is in operation 24 hours a day.",
    id: 28,
    mediaType: "image",
    question:
      "What does it mean if the signs at a bus lane show no times of operation?",
  },
  {
    answers: [
      "Ignore them as they have no authority",
      "Stop and switch off your engine",
      "Continue on but drive slowly",
      "Try to get past quickly",
    ],
    category: 2,
    correctAnswer: 1,
    explanation:
      "If someone in charge of animals asks you to stop, you should do so and switch off your engine. Animals are unpredictable and startle easily; they could turn and run into your path or into the path of another moving vehicle.",
    id: 29,
    mediaType: "image",
    question:
      "What should you do when a person herding sheep asks you to stop?",
  },
  {
    answers: [
      "Sound your horn as a warning",
      "Go past as quickly as possible",
      "Flash your headlights as a warning",
      "Go past slowly and carefully",
    ],
    category: 2,
    correctAnswer: 3,
    explanation:
      "Horses can be startled by the sound of a car engine or the rush of air caused by a vehicle passing too closely. Keep well back and only pass when it's safe. Leave them plenty of room; you may have to use the other side of the road to go past safely.",
    id: 30,
    mediaType: "image",
    question: "What should you do when you're overtaking a horse and rider?",
  },
  {
    answers: [
      "Give way to older and infirm people only",
      "Slow down and prepare to stop",
      "Use your headlights to indicate they can cross",
      "Wave at them to cross the road",
    ],
    category: 2,
    correctAnswer: 1,
    explanation:
      "As you approach a zebra crossing, look for pedestrians waiting to cross. Where you can see them, slow down and prepare to stop. Be especially careful of children and older people, who may have difficulty judging when it's safe to cross.",
    id: 31,
    mediaType: "image",
    question:
      "You're approaching a zebra crossing. What should you do if pedestrians are waiting to cross?",
  },
  {
    answers: [
      "Swerve past it and sound your horn",
      "Flash your headlights and drive up close behind",
      "Slow down and be ready to stop",
      "Accelerate past it immediately",
    ],
    category: 2,
    correctAnswer: 2,
    explanation:
      "Try to anticipate what other drivers might do. Look and plan ahead so that you're ready to respond safely if a hazard develops. Be tolerant of road users who make mistakes.",
    id: 32,
    mediaType: "image",
    question:
      "What should you do if a vehicle pulls out in front of you at a junction?",
  },
  {
    answers: [
      "When it's raining",
      "When it's dry",
      "When it's icy",
      "When it's foggy",
    ],
    category: 2,
    correctAnswer: 1,
    explanation:
      "In good, dry conditions, a driver needs to keep a distance of at least two seconds from the car in front. This should allow enough space for you to stop if the driver in front has to stop suddenly.",
    id: 33,
    mediaType: "image",
    question:
      "When should you leave a two-second gap between your vehicle and the one in front?",
  },
  {
    answers: [
      "Flash your headlights",
      "Use dipped headlights",
      "Switch off your headlights",
      "Use full-beam headlights",
    ],
    category: 2,
    correctAnswer: 1,
    explanation:
      "If you follow another vehicle with your headlights on full beam, they could dazzle the driver. Leave a safe distance and make sure that the light from your dipped beam falls short of the vehicle in front.",
    id: 34,
    mediaType: "image",
    question:
      "You're driving at night on an unlit road. What should you do if you're following another vehicle?",
  },
  {
    answers: [
      "Keep well out to stop vehicles overtaking dangerously",
      "Wave the vehicles behind to come past you if you think they can overtake quickly",
      "Pull in when you can, to let the vehicles behind overtake",
      "Give a left signal when it's safe for vehicles to overtake you",
    ],
    category: 2,
    correctAnswer: 2,
    explanation:
      "If you’re driving a slow-moving vehicle along a narrow road, try not to hold up faster traffic. If you see vehicles following behind, pull over in a safe place and let the traffic pass before continuing. Don't wave other traffic past – this could be dangerous if you or they haven’t noticed a hazard ahead.",
    id: 35,
    mediaType: "image",
    question:
      "What should you do if you're driving a slow-moving vehicle on a narrow winding road?",
  },
  {
    answers: [
      "It can make the engine difficult to start",
      "It can make the roads slippery for other road users",
      "It can improve your vehicle’s fuel consumption",
      "It can increase the level of exhaust emissions",
    ],
    category: 2,
    correctAnswer: 1,
    explanation:
      "Diesel fuel can spill out if your filler cap isn't secured properly. This is most likely to occur on bends, junctions and roundabouts, where it will make the road slippery, especially if it's wet. At the end of a spell of dry weather, road surfaces may be especially slippery where diesel has been spilled but it hasn’t been washed away by rain.",
    id: 36,
    mediaType: "image",
    question:
      "You're driving a car that has a diesel engine. What can a loose filler cap on your fuel tank cause?",
  },
  {
    answers: [
      "Check that your tank is only three-quarters full",
      "Check that you've used a locking filler cap",
      "Check that your fuel gauge is working",
      "Check that your filler cap is securely fastened",
    ],
    category: 2,
    correctAnswer: 3,
    explanation:
      "When learning to drive, it's a good idea to practise filling your car with fuel. Ask your instructor if you can use a petrol station and fill the fuel tank yourself. You need to know where the filler cap is on the car you're driving, so you know which side of the pump to park at. Take care not to overfill the tank and make sure you secure the filler cap correctly, so that no fuel leaks onto the road while you're driving.",
    id: 37,
    mediaType: "image",
    question: "What should you do to avoid fuel spillage?",
  },
  {
    answers: ["Considerate", "Defensive", "Competitive", "Responsible"],
    category: 2,
    correctAnswer: 2,
    explanation:
      "Competitive driving increases the risks to everyone and is the opposite of responsible, considerate and defensive driving. Defensive driving is about questioning the actions of other road users and being prepared for the unexpected. Don't be taken by surprise.",
    id: 38,
    mediaType: "image",
    question: "What style of driving causes increased risk to everyone?",
  },
  {
    answers: [
      "The vehicle's stopping distance would increase",
      "The flash rate of the vehicle's indicators would increase",
      "The vehicle's gear change mechanism would become stiff",
      "The vehicle's headlights would aim high",
    ],
    category: 12,
    correctAnswer: 0,
    explanation:
      "Your tyres are your only contact with the road. To prevent problems with braking and steering, keep your tyres free from defects; they must have sufficient tread depth and be correctly inflated. Correct tyre pressures help reduce the risk of skidding and provide a safer and more comfortable drive or ride.",
    id: 1,
    mediaType: "image",
    question: "How would under-inflated tyres affect your vehicle?",
  },
  {
    answers: [
      "Between 10.00 pm and 6.00 am in a built-up area",
      "At any time in a built-up area",
      "Between 11.30 pm and 7.00 am in a built-up area",
      "Between 11.30 pm and 6.00 am on any road",
    ],
    category: 12,
    correctAnswer: 2,
    explanation:
      "Every effort must be made to prevent excessive noise, especially in built-up areas at night. Don’t rev your engine or sound the horn unnecessarily. It's illegal to sound your horn in a built-up area between 11.30 pm and 7.00 am, except when another road user poses a danger.",
    id: 2,
    mediaType: "image",
    question: "When are you not allowed to sound your vehicle's horn?",
  },
  {
    answers: [
      "It's powered by gravity",
      "It's powered by diesel",
      "It's powered by electricity",
      "It's powered by unleaded petrol",
    ],
    category: 12,
    content: require("./../assets/qimage/AB2060.jpg"),
    correctAnswer: 2,
    explanation:
      "Trams are powered by electricity and therefore don't emit exhaust fumes. They ease traffic congestion by offering drivers an alternative to using their car, particularly in busy cities and towns.",
    id: 3,
    mediaType: "image",
    question:
      "What makes the vehicle in the picture 'environmentally friendly'?",
  },
  {
    answers: [
      "To raise the speed limits",
      "To help the traffic flow",
      "To provide better parking",
      "To allow lorries to load more freely",
    ],
    category: 12,
    correctAnswer: 1,
    explanation:
      "Inconsiderate parking can obstruct the flow of traffic and so make traffic congestion worse. Red routes are designed to prevent this by enforcing strict parking restrictions. Driving slowly in traffic increases fuel consumption and causes a build-up of exhaust fumes.",
    id: 4,
    mediaType: "image",
    question: "Why have 'red routes' been introduced in major cities?",
  },
  {
    answers: [
      "To separate lanes of traffic",
      "To increase traffic speed",
      "To allow pedestrians to cross",
      "To reduce traffic speed",
    ],
    category: 12,
    correctAnswer: 3,
    explanation:
      "Traffic-calming measures help to keep vehicle speeds low in congested areas where there are pedestrians and children. A pedestrian is much more likely to survive a collision with a vehicle travelling at 20 mph than they are with a vehicle travelling at 40 mph.",
    id: 5,
    mediaType: "image",
    question: "What's the purpose of road humps, chicanes and narrowings?",
  },
  {
    answers: [
      "To reduce fuel consumption",
      "To reduce the risk of fire",
      "To reduce harmful exhaust gases",
      "To reduce engine wear",
    ],
    category: 12,
    correctAnswer: 2,
    explanation:
      "Catalytic converters reduce a large percentage of harmful exhaust emissions. They work more efficiently when the engine has reached its normal working temperature.",
    id: 6,
    mediaType: "image",
    question: "What's the purpose of a catalytic converter?",
  },
  {
    answers: [
      "After any lengthy journey",
      "After travelling at high speed",
      "When tyres are hot",
      "When tyres are cold",
    ],
    category: 12,
    correctAnswer: 3,
    explanation:
      "Check the tyre pressures when the tyres are cold. This will give you a more accurate reading. The heat generated on a long journey will raise the pressure inside the tyre.",
    id: 7,
    mediaType: "image",
    question: "When should tyre pressures be checked?",
  },
  {
    answers: [
      "When its tyres are under-inflated",
      "When its tyres are of different makes",
      "When its tyres are over-inflated",
      "When its tyres are new",
    ],
    category: 12,
    correctAnswer: 0,
    explanation:
      "Check your tyre pressures frequently - normally once a week. If they're lower than those recommended by the manufacturer, there will be more 'rolling resistance'. The engine will have to work harder to overcome this, leading to increased fuel consumption.",
    id: 8,
    mediaType: "image",
    question: "When will your vehicle use more fuel?",
  },
  {
    answers: [
      "Bury it in your garden",
      "Put it in the dustbin",
      "Take it to a local-authority disposal site",
      "Leave it on waste land",
    ],
    category: 12,
    correctAnswer: 2,
    explanation:
      "Batteries contain acid, which is hazardous, and they must be disposed of safely. This means taking them to an appropriate disposal site.",
    id: 9,
    mediaType: "image",
    question: "How should you dispose of a used vehicle battery?",
  },
  {
    answers: [
      "Poor steering control",
      "Accelerating around bends",
      "Staying in high gears",
      "Harsh braking and accelerating",
    ],
    category: 12,
    correctAnswer: 3,
    explanation:
      "Accelerating and braking gently and smoothly will help to save fuel and reduce wear on your vehicle. This makes it better for the environment too.",
    id: 10,
    mediaType: "image",
    question: "What's most likely to increase fuel consumption?",
  },
  {
    answers: [
      "Battery acid",
      "Distilled water",
      "Engine oil",
      "Engine coolant",
    ],
    category: 12,
    correctAnswer: 1,
    explanation:
      "Some modern batteries are maintenance free. Check your vehicle handbook and, if necessary, make sure that the plates in each battery cell are covered with fluid.",
    id: 11,
    mediaType: "image",
    question:
      "The fluid level in your battery is low. What fluid should you use to top it up?",
  },
  {
    answers: [
      "When there are continuous white lines in the middle of the road",
      "When the speed limit exceeds 30 mph",
      "When you're facing oncoming traffic",
      "When you're near a bus stop",
    ],
    category: 12,
    correctAnswer: 1,
    explanation:
      "When parking at night, park in the direction of the traffic. This will enable other road users to see the reflectors on the rear of your vehicle. Use your parking lights if the speed limit is over 30 mph.",
    id: 12,
    mediaType: "image",
    question:
      "You're parked on the road at night. When must you use parking lights?",
  },
  {
    answers: [
      "Only use it for short journeys",
      "Don't service it",
      "Drive faster than normal",
      "Keep engine revs low",
    ],
    category: 12,
    correctAnswer: 3,
    explanation:
      "Engines that burn fossil fuels produce exhaust emissions that are harmful to health. The harder you make the engine work, the more emissions it will produce. Engines also use more fuel and produce higher levels of emissions when they're cold. Anything you can do to reduce your use of fossil fuels will help the environment.",
    id: 13,
    mediaType: "image",
    question:
      "How can you reduce the environmental harm caused by your motor vehicle?",
  },
  {
    answers: [
      "A faulty gearbox",
      "A faulty braking system",
      "A faulty electrical system",
      "A faulty exhaust system",
    ],
    category: 12,
    correctAnswer: 1,
    explanation:
      "If you see that parts of the tread on your tyres are wearing before others, it may indicate a brake, suspension or wheel-alignment fault. Regular servicing will help to detect faults at an early stage and this will avoid the risk of minor faults becoming serious or even dangerous.",
    id: 14,
    mediaType: "image",
    question: "What can cause excessive or uneven tyre wear?",
  },
  {
    answers: [
      "The top of the battery",
      "Halfway up the battery",
      "Just below the cell plates",
      "Just above the cell plates",
    ],
    category: 12,
    correctAnswer: 3,
    explanation:
      "Top up the battery with distilled water and make sure each cell plate is covered.",
    id: 15,
    mediaType: "image",
    question:
      "You need to top up your battery with distilled water. What level should you fill it to?",
  },
  {
    answers: [
      "Check your vehicle handbook",
      "Ask your local garage",
      "Use a route planner on the internet",
      "Consult a travel agent",
    ],
    category: 12,
    correctAnswer: 2,
    explanation:
      "Various route planners are available on the internet. Most of them give you several options, allowing you to choose between the most direct route and quieter roads. They may also identify rest and fuel stops. Print off the directions and take them with you.",
    id: 16,
    mediaType: "image",
    question: "How can you plan your route before starting a long journey?",
  },
  {
    answers: [
      "You'll have an easier journey",
      "You'll have a more stressful journey",
      "Your journey time will be longer",
      "It will cause more traffic congestion",
    ],
    category: 12,
    correctAnswer: 0,
    explanation:
      "No-one likes to spend time in traffic queues. Try to avoid busy times related to school or work travel.",
    id: 17,
    mediaType: "image",
    question: "Why is it a good idea to plan your journey to avoid busy times?",
  },
  {
    answers: [
      "Your journey will use more fuel",
      "Your journey will take longer",
      "Your journey will be more hazardous",
      "Your journey will have fewer delays",
    ],
    category: 12,
    correctAnswer: 3,
    explanation:
      "If possible, avoid the early morning, late afternoon and early evening ‘rush hour’. Doing this should allow you to have a better journey, with fewer delays. This should help you to arrive at your destination feeling less stressed.",
    id: 18,
    mediaType: "image",
    question:
      "How will your journey be affected by travelling outside the busy times of day?",
  },
  {
    answers: [
      "Your original route may be blocked",
      "Your maps may have different scales",
      "You may find you have to pay a congestion charge",
      "You may get held up by a tractor",
    ],
    category: 12,
    correctAnswer: 0,
    explanation:
      "It can be frustrating and worrying to find your planned route is blocked by roadworks or diversions. If you've planned an alternative, you'll feel less stressed and more able to concentrate fully on your driving or riding. If your original route is mostly on motorways, it’s a good idea to plan an alternative using non-motorway roads. Always carry a map with you just in case you need to refer to it.",
    id: 19,
    mediaType: "image",
    question:
      "You plan your route before starting a journey. Why should you also plan an alternative route?",
  },
  {
    answers: [
      "Allow plenty of time for the trip",
      "Plan to travel at busy times",
      "Avoid roads with the national speed limit ",
      "Prevent other drivers from overtaking",
    ],
    category: 12,
    correctAnswer: 0,
    explanation:
      "Always allow plenty of time for your journey in case of unforeseen problems. Anything can happen; for example, punctures, breakdowns, road closures, diversions and delays. You'll feel less stressed and less inclined to take risks if you aren't ‘pushed for time’.",
    id: 20,
    mediaType: "image",
    question:
      "You have to arrive on time for an appointment. How should you plan for the journey?",
  },
  {
    answers: [
      "Reduced pollution",
      "Increased fuel consumption",
      "Reduced exhaust emissions",
      "Increased road safety",
    ],
    category: 12,
    correctAnswer: 1,
    explanation:
      "Using the controls smoothly can reduce fuel consumption by about 15%, as well as reducing wear and tear on your vehicle. Plan ahead and anticipate changes of speed well in advance. This will reduce the need to accelerate rapidly or brake sharply.",
    id: 21,
    mediaType: "image",
    question:
      "What can you expect if you drive using rapid acceleration and heavy braking?",
  },
  {
    answers: [
      "Anti-freeze level",
      "Brake-fluid level",
      "Battery-water level",
      "Radiator-coolant level",
    ],
    category: 12,
    correctAnswer: 1,
    explanation:
      "You should carry out frequent checks on all fluid levels but particularly brake fluid. As the brake pads or shoes wear down, the brake-fluid level will drop. If it drops below the minimum mark on the fluid reservoir, air could enter the hydraulic system and lead to a loss of braking efficiency or even complete brake failure.",
    id: 22,
    mediaType: "image",
    question:
      "What could cause you to crash if the level is allowed to get too low?",
  },
  {
    answers: [
      "Check the brake-fluid level",
      "Check the footbrake free play",
      "Check that the parking brake is released",
      "Have the brakes checked immediately",
    ],
    category: 12,
    correctAnswer: 3,
    explanation:
      "Consult the vehicle handbook or a garage before driving the vehicle any further. Only drive to a garage if it's safe to do so. If you aren't sure, get expert help.",
    id: 23,
    mediaType: "image",
    question:
      "What should you do if your anti-lock brakes (ABS) warning light stays on?",
  },
  {
    answers: [
      "A fault in the braking system",
      "The engine oil is low",
      "A rear light has failed",
      "Your seat belt isn't fastened",
    ],
    category: 12,
    content: require("./../assets/qimage/BB1039.jpg"),
    correctAnswer: 0,
    explanation:
      "If this light comes on, you should have the brake system checked immediately. A faulty braking system could have dangerous consequences.",
    id: 24,
    mediaType: "image",
    question: "What does it mean if this light comes on while you're driving?",
  },
  {
    answers: [
      "To prevent wear on the pedals",
      "To maintain control of the pedals",
      "To enable you to adjust your seat",
      "To enable you to walk for assistance if you break down",
    ],
    category: 12,
    correctAnswer: 1,
    explanation:
      "When you’re going to drive, make sure that you’re wearing suitable clothing.nComfortable shoes will ensure that you have proper control of the foot pedals.",
    id: 25,
    mediaType: "image",
    question: "Why is it important to wear suitable shoes when you're driving?",
  },
  {
    answers: [
      "An air-sprung seat",
      "Anti-lock brakes",
      "A collapsible steering wheel",
      "A properly adjusted head restraint",
    ],
    category: 12,
    correctAnswer: 3,
    explanation:
      "If you’re involved in a collision, head restraints will reduce the risk of neck injury. They must be properly adjusted. Make sure they aren’t positioned too low: in a crash, this could cause damage to the neck.",
    id: 26,
    mediaType: "image",
    question:
      "If you're involved in a collision, what will reduce the risk of neck injury?",
  },
  {
    answers: [
      "The tyres are worn",
      "The tyres are under inflated",
      "The vehicle is on soft ground",
      "The shock absorbers are worn",
    ],
    category: 12,
    correctAnswer: 3,
    explanation:
      "If you find that your vehicle bounces as you drive around a corner or bend in the road, the shock absorbers might be worn. To test your shock absorbers, sharply press down and release above each wheel. If the vehicle continues to bounce, take it to be checked by a qualified mechanic.",
    id: 27,
    mediaType: "image",
    question:
      "What does it mean if your vehicle keeps bouncing after you sharply press down and release on the bodywork over a wheel?",
  },
  {
    answers: [
      "There will be less wind noise",
      "The engine will use more oil ",
      "The car will accelerate faster",
      "Fuel consumption will increase",
    ],
    category: 12,
    correctAnswer: 3,
    explanation:
      "A roof rack increases your car's wind resistance. This will cause an increase in fuel consumption, so you should remove it when it isn't being used. An aerodynamically designed roof rack or box will help reduce wind resistance to a minimum, but the rack or box should still be removed when it isn't in use.",
    id: 28,
    mediaType: "image",
    question: "How will a roof rack affect your car?",
  },
  {
    answers: [
      "If they were bought second-hand",
      "If they have any large, deep cuts in the side wall",
      "If they're of different makes",
      "If they have different tread patterns",
    ],
    category: 12,
    correctAnswer: 1,
    explanation:
      "Your tyres may be of different treads and makes. They can even be second-hand, as long as they're in good condition. They must, however, be intact, without cuts or tears. When checking the side walls for cuts and bulges, don’t forget to check the side of the tyre that's hidden from view, under the car.",
    id: 29,
    mediaType: "image",
    question: "What makes your tyres illegal?",
  },
  {
    answers: ["1 mm", "1.6 mm", "2.5 mm", "4 mm"],
    category: 12,
    correctAnswer: 1,
    explanation:
      "Car tyres must have sufficient depth of tread to give them a good grip on the road surface. The legal minimum for cars is 1.6 mm. This depth should be across the central three-quarters of the breadth of the tyre and around the entire circumference.",
    id: 30,
    mediaType: "image",
    question: "What's the legal minimum depth of tread for car tyres?",
  },
  {
    answers: [
      "The children's parents",
      "You, the driver",
      "The front-seat passenger",
      "The children",
    ],
    category: 12,
    correctAnswer: 1,
    explanation:
      "Seat belts save lives and reduce the risk of injury. If you're carrying passengers under 14 years old, it's your responsibility as the driver to ensure that their seat belts are fastened or they're seated in an approved child restraint.",
    id: 31,
    mediaType: "image",
    question:
      "You're carrying two 13-year-old children and their parents in your car. Who's responsible for seeing that the children wear seat belts?",
  },
  {
    answers: [
      "By accelerating harshly",
      "By accelerating gently",
      "By using leaded fuel",
      "By driving faster",
    ],
    category: 12,
    correctAnswer: 1,
    explanation:
      "Rapid acceleration and heavy braking lead to increased n• fuel consumption n• wear on your vehicle. nHaving your vehicle serviced regularly will maintain its efficiency, produce cleaner emissions and reduce the risk of a breakdown.",
    id: 32,
    mediaType: "image",
    question: "How can drivers help the environment?",
  },
  {
    answers: [
      "By having your vehicle serviced regularly",
      "By revving the engine in the lower gears",
      "By keeping an empty roof rack on your vehicle",
      "By driving at higher speeds where possible",
    ],
    category: 12,
    correctAnswer: 0,
    explanation:
      "If you don't have your vehicle serviced regularly, the engine will gradually become less efficient. This will cause increased fuel consumption and, in turn, an increase in the amount of harmful emissions it produces.",
    id: 33,
    mediaType: "image",
    question: "How can you avoid wasting fuel?",
  },
  {
    answers: [
      "Drive in a bus lane",
      "Use a car with a smaller engine",
      "Walk or cycle on short journeys",
      "Travel by car at all times",
    ],
    category: 12,
    correctAnswer: 2,
    explanation:
      "Try not to use your car as a matter of routine. For shorter journeys, consider walking or cycling instead - this is much better for both you and the environment.",
    id: 34,
    mediaType: "image",
    question: "What could you do to reduce the volume of traffic on the roads?",
  },
  {
    answers: [
      "Reducing your speed",
      "Driving on motorways",
      "Using different brands of fuel",
      "Under-inflated tyres",
    ],
    category: 12,
    correctAnswer: 3,
    explanation:
      "Wasting fuel costs you money and also causes unnecessary pollution. Ensuring your tyres are correctly inflated, avoiding carrying unnecessary weight and removing a roof rack that's not in use will all help to reduce your fuel consumption.",
    id: 35,
    mediaType: "image",
    question: "What's most likely to waste fuel?",
  },
  {
    answers: [
      "The gearbox",
      "The transmission",
      "The door locks",
      "The seat belts",
    ],
    category: 12,
    correctAnswer: 3,
    explanation:
      "Unless exempt, you and your passengers must wear a seat belt (or suitable child restraint). The seat belts in your car must be in good condition and working properly; they’ll be checked during its MOT test.",
    id: 36,
    mediaType: "image",
    question:
      "What part of the car does the law require you to keep in good condition?",
  },
  {
    answers: ["About 5%", "About 15%", "About 75%", "About 100%"],
    category: 12,
    correctAnswer: 1,
    explanation:
      "Your vehicle will use less fuel if you avoid heavy acceleration. The higher the engine revs, the more fuel you'll use. Using the same gear, and covering the same distance, a vehicle travelling at 70 mph will use about 15% more fuel than it would at 50 mph. However, don’t travel so slowly that you inconvenience or endanger other road users.",
    id: 37,
    mediaType: "image",
    question:
      "How much more fuel will you use by driving at 70 mph, compared with driving at 50 mph?",
  },
  {
    answers: [
      "Increase the pressure in your tyres",
      "Have the brakes checked as soon as possible",
      "Change gear and pump the brake pedal",
      "Use your parking brake at the same time",
    ],
    category: 12,
    correctAnswer: 1,
    explanation:
      "The brakes on your vehicle must be effective and properly adjusted. If your vehicle pulls to one side when braking, take it to be checked by a qualified mechanic as soon as you can.",
    id: 38,
    mediaType: "image",
    question:
      "What should you do if your vehicle pulls to one side when you use the brakes?",
  },
  {
    answers: [
      "The steering will pull to one side",
      "The steering will vibrate",
      "The brakes will fail",
      "The tyres will deflate",
    ],
    category: 12,
    correctAnswer: 1,
    explanation:
      "If your wheels are out of balance, it will cause the steering to vibrate at certain speeds. This isn't a fault that will put itself right, so take your vehicle to a garage or tyre fitter to have the wheels rebalanced.",
    id: 39,
    mediaType: "image",
    question: "What will happen if your car's wheels are unbalanced?",
  },
  {
    answers: ["The gearbox", "The engine", "The brakes", "The tyres"],
    category: 12,
    correctAnswer: 3,
    explanation:
      "Turning the steering wheel when the car isn't moving is known as dry steering. It can cause unnecessary wear to the tyres and steering mechanism.",
    id: 40,
    mediaType: "image",
    question:
      "What can be damaged if you turn the steering wheel when the car isn't moving?",
  },
  {
    answers: [
      "Put them in a carrier bag",
      "Park near a school entrance",
      "Lock them out of sight",
      "Park near a bus stop",
    ],
    category: 12,
    correctAnswer: 2,
    explanation:
      "If you have to leave valuables in your car, lock them out of sight. This is the best way to deter an opportunist thief.",
    id: 41,
    mediaType: "image",
    question:
      "What’s the safest thing to do if you have to leave valuables in your car?",
  },
  {
    answers: [
      "Always keeping the headlights on",
      "Fitting reflective glass windows",
      "Always keeping the interior light on",
      "Etching the registration number on the windows",
    ],
    category: 12,
    correctAnswer: 3,
    explanation:
      "Having your car registration number etched on all your windows is a cheap and effective way to deter professional car thieves.",
    id: 42,
    mediaType: "image",
    question: "What may help to deter a thief from stealing your car?",
  },
  {
    answers: [
      "The car dealer’s details",
      "The owner’s manual",
      "The service record",
      "The vehicle registration document",
    ],
    category: 12,
    correctAnswer: 3,
    explanation:
      "Never leave the vehicle registration document inside your car. This document would help a thief to dispose of your car more easily. ",
    id: 43,
    mediaType: "image",
    question:
      "What should you remove from your car before leaving it unattended?",
  },
  {
    answers: [
      "Park near a busy junction",
      "Park in a housing estate",
      "Lock it and remove the key",
      "Leave the left indicator on",
    ],
    category: 12,
    correctAnswer: 2,
    explanation:
      "An unlocked car is an open invitation to thieves. Leaving the keys in the ignition not only makes your car easy to steal but could also invalidate your insurance.",
    id: 44,
    mediaType: "image",
    question:
      "What should you do when leaving your vehicle parked and unattended?",
  },
  {
    answers: [
      "Driving more slowly",
      "Accelerating rapidly",
      "Late and heavy braking",
      "Staying in lower gears",
    ],
    category: 12,
    correctAnswer: 0,
    explanation:
      "Harsh braking, frequent gear changes and harsh acceleration increase fuel consumption. A car uses less fuel when travelling at a constant low speed in an appropriate high gear. nYou need to look well ahead so you’re able to anticipate hazards early. Easing off the accelerator and timing your approach at junctions, for example, can reduce the fuel consumption of your vehicle.",
    id: 45,
    mediaType: "image",
    question: "What will reduce fuel consumption?",
  },
  {
    answers: [
      "Take it to a local-authority site",
      "Pour it down a drain",
      "Tip it into a hole in the ground",
      "Put it in your dustbin",
    ],
    category: 12,
    correctAnswer: 0,
    explanation:
      "It's illegal to pour engine oil down any drain. Oil is a pollutant and harmful to wildlife. Dispose of it safely at an authorised site.",
    id: 46,
    mediaType: "image",
    question:
      "You service your own vehicle. How should you dispose of the old engine oil?",
  },
  {
    answers: [
      "To recover the cost of expensive garage equipment",
      "To help protect the environment against pollution",
      "To discover which fuel supplier is used the most",
      "To make sure diesel and petrol engines emit the same fumes",
    ],
    category: 12,
    correctAnswer: 1,
    explanation:
      "Emission tests are carried out to make sure your vehicle’s engine is operating efficiently. This ensures the pollution produced by the engine is kept to a minimum. If your vehicle isn't serviced regularly, it may fail the MOT emissions test.",
    id: 47,
    mediaType: "image",
    question: "Why do MOT tests include an exhaust emission test?",
  },
  {
    answers: [
      "Use narrow side streets",
      "Brake heavily",
      "Use busy routes",
      "Anticipate well ahead",
    ],
    category: 12,
    correctAnswer: 3,
    explanation:
      "By looking well ahead and recognising hazards in good time, you can avoid late and heavy braking. Watch the traffic flow and look well ahead for potential hazards so you can control your speed in good time. Avoid over-revving the engine and accelerating harshly, as this increases wear to the engine and uses more fuel.",
    id: 48,
    mediaType: "image",
    question:
      "How can you reduce the damage your vehicle causes to the environment?",
  },
  {
    answers: [
      "Your vehicle will be cheaper to insure",
      "Your vehicle tax will be lower",
      "Your vehicle will remain reliable",
      "Your journey times will be reduced",
    ],
    category: 12,
    correctAnswer: 2,
    explanation:
      "All vehicles need to be serviced to keep working efficiently. An efficient engine uses less fuel and produces fewer harmful emissions than an engine that's running inefficiently. Keeping the vehicle serviced to the manufacturer's schedule should also keep it reliable and reduce the chance of it breaking down.",
    id: 49,
    mediaType: "image",
    question:
      "How will you benefit from following the manufacturer's service schedule for your vehicle?",
  },
  {
    answers: [
      "Maintain a reduced speed throughout",
      "Accelerate quickly between the humps",
      "Always keep to the maximum legal speed",
      "Drive slowly at school times only",
    ],
    category: 12,
    content: require("./../assets/qimage/BB1558n2.jpg"),
    correctAnswer: 0,
    explanation:
      "Road humps are there for a reason – to protect vulnerable road users by reducing the speed of traffic. Don’t accelerate harshly between the humps. Put the safety of others first and maintain a reduced speed throughout the zone.",
    id: 50,
    mediaType: "image",
    question:
      "How should you drive when you're driving along a road that has road humps?",
  },
  {
    answers: [
      "Before a long journey",
      "When the engine is hot",
      "Early in the morning",
      "Every time you drive the car",
    ],
    category: 12,
    correctAnswer: 0,
    explanation:
      "An engine can use more oil during long journeys than on shorter trips. Insufficient engine oil is potentially dangerous: it can lead to excessive wear, mechanical breakdown and expensive repairs.nMost cars have a dipstick to allow the oil level to be checked. If not, you should refer to the vehicle handbook.",
    id: 51,
    mediaType: "image",
    question: "When should you check the engine oil level?",
  },
  {
    answers: [
      "No, not unless you stay with your car",
      "Yes, in order to drop off a passenger",
      "Yes, if you don't block people from crossing",
      "No, not under any circumstances",
    ],
    category: 12,
    correctAnswer: 3,
    explanation:
      "It’s an offence to park on the zigzag lines of a zebra crossing. You'll be causing an obstruction by obscuring the view of both pedestrians and drivers.",
    id: 52,
    mediaType: "image",
    question:
      "You're having difficulty finding a parking space in a busy town. Can you park on the zigzag lines of a zebra crossing?",
  },
  {
    answers: [
      "Leave the engine running",
      "Switch the engine off but leave the key in",
      "Lock it and remove the key",
      "Park near a traffic warden",
    ],
    category: 12,
    correctAnswer: 2,
    explanation:
      "Always switch off the engine, remove the key and lock your car, even if you're only leaving it for a few minutes.",
    id: 53,
    mediaType: "image",
    question:
      "What should you do when you leave your car unattended for a few minutes?",
  },
  {
    answers: [
      "It makes it easy to find your car",
      "It helps deter thieves",
      "It stops the car being exposed to bad weather",
      "It doesn't cost anything to park here",
    ],
    category: 12,
    correctAnswer: 1,
    explanation:
      "Whenever possible, leave your car in a secure car park. This will help deter thieves.",
    id: 54,
    mediaType: "image",
    question: "Why should you try and park in a secure car park?",
  },
  {
    answers: [
      "Alongside a parking meter",
      "In front of a property entrance",
      "On your driveway",
      "In a marked parking space",
    ],
    category: 12,
    correctAnswer: 1,
    explanation:
      "Don’t park your vehicle where it may obstruct access to a business or property. Think carefully before you slow down and stop. Look at road markings and signs to ensure that you aren’t parking illegally.",
    id: 55,
    mediaType: "image",
    question: "Where would parking your vehicle cause an obstruction?",
  },
  {
    answers: [
      "To make you more comfortable",
      "To help you avoid neck injury",
      "To help you relax",
      "To help you maintain your driving position",
    ],
    category: 12,
    correctAnswer: 1,
    explanation:
      "In a collision, rapid deceleration will violently throw vehicle occupants forward and then backwards as the vehicle stops. Seat belts and airbags protect occupants against the forward movement. Head restraints should be adjusted so they give maximum protection to the head and neck during the backward movement.",
    id: 56,
    mediaType: "image",
    question:
      "What's the most important reason for having a properly adjusted head restraint?",
  },
  {
    answers: [
      "Avoid using the cruise control",
      "Use the air conditioning whenever you drive",
      "Use the gears to slow the vehicle",
      "Avoid making a lot of short journeys",
    ],
    category: 12,
    correctAnswer: 3,
    explanation:
      "Avoid using your car for short journeys. On a short journey, the engine is unlikely to warm up fully and will therefore be running less efficiently. This will result in the car using more fuel and emitting higher levels of harmful emissions.",
    id: 57,
    mediaType: "image",
    question:
      "What can you do to reduce environmental damage caused by your vehicle?",
  },
  {
    answers: [
      "Drive more quickly",
      "Over-rev in a low gear ",
      "Walk or cycle",
      "Drive short journeys",
    ],
    category: 12,
    correctAnswer: 2,
    explanation:
      "Using a vehicle for short journeys means the engine doesn't have time to reach its normal operating temperature. When an engine is running below its normal operating temperature, it produces increased amounts of pollution. Walking and cycling don't create pollution and have health benefits as well.",
    id: 58,
    mediaType: "image",
    question:
      "What can people who live or work in towns and cities do to help reduce urban pollution levels?",
  },
  {
    answers: [
      "Take all valuables with you",
      "Park near a taxi rank",
      "Place any valuables on the floor",
      "Park near a fire station",
    ],
    category: 12,
    correctAnswer: 0,
    explanation:
      "When leaving your car, take all valuables with you if you can. Otherwise, lock them out of sight.",
    id: 59,
    mediaType: "image",
    question:
      "How can you reduce the chances of your car being broken into when leaving it unattended? ",
  },
  {
    answers: [
      "Park in an unlit area",
      "Leave the radio turned on",
      "Park near a busy junction",
      "Install a security-coded radio",
    ],
    category: 12,
    correctAnswer: 3,
    explanation:
      "A security-coded radio can deter thieves, as it's likely to be of little use when removed from the vehicle.",
    id: 60,
    mediaType: "image",
    question: "How can you help to prevent your car radio being stolen?",
  },
  {
    answers: [
      "Leave it in a well-lit area",
      "Park in a quiet side road",
      "Don’t engage the steering lock",
      "Park in a poorly lit area",
    ],
    category: 12,
    correctAnswer: 0,
    explanation:
      "Having your vehicle broken into or stolen can be very distressing and inconvenient. Avoid leaving your vehicle unattended in poorly lit areas.",
    id: 61,
    mediaType: "image",
    question:
      "How can you reduce the risk of your vehicle being broken into at night?",
  },
  {
    answers: [
      "Being a member of a vehicle breakdown organisation",
      "Registering with a Vehicle Watch scheme",
      "Passing an advanced driving test",
      "Taking car maintenance classes",
    ],
    category: 12,
    correctAnswer: 1,
    explanation:
      "The Vehicle Watch scheme helps to reduce the risk of your car being stolen. By displaying high-visibility Vehicle Watch stickers in your car, you're inviting the police to stop your vehicle if it's seen in use between midnight and 5 am.",
    id: 62,
    mediaType: "image",
    question: "What will help you to keep your car secure?",
  },
  {
    answers: [
      "In the fuel tank",
      "In the air filter",
      "On the cooling system",
      "On the exhaust system",
    ],
    category: 12,
    correctAnswer: 3,
    explanation:
      "Although carbon dioxide is still produced, a catalytic converter fitted to the exhaust system reduces the toxic and polluting gases by up to 90%.",
    id: 63,
    mediaType: "image",
    question: "On a vehicle, where would you find a catalytic converter?",
  },
  {
    answers: [
      "Reduction in journey times by about 15%",
      "Increase in fuel consumption by about 15%",
      "Reduction in fuel consumption by about 15%",
      "Increase in journey times by about 15%",
    ],
    category: 12,
    correctAnswer: 2,
    explanation:
      "By driving smoothly, you'll not only save about 15% of your fuel but will also reduce the amount of wear and tear on your vehicle and the level of pollution it produces. You're also likely to feel more relaxed and have a more pleasant journey.",
    id: 64,
    mediaType: "image",
    question: "What can you achieve if you drive smoothly?",
  },
  {
    answers: [
      "Using lower gears as often as possible",
      "Accelerating sharply in each gear",
      "Using each gear in turn",
      "Missing out some gears",
    ],
    category: 12,
    correctAnswer: 3,
    explanation:
      "Missing out intermediate gears, when appropriate, helps to reduce the amount of time spent accelerating and decelerating - the times when your vehicle uses the most fuel.",
    id: 65,
    mediaType: "image",
    question: "Which driving technique can help you save fuel?",
  },
  {
    answers: [
      "Through the legal enforcement of speed regulations",
      "By increasing the number of cars on the road",
      "Through increased fuel bills",
      "By reducing exhaust emissions",
    ],
    category: 12,
    correctAnswer: 3,
    explanation:
      "Fuel-efficient driving is all about looking and planning further ahead. This helps raise your hazard awareness and reduces the need for late and heavy braking. This will make your journeys more comfortable, as well as considerably reducing your fuel bills and reducing emissions that can damage the environment.",
    id: 66,
    mediaType: "image",
    question:
      "How can driving in a fuel-efficient manner help protect the environment?",
  },
  {
    answers: [
      "Increased fuel consumption",
      "Improved road safety",
      "Damage to the environment",
      "Increased exhaust emissions",
    ],
    category: 12,
    correctAnswer: 1,
    explanation:
      "The emphasis is on hazard awareness and planning ahead. By looking well ahead, you'll have plenty of time to deal with hazards safely and won’t need to brake sharply. This will also reduce damage to the environment.",
    id: 67,
    mediaType: "image",
    question: "What does fuel-efficient driving achieve?",
  },
  {
    answers: ["1 mm", "1.6 mm", "2 mm", "2.6 mm"],
    category: 12,
    correctAnswer: 1,
    explanation:
      "Trailers and caravans may be left in storage over the winter months, and tyres can deteriorate. It’s important to check their tread depth and also their pressures and general condition. The legal tread depth of 1.6 mm applies to the central three-quarters of a tyre's breadth, over its entire circumference.",
    id: 68,
    mediaType: "image",
    question:
      "What's the legal minimum tread depth for tyres on your trailer or caravan?",
  },
  {
    answers: [
      "When you're braking",
      "When you're coasting",
      "When you're accelerating",
      "When you're turning sharply",
    ],
    category: 12,
    correctAnswer: 2,
    explanation:
      "Accelerating uses a lot of fuel, so always try to use the accelerator smoothly. Taking your foot off the accelerator allows the momentum of the car to take you forward, especially when going downhill. This can save a considerable amount of fuel without any loss of control over the vehicle.",
    id: 69,
    mediaType: "image",
    question: "When is fuel consumption at its highest?",
  },
  {
    answers: [
      "When they're under 14 years old",
      "When they're under 1.5 metres (5 feet) in height",
      "When they're sitting in the rear seat",
      "When they're exempt for medical reasons",
    ],
    category: 12,
    correctAnswer: 3,
    explanation:
      "If you have adult passengers, it's their responsibility to wear a seat belt, but you should still remind them to use one as they get in the car. It's your responsibility to make sure that all children in your car are secured with an appropriate restraint. Exemptions are allowed for those with a medical exemption certificate.",
    id: 70,
    mediaType: "image",
    question:
      "When may a passenger travel in a car without wearing a seat belt?",
  },
  {
    answers: [
      "An adult passenger",
      "The children",
      "You, the driver",
      "Your friend",
    ],
    category: 12,
    correctAnswer: 2,
    explanation:
      "Passengers should always be secured and safe. Children should be encouraged to fasten their seat belts or approved restraints themselves from an early age, so that it becomes a matter of routine. As the driver, you must check that they're fastened securely. It's your responsibility.",
    id: 71,
    mediaType: "image",
    question:
      "You're driving a friend's children home from school. They're both under 14 years old. Who's responsible for making sure they wear a seat belt or approved child restraint where required?",
  },
  {
    answers: [
      "The clutch pedal will lock",
      "The air intake will become blocked",
      "The timing belt will slip",
      "The oil seals will leak",
    ],
    category: 12,
    correctAnswer: 3,
    explanation:
      "Too much oil will lead to increased pressure in the engine. This could damage oil seals and lead to oil leaks. Any excess oil should be drained off.",
    id: 72,
    mediaType: "image",
    question: "What's likely to happen if you put too much oil in your engine?",
  },
  {
    answers: [
      "Behind the passenger seat",
      "Using an adult seat belt",
      "Sharing a belt with an adult",
      "Between two other children",
    ],
    category: 12,
    correctAnswer: 1,
    explanation:
      "In journeys of unexpected necessity, and when a correct child restraint isn't available, the child must sit on the rear seat and use an adult seat belt. In a collision, unrestrained objects and people can cause serious injury or even death.",
    id: 73,
    mediaType: "image",
    question:
      "You have to make an unexpected journey. You're carrying a five-year-old child on the back seat of your car. They're under 1.35 metres (4 feet 5 inches) tall. How should you seat them if a correct child restraint isn't available?",
  },
  {
    answers: [
      "They must use an adult seat belt",
      "They must be able to fasten their own seat belt ",
      "They must use a suitable child restraint",
      "They must be able to see clearly out of the front window",
    ],
    category: 12,
    correctAnswer: 2,
    explanation:
      "As the driver, it's your responsibility to make sure that children are secure and safe in your vehicle. Make yourself familiar with the rules. When children are carried on the back seat, there are a few very exceptional cases when an adult seat belt can be used instead of a correct child restraint. ",
    id: 74,
    mediaType: "image",
    question:
      "You're carrying an 11-year-old child on the front seat of your car. They're under 1.35 metres (4 feet 5 inches) tall. What seat belt security must be in place?",
  },
  {
    answers: [
      "Switch off the engine",
      "Apply the steering lock",
      "Switch off the radio",
      "Use your headlights",
    ],
    category: 12,
    correctAnswer: 0,
    explanation:
      "If your vehicle is stationary and is likely to remain so for some time, you must switch off the engine unless you're stationary in traffic or diagnosing a fault.",
    id: 75,
    mediaType: "image",
    question:
      "You're stopped at the side of the road. What must you do if you'll be waiting there for some time?",
  },
  {
    answers: [
      "Deactivate the airbag",
      "Turn the seat to face sideways",
      "Ask a passenger to hold the baby",
      "Put the child in an adult seat belt",
    ],
    category: 12,
    correctAnswer: 0,
    explanation:
      "It's illegal to fit a rear-facing baby seat into a passenger seat protected by an active frontal airbag. If the airbag activates, it could cause serious injury or even death to the child. You must secure it in a different seat or deactivate the relevant airbag. Follow the manufacturer's advice when fitting a baby seat.",
    id: 76,
    mediaType: "image",
    question:
      "You want to put a rear-facing baby seat on the front passenger seat. What must you do if the passenger seat is protected by a frontal airbag?",
  },
  {
    answers: [
      "If you'll be parking for less than five minutes",
      "If the battery keeps going flat",
      "When parked in a 20 mph zone",
      "Never if you're away from the vehicle",
    ],
    category: 12,
    correctAnswer: 3,
    explanation:
      "When you leave your vehicle parked on a road, switch off the engine and secure the vehicle. Make sure no valuables are visible, shut all the windows, lock the vehicle, and set the alarm if the vehicle has one.",
    id: 77,
    mediaType: "image",
    question:
      "You're leaving your vehicle parked on a road and unattended. When may you leave the engine running?",
  },
  {
    answers: ["Two times", "Three times", "Five times", "Ten times"],
    category: 11,
    correctAnswer: 3,
    explanation:
      "Tyre grip is greatly reduced in icy conditions. For this reason, you need to allow up to ten times the stopping distance you would allow on dry roads.",
    id: 1,
    mediaType: "image",
    question: "How much can stopping distances increase in icy conditions?",
  },
  {
    answers: [
      "Using the brakes",
      "Moving off on a hill",
      "Turning into a narrow road",
      "Passing pedal cyclists",
    ],
    category: 11,
    correctAnswer: 3,
    explanation:
      "Always give cyclists plenty of room when overtaking them. You need to give them even more room when it’s windy. A sudden gust could easily blow them off course and into your path.",
    id: 2,
    mediaType: "image",
    question:
      "What requires extra care when you're driving or riding in windy conditions?",
  },
  {
    answers: [
      "To improve your view of the road",
      "To overcome the effect of the road’s slope",
      "To let faster traffic from behind overtake",
      "To be positioned safely if you skid",
    ],
    category: 11,
    content: require("./../assets/qimage/AB2624.jpg"),
    correctAnswer: 0,
    explanation:
      "Keeping to the left as you approach right-hand bends will give you an earlier view around the bend and enable you to see any hazards sooner. It also reduces the risk of collision with any oncoming vehicle that may have drifted over the centre line while taking the bend.",
    id: 3,
    mediaType: "image",
    question:
      "Why should you keep well to the left as you approach a right-hand bend?",
  },
  {
    answers: [
      "Accelerate and keep to a high speed for a short time",
      "Go slowly while gently applying the brakes",
      "Avoid using the brakes at all for a few miles",
      "Stop for at least an hour to allow them time to dry",
    ],
    category: 11,
    correctAnswer: 1,
    explanation:
      "Water on the brakes will act as a lubricant, causing them to work less efficiently. Using the brakes lightly as you go along will quickly dry them out. ",
    id: 4,
    mediaType: "image",
    question:
      "You’ve just gone through flood water. What should you do to make sure your brakes are working properly?",
  },
  {
    answers: [
      "The suspension",
      "The exhaust emissions",
      "The fuel consumption",
      "The tyre grip",
    ],
    category: 11,
    correctAnswer: 3,
    explanation:
      "If the road surface becomes very hot, it can soften. Tyres are unable to grip a soft surface as well as they can a firm dry one. Take care when cornering and braking.",
    id: 5,
    mediaType: "image",
    question:
      "What will be affected if the road surface becomes soft in very hot weather?",
  },
  {
    answers: [
      "On a narrow country lane",
      "On an open stretch of road",
      "On a busy stretch of road",
      "On a long, straight road",
    ],
    category: 11,
    correctAnswer: 1,
    explanation:
      "In windy conditions, care must be taken on exposed roads. A strong gust of wind can blow you off course. Watch out for other road users who are particularly likely to be affected, such as cyclists, motorcyclists, high-sided lorries and vehicles towing trailers.",
    id: 6,
    mediaType: "image",
    question: "Where is your vehicle most likely to be affected by side winds?",
  },
  {
    answers: [
      "Flash your headlights as a warning",
      "Try to overtake safely as soon as you can",
      "Drop back to regain a safe distance",
      "Stay close to the other vehicle until it moves on",
    ],
    category: 11,
    correctAnswer: 2,
    explanation:
      "Wet weather will affect the time it takes for you to stop and can affect your control. Your speed should allow you to stop safely and in good time. If another vehicle pulls into the gap you’ve allowed, ease back until you’ve regained your stopping distance. ",
    id: 7,
    mediaType: "image",
    question:
      "You're following a vehicle on a wet road. You stay a safe distance behind it. What should you do if a driver overtakes you and pulls into the gap you've left?",
  },
  {
    answers: [
      "Increase your distance from the vehicle in front",
      "Brake sharply",
      "Switch on your hazard warning lights",
      "Move onto the hard shoulder and stop",
    ],
    category: 11,
    correctAnswer: 0,
    explanation:
      "On busy roads, traffic may still travel at high speeds. Don’t follow the vehicle in front too closely. If a driver behind seems to be ‘pushing’ you, gradually increase your distance from the vehicle in front by slowing down gently. This will give you more space in front if you have to brake, and will reduce the risk of a collision involving several vehicles.",
    id: 8,
    mediaType: "image",
    question:
      "You're travelling on the motorway. How can you lower the risk of a collision when the vehicle behind is following too closely?",
  },
  {
    answers: [
      "Keep close to the vehicle in front",
      "Use main beam instead of dipped headlights",
      "Keep up with the faster vehicles",
      "Keep a safe distance from the vehicle in front",
    ],
    category: 11,
    correctAnswer: 3,
    explanation:
      "When it’s foggy, use your headlights on dipped beam. This will help you see and be seen by other road users. If visibility is seriously reduced, consider using front and rear fog lights if you have them. Keep to a sensible speed and don’t follow the vehicle in front too closely. If the road is wet and slippery, you’ll need to allow twice the normal stopping distance.",
    id: 9,
    mediaType: "image",
    question:
      "You're following other vehicles in fog. You have your headlights on dipped beam. What else can you do to reduce the chances of being in a collision?",
  },
  {
    answers: [
      "Choose an appropriate lane in good time",
      "Switch lanes to make better progress",
      "Increase speed to get through the contraflow more quickly",
      "Follow other motorists closely to avoid long queues",
    ],
    category: 11,
    correctAnswer: 0,
    explanation:
      "In a contraflow system, you'll be travelling close to oncoming traffic and sometimes in narrow lanes. You should get into the correct lane in good time, obey any temporary speed-limit signs and keep a safe separation distance from the vehicle ahead.",
    id: 10,
    mediaType: "image",
    question: "What should you do when you're using a contraflow system?",
  },
  {
    answers: [
      "Drive at a slow speed in the highest gear possible",
      "Use the parking brake if the wheels start to slip",
      "Brake gently and repeatedly",
      "Drive in a low gear at all times",
    ],
    category: 11,
    correctAnswer: 0,
    explanation:
      "If you’re travelling on an icy road, extra caution will be required to avoid loss of control. Keeping your speed down and using the highest gear possible will reduce the risk of the tyres losing their grip on this slippery surface.",
    id: 11,
    mediaType: "image",
    question: "How can you avoid wheelspin when you're driving on an icy road?",
  },
  {
    answers: ["The weather", "The driver", "The vehicle", "The road"],
    category: 11,
    correctAnswer: 1,
    explanation:
      "Skidding is usually caused by driver error. You should always adjust your driving to take account of the road and weather conditions.",
    id: 12,
    mediaType: "image",
    question: "What's the main cause of skidding?",
  },
  {
    answers: [
      "Coast into the bend",
      "Apply your parking brake",
      "Firmly use your footbrake",
      "Slow down gently",
    ],
    category: 11,
    correctAnswer: 3,
    explanation:
      "Harsh use of the accelerator, brakes or steering is likely to lead to skidding, especially on slippery surfaces. Avoid steering and braking at the same time. In icy conditions, it’s very important that you constantly assess what’s ahead so that you can take appropriate action in plenty of time.",
    id: 13,
    mediaType: "image",
    question:
      "You're driving in freezing conditions. What should you do as you approach a sharp bend?",
  },
  {
    answers: ["The aerial", "The windows", "The bumper", "The boot "],
    category: 11,
    correctAnswer: 1,
    explanation:
      "Driving in bad weather increases your risk of having a collision. If you absolutely have to travel, clear your lights, mirrors, number plates and windows of any snow or ice, so that you can see and be seen.",
    id: 14,
    mediaType: "image",
    question:
      "You're about to start a journey in freezing weather. What part of your vehicle should you clear of ice and snow?",
  },
  {
    answers: [
      "Using the car's lowest gear ",
      "Using a higher gear than normal",
      "Using a high engine speed",
      "Using the parking brake and footbrake together",
    ],
    category: 11,
    correctAnswer: 1,
    explanation:
      "If you attempt to move off in a low gear, there'll be more torque (turning force) at the driven wheels than if you use a higher gear. More torque makes it easier for the tyres to lose grip and so spin the wheels.",
    id: 15,
    mediaType: "image",
    question: "What will help you to move off on a snowy surface?",
  },
  {
    answers: [
      "Brake firmly and quickly",
      "Be ready to steer sharply",
      "Use sidelights only",
      "Brake gently in plenty of time",
    ],
    category: 11,
    correctAnswer: 3,
    explanation:
      "In snowy conditions, be careful with the steering, accelerator and brakes. Braking sharply while you're driving on snow is likely to make your car skid.",
    id: 16,
    mediaType: "image",
    question: "What should you do when you're driving in snowy conditions?",
  },
  {
    answers: [
      "Improved grip on the road",
      "Lower fuel consumption",
      "Shorter stopping distances",
      "Improved passenger comfort",
    ],
    category: 11,
    correctAnswer: 0,
    explanation:
      "By driving all four wheels, the vehicle has maximum grip on the road. This grip is especially helpful when travelling on slippery or uneven surfaces. However, having four-wheel drive doesn't replace the skills you need to drive safely.",
    id: 17,
    mediaType: "image",
    question: "What's the main benefit of driving a four-wheel-drive vehicle?",
  },
  {
    answers: [
      "Select a high gear and use the brakes carefully",
      "Select a high gear and use the brakes firmly",
      "Select a low gear and use the brakes carefully",
      "Select a low gear and avoid using the brakes",
    ],
    category: 11,
    correctAnswer: 2,
    explanation:
      "When driving down a steep hill, gravity will cause your vehicle to speed up. This will make it more difficult for you to stop. To help keep your vehicle's speed under control, select a lower gear to give you more engine braking and make careful use of the brakes.",
    id: 18,
    mediaType: "image",
    question:
      "You're about to go down a steep hill. What should you do to control the speed of your vehicle?",
  },
  {
    answers: [
      "Turn the steering wheel towards the kerb",
      "Park close to the bumper of another car",
      "Park with two wheels on the kerb",
      "Turn the steering wheel away from the kerb",
    ],
    category: 11,
    correctAnswer: 0,
    explanation:
      "Turning the wheels towards the kerb will allow them to act as a chock, preventing any forward movement of the vehicle. It will also help to leave your car in gear, or select ‘Park’ if you have an automatic.",
    id: 19,
    mediaType: "image",
    question: "What should you do when you park a car facing downhill?",
  },
  {
    answers: [
      "Move across to the left-hand side of the road ",
      "Wait for any pedestrians to cross ",
      "Check your mirror and slow down ",
      "Stop and check both pavements",
    ],
    category: 11,
    content: require("./../assets/qimage/BB1076n1.jpg"),
    correctAnswer: 2,
    explanation:
      "Many towns have road humps as part of traffic-calming measures, designed to slow down traffic. Reduce your speed when driving over them. If you go too fast, you could lose control or damage your car. Look out for pedestrians or cyclists while you're driving in these areas.",
    id: 20,
    mediaType: "image",
    question:
      "You're driving in a built-up area that has traffic-calming measures. What should you do when you approach a road hump?",
  },
  {
    answers: ["Dry", "Loose", "Firm", "Smooth"],
    category: 11,
    correctAnswer: 1,
    explanation:
      "Poor contact with the road surface could cause one or more of the tyres to lose grip on the road. This is more likely to happen when braking in poor weather conditions and when the road has a loose, slippery or uneven surface.",
    id: 21,
    mediaType: "image",
    question:
      "On what type of road surface may anti-lock brakes be ineffective?",
  },
  {
    answers: [
      "Slowly and gently",
      "Slowly but firmly",
      "Rapidly and gently",
      "Rapidly and firmly",
    ],
    category: 11,
    correctAnswer: 3,
    explanation:
      "You may have to stop in an emergency due to a misjudgement by another driver or a hazard arising suddenly, such as a child running out into the road. If your vehicle has anti-lock brakes, you should apply the brakes immediately and keep them firmly applied until you stop.",
    id: 22,
    mediaType: "image",
    question:
      "You're driving a vehicle that has anti-lock brakes. How should you apply the footbrake when you need to stop in an emergency?",
  },
  {
    answers: [
      "Check your tyre pressures",
      "Switch on your hazard warning lights",
      "Accelerate briskly",
      "Test your brakes",
    ],
    category: 11,
    content: require("./../assets/qimage/BB1351.jpg"),
    correctAnswer: 3,
    explanation:
      "If your brakes have been thoroughly soaked, you should check that they're working properly before you build up speed again. Before you do this, remember to check your mirrors and consider what's behind you.",
    id: 23,
    mediaType: "image",
    question:
      "You're driving along a country road. You see this sign. What should you do after dealing safely with the hazard?",
  },
  {
    answers: [
      "There's less wind noise",
      "There's less tyre noise",
      "There's less transmission noise",
      "There's less engine noise",
    ],
    category: 11,
    correctAnswer: 1,
    explanation:
      "Drive extremely carefully when the roads are icy. When travelling on ice, tyres make virtually no noise and the steering feels light and unresponsive.nIn icy conditions, be very gentle when braking, accelerating and steering.",
    id: 24,
    mediaType: "image",
    question: "What would suggest you're driving on an icy road?",
  },
  {
    answers: [
      "The engine will stall",
      "The steering will feel very heavy",
      "The engine noise will increase",
      "The steering will feel very light",
    ],
    category: 11,
    correctAnswer: 3,
    explanation:
      "If you drive at speed in very wet conditions, your steering may suddenly feel lighter than usual. This means that the tyres have lifted off the surface of the road and are floating on the surface of the water. This is known as aquaplaning. Reduce speed but don’t brake until your steering returns to normal.",
    id: 25,
    mediaType: "image",
    question:
      "You're driving along a wet road. How can you tell if your vehicle’s tyres are losing their grip on the surface?",
  },
  {
    answers: ["In the rain", "In fog", "At night", "In strong winds"],
    category: 11,
    correctAnswer: 0,
    explanation:
      "Extra care should be taken in wet weather. On wet roads, your stopping distance could be double that in dry conditions. ",
    id: 26,
    mediaType: "image",
    question:
      "In which conditions will your overall stopping distance increase?",
  },
  {
    answers: [
      "A two-second time gap",
      "One car length",
      "Two metres (6 feet 6 inches)",
      "Two car lengths",
    ],
    category: 11,
    correctAnswer: 0,
    explanation:
      "One way of checking there's a safe distance between you and the vehicle in front is to use the two-second rule. To check for a two-second time gap, choose a stationary object ahead, such as a bridge or road sign. When the car in front passes the object, say 'Only a fool breaks the two-second rule'. If you reach the object before you finish saying the phrase, you're too close and need to increase the gap.",
    id: 27,
    mediaType: "image",
    question:
      "You're driving on an open road in dry weather. What distance should you keep from the vehicle in front?",
  },
  {
    answers: [
      "By changing to a lower gear",
      "By selecting reverse gear",
      "By changing to a higher gear",
      "By selecting neutral gear",
    ],
    category: 11,
    correctAnswer: 0,
    explanation:
      "When driving on downhill stretches of road, selecting a lower gear gives increased engine braking. This will prevent excessive use of the brakes, which become less effective if they overheat.",
    id: 28,
    mediaType: "image",
    question: "How can you use your vehicle's engine as a brake?",
  },
  {
    answers: [
      "Keep pumping the footbrake to prevent skidding",
      "Brake normally but grip the steering wheel tightly",
      "Brake promptly and firmly until you've stopped",
      "Apply the parking brake to reduce the stopping distance",
    ],
    category: 11,
    correctAnswer: 2,
    explanation:
      "If you have ABS and need to stop in an emergency, keep your foot firmly on the brake pedal until the vehicle has stopped. When the ABS operates, you may hear a grating sound and feel vibration through the brake pedal. This is normal and you should maintain pressure on the brake pedal until the vehicle stops.",
    id: 29,
    mediaType: "image",
    question:
      "How should you use anti-lock brakes when you need to stop in an emergency?",
  },
  {
    answers: [
      "Hazard warning lights",
      "Dipped headlights",
      "Rear fog lights",
      "Sidelights",
    ],
    category: 11,
    correctAnswer: 1,
    explanation:
      "When surface spray reduces visibility, switch on your headlights on dipped beam. This will help other road users to see you.",
    id: 30,
    mediaType: "image",
    question:
      "What lights should you use when you're driving on a wet motorway and vehicles are throwing up surface spray?",
  },
  {
    answers: [
      "Improvement in control",
      "Easier steering",
      "Reduction in control",
      "Increased fuel consumption",
    ],
    category: 11,
    correctAnswer: 2,
    explanation:
      "Coasting is the term used when the clutch is held down, or the gear lever is in neutral, and the vehicle is allowed to freewheel. This reduces the driver's control of the vehicle. When you coast, the engine can't drive the wheels to stabilise you through a corner, or give the assistance of engine braking to help slow the car.",
    id: 31,
    mediaType: "image",
    question:
      "What can result when you travel for long distances in neutral (known as coasting)?",
  },
  {
    answers: [
      "Wear a hi-visibility jacket",
      "Have a caffeinated drink",
      "Allow more time",
      "Reduce your tyre pressures",
    ],
    category: 11,
    correctAnswer: 2,
    explanation:
      "Don’t venture out if your journey isn’t necessary. If you have to travel and someone is expecting you at the other end, let them know that you’ll be taking longer than usual for your journey. This will stop them worrying if you don’t turn up on time and will also take the pressure off you, so you don’t feel you have to rush.",
    id: 32,
    mediaType: "image",
    question: "What should you do before starting a journey in foggy weather?",
  },
  {
    answers: [
      "Pass closely",
      "Pass very slowly",
      "Pass widely",
      "Pass immediately",
    ],
    category: 11,
    correctAnswer: 2,
    explanation:
      "In strong winds, riders of two-wheeled vehicles are particularly vulnerable. When you overtake them, allow plenty of room. Check to the left as you pass to make sure they're safe.",
    id: 33,
    mediaType: "image",
    question:
      "What should you do when you're overtaking a motorcyclist on a windy day?",
  },
  {
    answers: [
      "The ESC system has activated",
      "The ESC system has a fault",
      "The ESC system is running a routine test",
      "The ESC system is switched off",
    ],
    category: 11,
    content: require("./../assets/qimage/BB4417.jpg"),
    correctAnswer: 0,
    explanation:
      "ESC is a computer controlled technology that detects reduced traction and automatically makes corrective adjustments to prevent loss of control. The ESC lamp comes on to alert the driver that the system has activated and the car is approaching its handling limits. It’s a powerful driver aid but it cannot save a car once its traction limits have been exceeded.",
    id: 34,
    mediaType: "image",
    question:
      "What does it mean if the Electronic Stability Control (ESC) indicator lamp lights up while you’re driving?",
  },
  {
    answers: [
      "On a motorway sign",
      "On a railway bridge",
      "On a large goods vehicle",
      "On a diversion sign",
    ],
    category: 4,
    content: require("./../assets/qimage/AB2085.jpg"),
    correctAnswer: 2,
    explanation:
      "These markers must be fitted to vehicles over 13 metres long, large goods vehicles, and rubbish skips placed in the road. They're reflective to make them easier to see in the dark.",
    id: 1,
    mediaType: "image",
    question: "Where would you expect to see these markers?",
  },
  {
    answers: [
      "Vehicles turning right",
      "Vehicles doing U-turns",
      "The cyclist crossing the road",
      "Parked cars around the corner",
    ],
    category: 4,
    content: require("./../assets/qimage/AB2087.jpg"),
    correctAnswer: 2,
    explanation:
      "Look at the picture carefully and try to imagine you're there. The cyclist in this picture appears to be trying to cross the road. You must be able to deal with the unexpected, especially when you're approaching a hazardous junction. Look well ahead to give yourself time to deal with any hazards.",
    id: 2,
    mediaType: "image",
    question: "What's the main hazard shown in this picture?",
  },
  {
    answers: [
      "The parked car (arrowed A)",
      "The pedestrian waiting to cross (arrowed B)",
      "The moving car (arrowed C)",
      "The car turning (arrowed D)",
    ],
    category: 4,
    content: require("./../assets/qimage/AB2088.jpg"),
    correctAnswer: 0,
    explanation:
      "The car arrowed A is parked within the area marked by zigzag lines at the pedestrian crossing. Parking here is illegal. It alson• blocks the view for pedestrians wishing to cross the roadn• restricts the view of the crossing for approaching traffic.",
    id: 3,
    mediaType: "image",
    question: "Which road user has caused a hazard?",
  },
  {
    answers: [
      "Continue at the same speed",
      "Sound the horn",
      "Drive through quickly",
      "Slow down and get ready to stop",
    ],
    category: 4,
    content: require("./../assets/qimage/AB2089.jpg"),
    correctAnswer: 3,
    explanation:
      "Look well ahead to see whether any hazards are developing. This will give you more time to deal with them in the correct way. The man in the picture is clearly intending to cross the road. You should be travelling at a speed that allows you to check your mirror, slow down and stop in good time. You shouldn't have to brake harshly.",
    id: 4,
    mediaType: "image",
    question: "What should the driver of the car approaching the crossing do?",
  },
  {
    answers: [
      "The uneven road surface",
      "Traffic following behind",
      "Doors opening on parked cars",
      "Empty parking spaces",
    ],
    category: 4,
    content: require("./../assets/qimage/AB2091n1.jpg"),
    correctAnswer: 2,
    explanation:
      "When passing parked cars, there's a risk that a driver or passenger may not check before opening the door into the road. A defensive driver will drive slowly and be looking for people who may be about to get out of their car.",
    id: 5,
    mediaType: "image",
    question: "What should the driver of the grey car be especially aware of?",
  },
  {
    answers: [
      "The road will go steeply uphill",
      "The road will go steeply downhill",
      "The road will bend sharply to the left",
      "The road will bend sharply to the right ",
    ],
    category: 4,
    content: require("./../assets/qimage/AB2098.jpg"),
    correctAnswer: 2,
    explanation:
      "This sign indicates that the road will bend sharply to the left. Slow down in plenty of time and select the correct gear before you start to turn. Braking hard and late, while also sharply changing direction, is likely to cause a skid.",
    id: 6,
    mediaType: "image",
    question: "What should you expect if you see this sign ahead?",
  },
  {
    answers: [
      "Try to overtake before the cyclist gets to the junction",
      "Flash your headlights at the cyclist",
      "Slow down and allow the cyclist to turn",
      "Rev your engine so the cyclist knows you're following behind",
    ],
    category: 4,
    content: require("./../assets/qimage/AB2099n1.jpg"),
    correctAnswer: 2,
    explanation:
      "Keep well back and give the cyclist time and room to turn safely. Don’t intimidate them by getting too close or trying to squeeze past.",
    id: 7,
    mediaType: "image",
    question: "What should you do as you approach this cyclist? ",
  },
  {
    answers: [
      "The road surface is poor",
      "The footpath is narrow",
      "The kerbs are high",
      "The view is restricted",
    ],
    category: 4,
    content: require("./../assets/qimage/AB2100n1.jpg"),
    correctAnswer: 3,
    explanation:
      "You may have to pull forward slowly until you can see up and down the road. Be aware that the traffic approaching the junction can’t see you either. If you don’t know that it’s clear, don’t go.",
    id: 8,
    mediaType: "image",
    question: "Why must you take great care when emerging from this junction?",
  },
  {
    answers: ["Bicycles", "Buses", "Motorcycles", "Cars"],
    category: 4,
    content: require("./../assets/qimage/AB2102n1.jpg"),
    correctAnswer: 1,
    explanation:
      "A bus or high-sided lorry will have to take a position in the centre of the road to clear the bridge. There's normally a sign to show this. Look well ahead, past the bridge and be ready to stop and give way to large oncoming vehicles.",
    id: 9,
    mediaType: "image",
    question:
      "Which type of vehicle should you be ready to give way to as you approach this bridge? ",
  },
  {
    answers: ["Lorry", "Bicycle", "Car", "Motorcycle"],
    category: 4,
    content: require("./../assets/qimage/AB2103n1.jpg"),
    correctAnswer: 0,
    explanation:
      "The highest point of the bridge is in the centre, so a large vehicle might have to move to the centre of the road to have enough room to pass safely under the bridge. ",
    id: 10,
    mediaType: "image",
    question:
      "What type of vehicle could you expect to meet in the middle of the road?",
  },
  {
    answers: [
      "Stop behind the line, then edge forward to see clearly",
      "Stop beyond the line, at a point where you can see clearly",
      "Stop only if there's traffic on the main road",
      "Stop only if you're turning right",
    ],
    category: 4,
    content: require("./../assets/qimage/AB2105n1.jpg"),
    correctAnswer: 0,
    explanation:
      "The ‘stop’ sign has been put here because the view into the main road is poor. You must stop because it won't be possible to take proper observation while you're moving.",
    id: 11,
    mediaType: "image",
    question: "What must you do at this junction?",
  },
  {
    answers: [
      "Ignore the error and stay calm",
      "Flash your lights to show your annoyance",
      "Sound your horn to show your annoyance",
      "Overtake as soon as possible",
    ],
    category: 4,
    correctAnswer: 0,
    explanation:
      "Be tolerant if a vehicle emerges and you have to brake quickly. Anyone can make a mistake, so don’t react aggressively. Be alert where there are side roads and be especially careful where there are parked vehicles, because these can make it difficult for emerging drivers to see you. ",
    id: 12,
    mediaType: "image",
    question:
      "What should you do if a driver pulls out of a side road in front of you, causing you to brake hard?",
  },
  {
    answers: [
      "Older drivers are exempt from wearing seat belts",
      "Older drivers can only drive cars that have automatic gearboxes",
      "Older drivers reactions may be slower than other drivers",
      "Older drivers take more risks than other drivers",
    ],
    category: 4,
    correctAnswer: 2,
    explanation:
      "As people age, their reaction time gets slower. The rate of decline varies from person to person but you can expect them to take longer to react to a hazard and they may be hesitant in some situations – for example, at a junction.",
    id: 13,
    mediaType: "image",
    question: "Why should you make allowances for older drivers?",
  },
  {
    answers: [
      "Yes, you should plan to stop every half an hour",
      "Yes, regular stops help concentration",
      "No, you’ll be less tired if you get there as soon as possible",
      "No, only fuel stops will be needed",
    ],
    category: 4,
    correctAnswer: 1,
    explanation:
      "Try to plan your journey so that you can take rest stops. It’s recommended that you take a break of at least 15 minutes after every two hours of driving or riding. This should help to maintain your concentration.",
    id: 14,
    mediaType: "image",
    question:
      "Do you need to plan rest stops when you’re planning a long journey?",
  },
  {
    answers: [
      "Go over it quickly",
      "Go over it carefully",
      "Stop before the barrier",
      "Switch on your hazard warning lights",
    ],
    category: 4,
    content: require("./../assets/qimage/AB2596n1.jpg"),
    correctAnswer: 2,
    explanation:
      "At level crossings, the red lights flash before and while the barrier is down. At most crossings, an amber light will precede the red lights. You must stop behind the white line unless you've already crossed it when the amber light comes on. Don't be tempted to zigzag around half-barriers. ",
    id: 15,
    mediaType: "image",
    question:
      "What should you do if the red lights start flashing as you approach a level crossing?",
  },
  {
    answers: [
      "Brake and stop only for large vehicles",
      "Brake sharply to a stop before looking",
      "Be prepared to brake sharply to a stop",
      "Be prepared to stop for any traffic",
    ],
    category: 4,
    correctAnswer: 3,
    explanation:
      "When approaching a junction where the traffic lights have failed, you should proceed with caution. Treat the situation as an unmarked junction and be prepared to stop. ",
    id: 16,
    mediaType: "image",
    question:
      "You're approaching a crossroads. What should you do if the traffic lights have failed?",
  },
  {
    answers: [
      "Wave towards the pedestrians who are waiting to cross",
      "Wait for the pedestrian in the road to cross",
      "Quickly drive behind the pedestrian in the road",
      "Tell the pedestrian in the road she shouldn't have crossed",
    ],
    category: 4,
    content: require("./../assets/qimage/AB2657.jpg"),
    correctAnswer: 1,
    explanation:
      "Some people might take a long time to cross the road. They may be older or have a disability. Be patient and don't hurry them by showing your impatience. If pedestrians are standing at the side of the road, don't signal or wave them to cross. Other road users might not have seen your signal and this could lead the pedestrians into a hazardous situation.",
    id: 17,
    mediaType: "image",
    question: "What should the driver of the red car (arrowed) do?",
  },
  {
    answers: [
      "Overtake after checking your mirrors and signalling",
      "Only consider overtaking when you're past the junction",
      "Accelerate quickly to overtake before reaching the junction",
      "Slow down and prepare to overtake on the left",
    ],
    category: 4,
    correctAnswer: 1,
    explanation:
      "You should never overtake as you approach a junction. If a vehicle emerged from the junction while you were overtaking, a dangerous situation could develop very quickly.",
    id: 18,
    mediaType: "image",
    question:
      "You're following a slower-moving vehicle. What should you do if there's a junction just ahead on the right?",
  },
  {
    answers: [
      "Move out to the centre of the road before going through",
      "Find another route; this one is only for high vehicles",
      "Be prepared to give way to large vehicles in the middle of the road",
      "Move across to the right-hand side before going through",
    ],
    category: 4,
    content: require("./../assets/qimage/AB2659.jpg"),
    correctAnswer: 2,
    explanation:
      "Oncoming large vehicles may need to move to the middle of the road to pass safely under the bridge. There won't be enough room for you to continue, so you should be ready to stop and wait.",
    id: 19,
    mediaType: "image",
    question: "What should you do as you approach this overhead bridge?",
  },
  {
    answers: [
      "They give a wider field of vision",
      "They totally cover blind spots",
      "They make it easier to judge the speed of the traffic behind",
      "They make the traffic behind look bigger",
    ],
    category: 4,
    correctAnswer: 0,
    explanation:
      "Although a convex mirror gives a wide view of the scene behind, you should be aware that it won't show you everything behind or to the side of your vehicle. Before you move off, you'll need to look over your shoulder to check for anything not visible in the mirrors.",
    id: 20,
    mediaType: "image",
    question: "Why are vehicle mirrors often slightly curved (convex)?",
  },
  {
    answers: [
      "Cautiously approach the lorry, then overtake on either side",
      "Follow the lorry until you can leave the motorway",
      "Use the right-hand lane and overtake the lorry normally",
      "Approach with care and overtake on the left of the lorry",
    ],
    category: 4,
    content: require("./../assets/qimage/AB2701.jpg"),
    correctAnswer: 3,
    explanation:
      "This sign is found on slow-moving or stationary works vehicles. If you wish to overtake it, do so on the left, as indicated. Be aware that there might be people working in the area.",
    id: 21,
    mediaType: "image",
    question:
      "You're on a three-lane motorway. How should you overtake a slow-moving lorry in the middle lane if it's showing this sign?",
  },
  {
    answers: [
      "Flash your lights to alert the driver",
      "Sound your horn before overtaking",
      "Overtake on the left if there's room",
      "Stay behind and don't overtake",
    ],
    category: 4,
    correctAnswer: 3,
    explanation:
      "Be cautious and don’t attempt to overtake. The driver may be unsure of the location of a junction and may turn suddenly. ",
    id: 22,
    mediaType: "image",
    question:
      "What should you do if you think the driver of the vehicle in front has forgotten to cancel their right indicator?",
  },
  {
    answers: [
      "Glare from the sun may affect the driver's vision",
      "The black car may stop suddenly",
      "The bus may move out into the road",
      "Oncoming vehicles will assume the driver is turning right",
    ],
    category: 4,
    content: require("./../assets/qimage/AB2717.jpg"),
    correctAnswer: 2,
    explanation:
      "If you can do so safely, give way to buses signalling to move off at bus stops. Try to anticipate the actions of other road users around you. The driver of the red car should be prepared for the bus pulling out. As you approach a bus stop, look to see how many passengers are waiting to board. If the last one has just got on, the bus is likely to move off.",
    id: 23,
    mediaType: "image",
    question:
      "What's the main hazard the driver of the red car (arrowed) should be aware of?",
  },
  {
    answers: [
      "A broken-down vehicle",
      "A school bus",
      "An ice-cream van",
      "A private ambulance",
    ],
    category: 4,
    content: require("./../assets/qimage/AB2718.jpg"),
    correctAnswer: 1,
    explanation:
      "Buses which carry children to and from school may stop at places other than scheduled bus stops. Be aware that they might pull over at any time to allow children to get on or off. This will normally be when traffic is heavy during rush hour.",
    id: 24,
    mediaType: "image",
    question: "What type of vehicle displays this yellow sign?",
  },
  {
    answers: [
      "Glare from the sun",
      "Lack of road markings",
      "Children running out between vehicles",
      "Large goods vehicles",
    ],
    category: 4,
    content: require("./../assets/qimage/AB2719n1.jpg"),
    correctAnswer: 2,
    explanation:
      "On roads where there are many parked vehicles, you might not be able to see children between parked cars and they may run out into the road without looking.",
    id: 25,
    mediaType: "image",
    question:
      "What hazard should you be aware of when travelling along this street?",
  },
  {
    answers: [
      "The cyclist may move to the left and dismount",
      "The cyclist may swerve into the road",
      "The cyclist may get off and push their bicycle",
      "The cyclist may wish to turn right at the end of the road",
    ],
    category: 4,
    content: require("./../assets/qimage/AB2720n1.jpg"),
    correctAnswer: 1,
    explanation:
      "When following a cyclist, be aware that they have to deal with the hazards around them. They may wobble or swerve to avoid a pothole in the road or see a potential hazard and change direction suddenly. Don’t follow them too closely or rev your engine impatiently. ",
    id: 26,
    mediaType: "image",
    question:
      "What's the main hazard you should be aware of when following this cyclist?",
  },
  {
    answers: [
      "Stop and take a break",
      "Shout abusive language",
      "Gesture to them with your hand",
      "Follow them, flashing your headlights",
    ],
    category: 4,
    correctAnswer: 0,
    explanation:
      "If you feel yourself becoming tense or upset, stop in a safe place and take a break. Tiredness can make things worse and may cause a different reaction to upsetting situations.",
    id: 27,
    mediaType: "image",
    question:
      "A driver’s behaviour has upset you. How can you get over this incident safely?",
  },
  {
    answers: [
      "At a reduced speed",
      "At the speed limit ",
      "In the centre of the road",
      "With headlights on dipped beam",
    ],
    category: 4,
    content: require("./../assets/qimage/AB2723n1.jpg"),
    correctAnswer: 0,
    explanation:
      "Traffic-calming measures such as road humps, chicanes and narrowings are intended to slow traffic down to protect vulnerable road users. Don't speed up until you reach the end of the traffic-calmed zone.",
    id: 28,
    mediaType: "image",
    question:
      "How should you drive or ride in areas with traffic-calming measures?",
  },
  {
    answers: [
      "Because of the level crossing",
      "Because it’s hard to see to the right",
      "Because of approaching traffic",
      "Because of animals crossing",
    ],
    category: 4,
    content: require("./../assets/qimage/AB2724.jpg"),
    correctAnswer: 0,
    explanation:
      "You should be slowing down and selecting the correct gear in case you have to stop at the level crossing. Look for the signals and be prepared to stop if necessary.",
    id: 29,
    mediaType: "image",
    question: "Why should you slow down as you approach this hazard?",
  },
  {
    answers: [
      "To restrict the flow of traffic",
      "To warn of oncoming traffic",
      "To help you select the correct lane in good time",
      "To prevent you from changing lanes",
    ],
    category: 4,
    correctAnswer: 2,
    explanation:
      "The names of towns and cities may be painted on the road at busy junctions and complex road systems. They guide you into the correct lane in good time, allowing traffic to flow more freely.",
    id: 30,
    mediaType: "image",
    question: "Why are place names painted on the road surface?",
  },
  {
    answers: [
      "Traffic in both directions can use the middle lane to overtake",
      "Traffic can travel faster in poor weather conditions",
      "Traffic can overtake on the left",
      "Traffic uses the middle lane for emergencies only",
    ],
    category: 4,
    correctAnswer: 0,
    explanation:
      "If you intend to overtake, you must consider that approaching traffic could be planning the same manoeuvre. When you've considered the situation and decided it's safe, indicate your intentions early. This will show the approaching traffic that you intend to pull out.",
    id: 31,
    mediaType: "image",
    question:
      "Some two-way roads are divided into three lanes. Why are they particularly dangerous?",
  },
  {
    answers: ["An ambulance", "A fire engine", "A doctor on call", "A tractor"],
    category: 4,
    correctAnswer: 3,
    explanation:
      "An amber flashing beacon on a vehicle indicates that it's moving slowly or stopped and a possible hazard. Look well ahead on a dual carriageway and you should be able to see and respond to these vehicles in good time.",
    id: 32,
    mediaType: "image",
    question:
      "What type of vehicle uses an amber flashing beacon on a dual carriageway?",
  },
  {
    answers: ["Go ahead", "Stop", "Turn left", "Turn right"],
    category: 4,
    content: require("./../assets/qimage/AB2847n1.jpg"),
    correctAnswer: 1,
    explanation:
      "Police officers may need to direct traffic; for example, at a junction where the traffic lights have broken down. Check your copy of The Highway Code for the signals that they use.",
    id: 33,
    mediaType: "image",
    question:
      "What does this signal from a police officer mean to oncoming traffic?",
  },
  {
    answers: [
      "There's a zebra crossing ahead",
      "There are driveways on the left",
      "People may cross the road in front of it",
      "The road surface will be slippery",
    ],
    category: 4,
    content: require("./../assets/qimage/AB2848n1.jpg"),
    correctAnswer: 2,
    explanation:
      "A bus at a bus stop can hide pedestrians who might try to cross the road just in front of it. Drive at a speed that will enable you to respond safely if you have to.",
    id: 34,
    mediaType: "image",
    question:
      "Why should you be cautious when going past this bus waiting at a bus stop?",
  },
  {
    answers: [
      "On a single carriageway",
      "On a one-way street",
      "Approaching a junction",
      "Travelling up a long hill",
    ],
    category: 4,
    correctAnswer: 2,
    explanation:
      "You should overtake only when it's really necessary and you can see it’s clear ahead. Look out for road signs and markings that show it's illegal or would be unsafe to overtake; for example, approaching junctions or bends. In many cases, overtaking is unlikely to significantly improve your journey time.",
    id: 35,
    mediaType: "image",
    question: "Where would it be unsafe to overtake?",
  },
  {
    answers: [
      "Your ability to judge speed will be reduced",
      "Your confidence will be reduced",
      "Your reactions will be faster",
      "Your awareness of danger will be improved",
    ],
    category: 4,
    correctAnswer: 0,
    explanation:
      "Alcohol will severely reduce your ability to drive or ride safely and there are serious consequences if you’re caught over the drink-drive limit. It's known that alcohol cann•  affect your judgementn•  cause overconfidencen•  reduce coordination and control.",
    id: 36,
    mediaType: "image",
    question: "How can drinking alcohol affect your ability to drive or ride?",
  },
  {
    answers: [
      "Traffic lights ahead",
      "Edge of the carriageway",
      "Footpath on the left",
      "Cycle path",
    ],
    category: 4,
    content: require("./../assets/qimage/BB1081n1.jpg"),
    correctAnswer: 1,
    explanation:
      "The continuous white line shows the edge of the carriageway. It can be especially useful when visibility is restricted, such as at night or in bad weather. It's discontinued in some places; for example, at  junctions, lay-bys, entrances or other openings. ",
    id: 37,
    mediaType: "image",
    question:
      "What does the solid white line at the side of the road indicate?",
  },
  {
    answers: [
      "Both half-barriers down",
      "A steady amber light",
      "One half-barrier down",
      "Twin flashing red lights",
    ],
    category: 4,
    content: require("./../assets/qimage/BB1085n1.jpg"),
    correctAnswer: 1,
    explanation:
      "The steady amber light will be followed by twin flashing red lights that mean you must stop. An alarm will also sound to alert you to the fact that a train is approaching.",
    id: 38,
    mediaType: "image",
    question:
      "You're driving towards this level crossing. What would be the first warning of an approaching train?",
  },
  {
    answers: [
      "Try to move off before the cyclist",
      "Allow the cyclist time and room",
      "Turn right but give the cyclist room",
      "Tap your horn and drive through first",
    ],
    category: 4,
    content: require("./../assets/qimage/BB1087n1.jpg"),
    correctAnswer: 1,
    explanation:
      "Hold back and allow the cyclist to move off. Some junctions have special areas marked across the front of the traffic lane. These allow cyclists to wait for the lights to change and move off ahead of other traffic.",
    id: 39,
    mediaType: "image",
    question:
      "You're behind this cyclist. When the traffic lights change, what should you do?",
  },
  {
    answers: [
      "Check your right mirror",
      "Move up closer to the car ahead",
      "Move out to the right",
      "Check for bicycles on your left",
    ],
    category: 4,
    content: require("./../assets/qimage/BB1095n1.jpg"),
    correctAnswer: 3,
    explanation:
      "If you've been in a queue of traffic and are about to turn left, check your nearside for cyclists as they often filter past on the nearside of slow-moving or stationary vehicles.",
    id: 40,
    mediaType: "image",
    question:
      "You intend to turn left at the traffic lights. What should you do just before turning?",
  },
  {
    answers: [
      "A staggered junction is ahead",
      "A low bridge is ahead",
      "The road surface changes ahead",
      "The road narrows ahead",
    ],
    category: 4,
    content: require("./../assets/qimage/BB1096n1.jpg"),
    correctAnswer: 0,
    explanation:
      "Traffic could be turning off or pulling out ahead of you, to the left or right. Vehicles turning left will be slowing down before the junction, and any vehicles turning right may have to stop to allow oncoming traffic to clear. Be prepared for this, as you might have to slow down or stop behind them.",
    id: 41,
    mediaType: "image",
    question: "Why should you reduce your speed here?",
  },
  {
    answers: [
      "Traffic will move into the right-hand lane",
      "Traffic speed will increase",
      "Traffic will move into the left-hand lane",
      "Traffic won't need to change position",
    ],
    category: 4,
    content: require("./../assets/qimage/BB1099n1.jpg"),
    correctAnswer: 2,
    explanation:
      "Be courteous and allow the traffic to merge into the left-hand lane.",
    id: 42,
    mediaType: "image",
    question: "What might you expect to happen in this situation?",
  },
  {
    answers: [
      "The two right lanes are open",
      "The two left lanes are open",
      "Traffic in the left lanes should stop",
      "Traffic in the right lanes should stop",
    ],
    category: 4,
    content: require("./../assets/qimage/BB1100.jpg"),
    correctAnswer: 1,
    explanation:
      "On some busy roads, lane control signals are used to vary the number of lanes available to give priority to the main traffic flow. A green arrow indicates that the lane is available to traffic facing the signal. A white diagonal arrow means that the lane is closed ahead and traffic should move to the next lane on the left. A red cross means that the lane is closed to traffic facing the signal.",
    id: 43,
    mediaType: "image",
    question:
      "You're driving on a road with several lanes. What do these signs above the lanes mean?",
  },
  {
    answers: [
      "Avoid mixing your alcoholic drinks",
      "Don't drink any alcohol at all",
      "Have some milk before drinking alcohol",
      "Eat a hot meal with your alcoholic drinks",
    ],
    category: 4,
    correctAnswer: 1,
    explanation:
      "Alcohol will stay in your body for several hours and may make you unfit to drive later in the day. Drinking during the day will also affect your performance at work or study.",
    id: 44,
    mediaType: "image",
    question:
      "You're invited to a pub lunch. What should you do if you know that you'll have to drive in the evening?",
  },
  {
    answers: [
      "Road fund licence",
      "Insurance premiums",
      "Vehicle test certificate",
      "Driving licence",
    ],
    category: 4,
    correctAnswer: 1,
    explanation:
      "You've shown that you're a risk to yourself and others on the road. For this reason, insurance companies may charge you a higher premium. ",
    id: 45,
    mediaType: "image",
    question:
      "What will become more expensive after you've been convicted of driving while unfit through drink or drugs?",
  },
  {
    answers: [
      "Have a strong cup of coffee and then drive home",
      "Drive home carefully and slowly",
      "Go home by public transport",
      "Wait a short while and then drive home",
    ],
    category: 4,
    correctAnswer: 2,
    explanation:
      "Drinking black coffee or waiting a few hours won't make any difference. Alcohol takes time to leave the body. nA driver who has been drinking should go home by public transport or taxi. They might even be unfit to drive the following morning.",
    id: 46,
    mediaType: "image",
    question:
      "What advice should you give to a driver who has had a few alcoholic drinks at a party?",
  },
  {
    answers: [
      "Only drive if your journey is necessary",
      "Drive on quiet roads",
      "Ask someone to come with you",
      "Avoid driving and check with your doctor",
    ],
    category: 4,
    correctAnswer: 3,
    explanation:
      "You aren't fit to drive if you're taking medicine that makes you drowsy. Check with your doctor if you're unsure. You mustn't put other road users, your passengers or yourself at risk.",
    id: 47,
    mediaType: "image",
    question:
      "What should you do about driving if you've been taking medicine that causes drowsiness?",
  },
  {
    answers: [
      "Only drive if someone is with you",
      "Avoid driving on motorways",
      "Get someone else to drive",
      "Never drive at more than 30 mph",
    ],
    category: 4,
    correctAnswer: 2,
    explanation:
      "You shouldn't drive if you're taking medicine that could cause you to feel drowsy at the wheel. Ask someone else to drive or, if that isn't possible, find another way to get home.",
    id: 48,
    mediaType: "image",
    question:
      "What should you do if a doctor prescribes drugs that are likely to affect your driving?",
  },
  {
    answers: [
      "See your doctor each time before you drive",
      "Take smaller doses of any medicines",
      "Stop driving until you're fit to drive again",
      "Take all your medicines with you when you drive",
    ],
    category: 4,
    correctAnswer: 2,
    explanation:
      "Only drive if you're fit to do so. Driving when you're ill or taking some medicines can affect your concentration and judgement. It may also cause you to become drowsy or even fall asleep.",
    id: 49,
    mediaType: "image",
    question:
      "What must you do if your ability to drive is impaired during a period of illness?",
  },
  {
    answers: [
      "Stop and rest as soon as possible",
      "Turn the heater up to keep you warm and comfortable",
      "Close the car windows to help you concentrate",
      "Continue with your journey but drive more slowly",
    ],
    category: 4,
    correctAnswer: 0,
    explanation:
      "You'll be putting other road users at risk if you continue to drive when you're drowsy. Pull over and stop in a safe place for a rest. If you're driving a long distance, think about finding some accommodation so you can rest for longer before continuing your journey.",
    id: 50,
    mediaType: "image",
    question:
      "What should you do if you begin to feel drowsy while you're driving?",
  },
  {
    answers: [
      "Pull up on the hard shoulder and change drivers",
      "Leave the motorway at the next exit and rest",
      "Increase your speed and turn up the radio volume",
      "Close all your windows and set the heating to warm",
    ],
    category: 4,
    correctAnswer: 1,
    explanation:
      "If you feel yourself becoming tired or sleepy, you should leave the motorway at the next exit or services and stop for a rest. If you have to drive a long way, leave earlier and plan your journey to include rest stops. That way, you're less likely to become tired while driving and you'll still arrive in good time. ",
    id: 51,
    mediaType: "image",
    question:
      "What should you do if you become tired while you're driving on a motorway?",
  },
  {
    answers: [
      "Wait until you're fit and well before driving",
      "Drive home, but take a tablet for headaches",
      "Drive home if you can stay awake for the journey",
      "Wait for a short time, then drive home slowly",
    ],
    category: 4,
    correctAnswer: 0,
    explanation:
      "All of your concentration should be on your driving. Any pain you feel will distract you, and you should avoid driving when drowsy. The safest course of action is to wait until you've rested and are feeling better before starting your journey.",
    id: 52,
    mediaType: "image",
    question:
      "You're about to drive home. What should you do if you feel very tired and have a severe headache?",
  },
  {
    answers: [
      "Eat a large meal before driving",
      "Take regular refreshment breaks",
      "Play loud music in the car",
      "Complete the journey without stopping",
    ],
    category: 4,
    correctAnswer: 1,
    explanation:
      "Long-distance driving can be boring. This, coupled with a stuffy, warm vehicle, can make you feel tired and sleepy. Make sure you take rest breaks to help you stay awake and alert. Stop in a safe place before you get to the stage of fighting sleep.",
    id: 53,
    mediaType: "image",
    question: "What can you do to help prevent tiredness on a long journey?",
  },
  {
    answers: [
      "Ask your friend if taking the medicine affected their driving",
      "Drink some strong coffee one hour before driving",
      "Check the label to see if the medicine will affect your driving",
      "Drive a short distance to see if the medicine is affecting your driving",
    ],
    category: 4,
    correctAnswer: 2,
    explanation:
      "If you've taken medicine, never drive without first checking what the side effects might be; they might affect your judgement and perception, and therefore endanger lives.",
    id: 54,
    mediaType: "image",
    question:
      "You take some cough medicine given to you by a friend. What should you do before driving your car?",
  },
  {
    answers: [
      "Reverse out of the road",
      "Turn around in a side road",
      "Continue and find another route",
      "Reverse into a driveway",
    ],
    category: 4,
    content: require("./../assets/qimage/BB1353.jpg"),
    correctAnswer: 2,
    explanation:
      "Never reverse or turn your vehicle around in a one-way street. It's illegal and could even cause a collision. If you've taken a wrong turn, carry on along the one-way street and find another route, checking the direction signs as you drive. Stop in a safe place if you need to check a map.",
    id: 55,
    mediaType: "image",
    question:
      "You're driving on a one-way street. What should you do if you realise you've taken the wrong route?",
  },
  {
    answers: [
      "Looking at road maps",
      "Switching on your demister",
      "Using your windscreen washers",
      "Looking in your door mirror",
    ],
    category: 4,
    correctAnswer: 0,
    explanation:
      "Looking at road maps while driving is very dangerous. If you aren’t sure of your route, stop in a safe place and check the map. You must not allow anything to take your attention away from the road while you’re driving.",
    id: 56,
    mediaType: "image",
    question: "What will be a serious distraction while you're driving?",
  },
  {
    answers: [
      "Move to the opposite side of the road",
      "Drive through as you have priority",
      "Sound your horn and be prepared to stop",
      "Speed up and drive through quickly",
    ],
    category: 4,
    content: require("./../assets/qimage/BB1397n1.jpg"),
    correctAnswer: 2,
    explanation:
      "White lights at the rear of a car show that the driver has selected reverse gear. The driver is hidden from view so can't see you approaching. Sound your horn to warn of your presence, and be ready to stop if the car reverses into your path.",
    id: 57,
    mediaType: "image",
    question:
      "What should you do if the vehicle starts reversing off the driveway?",
  },
  {
    answers: [
      "Open a window",
      "Turn on your radio",
      "Have an alcoholic drink",
      "Calm down",
    ],
    category: 4,
    correctAnswer: 3,
    explanation:
      "If you're feeling upset or angry, you'll find it much more difficult to concentrate on your driving. You should wait until you've calmed down before starting a journey.",
    id: 58,
    mediaType: "image",
    question:
      "You've been involved in an argument that's made you feel angry. What should you do before starting your journey?",
  },
  {
    answers: [
      "There's a broken white line in the centre",
      "There are solid white lines on either side",
      "There are roadworks ahead of you",
      "There are no footpaths",
    ],
    category: 4,
    content: require("./../assets/qimage/BB1454n1.jpg"),
    correctAnswer: 2,
    explanation:
      "Look well ahead and read any road signs as you drive. They're there to inform you of what's ahead. In this case, you may need to slow down and change direction. nCheck your mirrors so you know what's happening around you before you change speed or direction.",
    id: 59,
    mediaType: "image",
    question:
      "You're driving on this dual carriageway. Why may you need to slow down?",
  },
  {
    answers: [
      "Sound the horn",
      "Brake firmly",
      "Keep a safe gap",
      "Flash your lights",
    ],
    category: 4,
    content: require("./../assets/qimage/BB1455.jpg"),
    correctAnswer: 2,
    explanation:
      "If another vehicle cuts in sharply, ease off the accelerator and drop back to allow a safe separation distance. Try not to overreact by braking sharply or swerving, as you could lose control. If vehicles behind you are too close or unprepared, it could lead to a crash.",
    id: 60,
    mediaType: "image",
    question:
      "You've just been overtaken by this motorcyclist. What should you do if the rider cuts in sharply?",
  },
  {
    answers: [
      "Drive home slowly, keeping to quiet roads",
      "Borrow a friend’s glasses and use those",
      "Drive home at night, so that the lights will help you",
      "Find a way of getting home without driving ",
    ],
    category: 4,
    correctAnswer: 3,
    explanation:
      "If you need to wear glasses for driving, it's illegal to drive without them. You must be able to see clearly when you're driving.",
    id: 61,
    mediaType: "image",
    question:
      "You're about to drive your car. What should you do if you can't find the glasses you need to wear?",
  },
  {
    answers: [
      "It improves judgement skills",
      "It increases confidence",
      "It leads to faster reactions",
      "It increases concentration",
    ],
    category: 4,
    correctAnswer: 1,
    explanation:
      "Alcohol can increase confidence to a point where your driving behaviour might become ‘out of character’. Sensible behaviour might change to risk-taking behaviour. Never let yourself or your friends get into this situation.",
    id: 62,
    mediaType: "image",
    question: "How does drinking alcohol affect your driving behaviour?",
  },
  {
    answers: [
      "Drug companies want customer feedback on their products",
      "You may have to let your insurance company know about the medicine",
      "Some types of medicine can affect your ability to drive safely",
      "The medicine you take may affect your hearing",
    ],
    category: 4,
    correctAnswer: 2,
    explanation:
      "Always check the label or information leaflet for any medication you take. The medicine might affect your driving. If you aren’t sure, ask your doctor or pharmacist.",
    id: 63,
    mediaType: "image",
    question:
      "Why should you check the information leaflet before taking any medicine?",
  },
  {
    answers: [
      "Only in bad weather conditions",
      "Whenever you're driving",
      "When you think it's necessary",
      "Only at night time",
    ],
    category: 4,
    correctAnswer: 1,
    explanation:
      "Have your eyesight tested before you start your practical training. Then, throughout your driving life, have checks periodically, as your vision may change.",
    id: 64,
    mediaType: "image",
    question:
      "You need glasses to read a vehicle number plate at the required distance. When must you wear them?",
  },
  {
    answers: ["Half-moon", "Round", "Bifocal", "Tinted"],
    category: 4,
    correctAnswer: 3,
    explanation:
      "If you're driving at night or in poor visibility, tinted lenses will reduce the efficiency of your vision by reducing the amount of light reaching your eyes.",
    id: 65,
    mediaType: "image",
    question:
      "Which type of glasses would make driving at night more difficult?",
  },
  {
    answers: ["Drugs", "Busy roads", "Tinted windows", "Weather conditions"],
    category: 4,
    correctAnswer: 0,
    explanation:
      "Both recreational drugs and prescribed medicine can affect your concentration. It's also an offence to drive with certain drugs in your body and a positive test could lead to a conviction.",
    id: 66,
    mediaType: "image",
    question: "What can seriously reduce your ability to concentrate?",
  },
  {
    answers: [
      "Tell the driver licensing authority",
      "Tell your doctor",
      "Tell the police ",
      "Tell your optician",
    ],
    category: 4,
    correctAnswer: 0,
    explanation:
      "Having very poor eyesight will have a serious effect on your ability to drive safely. If you can't meet the driver's eyesight requirements, you must tell DVLA (or DVA in Northern Ireland).",
    id: 67,
    mediaType: "image",
    question:
      "What must you do if your eyesight has become very poor and you're no longer able to meet the driver's eyesight requirements?",
  },
  {
    answers: [
      "When you're double-parked on a two-way road",
      "When your direction indicators aren't working",
      "When warning oncoming traffic that you intend to stop",
      "When your vehicle has broken down and is causing an obstruction",
    ],
    category: 4,
    correctAnswer: 3,
    explanation:
      "Hazard warning lights are an important safety feature and should be used if you've broken down and are causing an obstruction. Don’t use them as an excuse to park illegally. You may also use them on motorways to warn traffic behind you of danger ahead.",
    id: 68,
    mediaType: "image",
    question: "When should you use hazard warning lights?",
  },
  {
    answers: [
      "Stay well back and wait to see if anything comes",
      "Build up your speed so that you can emerge quickly",
      "Stop and apply the parking brake even if the road is clear",
      "Approach slowly and edge out until you can see more clearly",
    ],
    category: 4,
    content: require("./../assets/qimage/BB1576n1.jpg"),
    correctAnswer: 3,
    explanation:
      "You should slow right down, and stop if necessary, at any junction where your view is restricted. Edge forward until you can see properly. Only then can you decide whether it's safe to go.",
    id: 69,
    mediaType: "image",
    question:
      "You want to turn left at this junction. What should you do if your view of the main road is restricted?",
  },
  {
    answers: [
      "To engage cruise control",
      "To accelerate quickly",
      "To brake progressively",
      "To improve fuel economy",
    ],
    category: 4,
    correctAnswer: 1,
    explanation:
      "‘Kick down’ selects a lower gear, enabling the vehicle to accelerate faster.",
    id: 70,
    mediaType: "image",
    question:
      "You're driving a car fitted with automatic transmission. When would you use ‘kick down’?",
  },
  {
    answers: [
      "Allow a two-second separation gap",
      "Switch your headlights onto main beam",
      "Move into a lane that has less spray",
      "Be aware of spray reducing your vision",
    ],
    category: 4,
    content: require("./../assets/qimage/BB1664n1.jpg"),
    correctAnswer: 3,
    explanation:
      "The usual two-second time gap increases to four seconds when the roads are wet. If you stay well back, you’lln• be able to see past the vehiclen• be out of the spray thrown up by the lorry’s tyresn• give yourself more time to stop if the need arisesn• increase your chances of being seen by the lorry driver.",
    id: 71,
    mediaType: "image",
    question:
      "What should you do if it's raining and you're following this lorry on a motorway?",
  },
  {
    answers: [
      "A vehicle overtaking you",
      "Mud on the road",
      "The road getting narrower",
      "Pedestrians walking towards you",
    ],
    category: 4,
    content: require("./../assets/qimage/BB1665n1.jpg"),
    correctAnswer: 3,
    explanation:
      "Pedestrians walking on a road with no pavement should walk against the direction of the traffic. You can’t see around this bend and if pedestrians are in the road you need to be able to deal with the situation safely. Always keep this in mind and give yourself time to react if a hazard does appear.",
    id: 72,
    mediaType: "image",
    question:
      "You're driving towards this left-hand bend. What danger should you be anticipating?",
  },
  {
    answers: [
      "Slow down, keeping a safe separation distance",
      "Accelerate past the vehicles in the left-hand lane",
      "Pull up on the left-hand verge",
      "Move across and continue in the right-hand lane",
    ],
    category: 4,
    content: require("./../assets/qimage/BB1666n1.jpg"),
    correctAnswer: 0,
    explanation:
      "Allow the traffic to merge into the left-hand lane. Leave enough room so that you can maintain a safe separation distance, even if vehicles pull in ahead of you.",
    id: 73,
    mediaType: "image",
    question:
      "What should you do if the traffic in the left-hand lane is slowing?",
  },
  {
    answers: [
      "When driving on a motorway to warn traffic behind of a hazard ahead",
      "When you're double-parked on a two-way road",
      "When your direction indicators aren't working",
      "When warning oncoming traffic that you intend to stop",
    ],
    category: 4,
    correctAnswer: 0,
    explanation:
      "Hazard warning lights are an important safety feature. Use them when driving on a motorway to warn traffic behind you of danger ahead. nYou should also use them if your vehicle has broken down and is causing an obstruction.",
    id: 74,
    mediaType: "image",
    question: "When may you use hazard warning lights?",
  },
  {
    answers: [
      "Looking for traffic behind you",
      "Reflections of traffic in windows",
      "Making eye contact with other road users",
      "Checking for traffic in your interior mirror",
    ],
    category: 4,
    correctAnswer: 1,
    explanation:
      "You must be completely sure it's safe to emerge. Try to look for traffic through the windows of the parked cars or in the reflections in windows. Keep looking in all directions as you slowly edge forwards until you can see it's safe.",
    id: 75,
    mediaType: "image",
    question:
      "You're waiting to emerge at a junction. Your view is restricted by parked vehicles. What can help you to see traffic on the road you're joining?",
  },
  {
    answers: [
      "Inform your local police",
      "Avoid using motorways",
      "Always drive accompanied",
      "Inform the licensing authority",
    ],
    category: 4,
    correctAnswer: 3,
    explanation:
      "You must tell DVLA (or DVA in Northern Ireland) if your health is likely to affect your ability to drive. The licensing authority will investigate your situation and then make a decision on whether you're fit enough to drive safely.",
    id: 76,
    mediaType: "image",
    question: "What must you do if poor health affects your driving?",
  },
  {
    answers: [
      "To allow vehicles to enter and emerge",
      "To allow the bus to reverse",
      "To allow vehicles to make a U-turn",
      "To allow vehicles to park",
    ],
    category: 4,
    content: require("./../assets/qimage/BB1748.jpg"),
    correctAnswer: 0,
    explanation:
      "You should always try to keep junctions clear. If you're in queuing traffic, make sure that when you stop you leave enough space for traffic to flow in and out of the junction.",
    id: 77,
    mediaType: "image",
    question: "Why should the junction on the left be kept clear?",
  },
  {
    answers: [
      "Stop on the hard shoulder for a sleep",
      "Open a window and stop as soon as it’s safe and legal",
      "Speed up to arrive at your destination sooner",
      "Slow down and let other drivers overtake",
    ],
    category: 4,
    correctAnswer: 1,
    explanation:
      "Never stop on the hard shoulder to rest. If there's no service area for several miles, leave the motorway at the next exit and find somewhere safe and legal to pull over.",
    id: 78,
    mediaType: "image",
    question:
      "What should you do if you start to feel drowsy while you're driving on a motorway?",
  },
  {
    answers: [
      "Go around them, leaving plenty of room",
      "Stop and wave at them to cross",
      "Sound your horn and proceed",
      "Give way to them",
    ],
    category: 13,
    content: require("./../assets/qimage/AB2119.jpg"),
    correctAnswer: 3,
    explanation:
      "When you’re turning into a side road, pedestrians who are crossing have priority. You should wait to allow them to finish crossing safely. Be patient if they're slow or unsteady. Don't try to rush them by sounding your horn, flashing your lights, revving your engine or giving any other inappropriate signal.",
    id: 1,
    mediaType: "image",
    question:
      "What should you do if you want to turn left at a junction where pedestrians have started to cross?",
  },
  {
    answers: [
      "One-way street",
      "Pedestrians",
      "Traffic congestion",
      "Parked vehicles",
    ],
    category: 13,
    correctAnswer: 1,
    explanation:
      "Make sure that you've reduced your speed and are in the correct gear for the turn. Look into the road before you turn and always give way to any pedestrians who are crossing.",
    id: 2,
    mediaType: "image",
    question:
      "What hazard should you be especially aware of if you're turning left into a side road?",
  },
  {
    answers: [
      "They may be overtaking on your left",
      "They may be following you closely",
      "They may be emerging from the side road",
      "They may be overtaking on your right",
    ],
    category: 13,
    correctAnswer: 3,
    explanation:
      "Never attempt to change direction to the right without first checking your right-hand mirror and blind spot. A motorcyclist might not have seen your signal and could be hidden by other traffic. This observation should become a matter of routine.",
    id: 3,
    mediaType: "image",
    question:
      "Why should you check for motorcyclists just before turning right into a side road?",
  },
  {
    answers: [
      "Moped riders can use it",
      "It's controlled by a traffic warden",
      "It's controlled by two flashing lights",
      "Pedestrians and cyclists can use it together",
    ],
    category: 13,
    correctAnswer: 3,
    explanation:
      "Toucan crossings are shared by pedestrians and cyclists, who are permitted to cycle across. They're shown the green light together. The signals are push-button-operated and there's no flashing amber phase.",
    id: 4,
    mediaType: "image",
    question: "Why is a toucan crossing different from other crossings?",
  },
  {
    answers: [
      "By pointing to children waiting to cross",
      "By displaying a red light",
      "By displaying a 'stop' sign",
      "By giving you an arm signal",
    ],
    category: 13,
    correctAnswer: 2,
    explanation:
      "If a school crossing patrol steps out into the road with a 'stop' sign, you must stop. Don’t wave anyone across the road and don’t get impatient or rev your engine.",
    id: 5,
    mediaType: "image",
    question: "How will a school crossing patrol signal you to stop?",
  },
  {
    answers: [
      "In the window of a car taking children to school",
      "At the side of the road",
      "At playground areas",
      "On the rear of a school bus or coach",
    ],
    category: 13,
    content: require("./../assets/qimage/AB2129.jpg"),
    correctAnswer: 3,
    explanation:
      "Vehicles that are used to carry children to and from school will be travelling at busy times of the day. If you're following a vehicle with this sign, be prepared for it to make frequent stops. It might pick up or set down passengers in places other than normal bus stops.",
    id: 6,
    mediaType: "image",
    question: "Where would you see this sign?",
  },
  {
    answers: [
      "No route for pedestrians and cyclists",
      "A route for pedestrians only",
      "A route for cyclists only",
      "A route for pedestrians and cyclists",
    ],
    category: 13,
    content: require("./../assets/qimage/AB2134.jpg"),
    correctAnswer: 3,
    explanation:
      "This sign shows a shared route for pedestrians and cyclists: when it ends, the cyclists will be rejoining the main road.",
    id: 7,
    mediaType: "image",
    question: "What does this sign mean?",
  },
  {
    answers: [
      "They have limited mobility",
      "They're deaf",
      "They're blind",
      "They're deaf and blind",
    ],
    category: 13,
    content: require("./../assets/qimage/AB2136n1.jpg"),
    correctAnswer: 3,
    explanation:
      "When someone is deaf as well as blind, they may carry a white stick with a red reflective band or bands. They may not be aware that you're approaching and they may not be able to hear anything; so, for example, your horn would be ineffective as a warning to them. ",
    id: 8,
    mediaType: "image",
    question:
      "You see a pedestrian carrying a white stick that also has a red band. What does this mean?",
  },
  {
    answers: [
      "Wave them across so they know that you've seen them",
      "Be patient and allow them to cross in their own time",
      "Rev the engine to let them know that you're waiting",
      "Tap the horn in case they're hard of hearing",
    ],
    category: 13,
    content: require("./../assets/qimage/AB2138.jpg"),
    correctAnswer: 1,
    explanation:
      "Be aware that older people might take a long time to cross the road. They might also be hard of hearing and not hear you approaching. Don’t hurry older people across the road by getting too close to them or revving your engine. ",
    id: 9,
    mediaType: "image",
    question:
      "What would you do if you see older people crossing the road ahead?",
  },
  {
    answers: [
      "Expect them to wait for you to pass",
      "Speed up to get past them quickly",
      "Stop and wave them across the road",
      "Be careful; they may misjudge your speed",
    ],
    category: 13,
    correctAnswer: 3,
    explanation:
      "Older people may have impaired hearing, vision, concentration and judgement. They may also walk slowly and so could take a long time to cross the road.",
    id: 10,
    mediaType: "image",
    question:
      "What should you do when you see an older person about to cross the road ahead?",
  },
  {
    answers: [
      "Overtake on the right",
      "Give a warning with your horn",
      "Signal the cyclist to move across",
      "Give the cyclist plenty of room",
    ],
    category: 13,
    correctAnswer: 3,
    explanation:
      "If you’re following a cyclist who’s signalling to turn right at a roundabout, leave plenty of room. Give them space and time to get into the correct lane.",
    id: 11,
    mediaType: "image",
    question:
      "You're approaching a roundabout. What should you do if a cyclist ahead is signalling to turn right?",
  },
  {
    answers: ["Lorry", "Tractor", "Bicycle", "Road-sweeper"],
    category: 13,
    correctAnswer: 2,
    explanation:
      "Don’t pass cyclists too closely, as they mayn• need to veer around a pothole, drain or other hazardn• be buffeted by side wind n• be made unsteady by your vehicle. nAlways leave as much room as you would for a car, and don’t cut in front of them.",
    id: 12,
    mediaType: "image",
    question: "Which vehicle should you allow extra room as you overtake them?",
  },
  {
    answers: [
      "They may want to turn into the side road",
      "They may slow down to let you turn",
      "They're harder to see",
      "They might not see you turn",
    ],
    category: 13,
    correctAnswer: 2,
    explanation:
      "Cyclists and motorcyclists are smaller than other vehicles and so are more difficult to see. They can easily be hidden from your view by cars parked near a junction.",
    id: 13,
    mediaType: "image",
    question:
      "Why should you look carefully for motorcyclists and cyclists at junctions?",
  },
  {
    answers: [
      "Motorcycles are usually faster than cars",
      "Police patrols often use motorcycles",
      "Motorcycles can easily be hidden behind obstructions",
      "Motorcycles have right of way",
    ],
    category: 13,
    correctAnswer: 2,
    explanation:
      "If you're waiting to emerge from a side road, look carefully for motorcycles: they can be difficult to see. Be especially careful if there are parked vehicles or other obstructions restricting your view.",
    id: 14,
    mediaType: "image",
    question:
      "You're waiting to come out of a side road. Why should you look carefully for motorcycles?",
  },
  {
    answers: [
      "So that the rider can be seen more easily",
      "To stop the battery overcharging",
      "To improve the rider’s vision",
      "The rider is inviting you to proceed",
    ],
    category: 13,
    correctAnswer: 0,
    explanation:
      "A motorcycle can be lost from sight behind another vehicle. The use of headlights helps to make it more conspicuous and therefore more easily seen.",
    id: 15,
    mediaType: "image",
    question: "Why do motorcyclists use dipped headlights in daylight?",
  },
  {
    answers: [
      "They must do so by law",
      "It helps keep them cool in summer",
      "The colours are popular",
      "To make them more visible",
    ],
    category: 13,
    correctAnswer: 3,
    explanation:
      "Motorcycles and scooters are generally smaller than other vehicles and can be difficult to see. Wearing bright clothing makes it easier for other road users to see a motorcyclist approaching, especially at junctions.",
    id: 16,
    mediaType: "image",
    question: "Why do motorcyclists wear bright clothing?",
  },
  {
    answers: [
      "To listen for traffic behind them",
      "Motorcycles don't have mirrors",
      "It helps them balance as they turn",
      "To check for traffic in their blind area",
    ],
    category: 13,
    correctAnswer: 3,
    explanation:
      "When you see a motorcyclist take a glance over their shoulder, they're probably about to change direction. Recognising a clue like this helps you to anticipate their next action. This can improve road safety for you and others.",
    id: 17,
    mediaType: "image",
    question:
      "Why do motorcyclists often look round over their right shoulder just before turning right?",
  },
  {
    answers: ["Car driver", "Tractor driver", "Lorry driver", "Motorcyclist"],
    category: 13,
    correctAnswer: 3,
    explanation:
      "Pedestrians and riders on two wheels can be harder to see than other road users. Make sure you look for them, especially at junctions. Effective observation, coupled with appropriate action, can save lives.",
    id: 18,
    mediaType: "image",
    question: "Which is the most vulnerable road user?",
  },
  {
    answers: [
      "Sound your horn as a warning",
      "Treat them like any other vehicle",
      "Give them plenty of room",
      "Accelerate past as quickly as possible",
    ],
    category: 13,
    correctAnswer: 2,
    explanation:
      "Horse riders often keep to the outside of the roundabout even if they're turning right. Give them plenty of room and remember that they may have to cross lanes of traffic.",
    id: 19,
    mediaType: "image",
    question:
      "You're approaching a roundabout. What should you do if there are horses being ridden in front of you?",
  },
  {
    answers: [
      "Wave them to cross as quickly as they can",
      "Rev your engine to make them hurry",
      "Flash your lights in case they haven't noticed you",
      "Wait patiently while they cross",
    ],
    category: 13,
    correctAnswer: 3,
    explanation:
      "If the lights turn to green, wait for any pedestrians to clear the crossing. Allow them to finish crossing the road in their own time, and don’t try to hurry them by revving your engine.",
    id: 20,
    mediaType: "image",
    question:
      "As you approach a pelican crossing, the lights change to green. What should you do if older people are still crossing?",
  },
  {
    answers: [
      "Reduce speed until you're clear of the area",
      "Keep up your speed and sound the horn",
      "Increase your speed to clear the area quickly",
      "Wait at the lights until they stop flashing",
    ],
    category: 13,
    content: require("./../assets/qimage/AB2516n1.jpg"),
    correctAnswer: 0,
    explanation:
      "The flashing amber lights are switched on to warn you that children may be crossing near a school. Slow down and take extra care, as you may have to stop.",
    id: 21,
    mediaType: "image",
    question:
      "What action should you take when you see flashing amber lights under a school warning sign?",
  },
  {
    answers: [
      "To allow children to be dropped off at school",
      "To allow teachers to park",
      "To allow children to be picked up after school",
      "To allow children to see and be seen when they're crossing the road",
    ],
    category: 13,
    content: require("./../assets/qimage/AB2545.jpg"),
    correctAnswer: 3,
    explanation:
      "The markings are there to show that the area should be kept clear. This is to allow an unrestricted view forn• approaching drivers and ridersn• children wanting to cross the road.",
    id: 22,
    mediaType: "image",
    question: "Why should these road markings be kept clear?",
  },
  {
    answers: [
      "Near a school crossing",
      "At a playground entrance",
      "On a school bus",
      "At a ‘pedestrians only’ area",
    ],
    category: 13,
    content: require("./../assets/qimage/AB2559.jpg"),
    correctAnswer: 2,
    explanation:
      "School buses can stop to pick up or drop off schoolchildren at places that aren't designated bus stops. Watch out for children crossing the road to catch the bus or from the far side of the bus if they've just been dropped off.",
    id: 23,
    mediaType: "image",
    question: "Where would you see this sign?",
  },
  {
    answers: ["Left", "Right", "Any direction", "Straight ahead"],
    category: 13,
    correctAnswer: 2,
    explanation:
      "Cyclists approaching a roundabout in the left-hand lane may be turning right but may not have been able to get into the correct lane due to heavy traffic. They may also feel safer keeping to the left all the way around the roundabout. Be aware of them and give them plenty of room.",
    id: 24,
    mediaType: "image",
    question:
      "You're following two cyclists as they approach a roundabout in the left-hand lane. Where would you expect the cyclists to go?",
  },
  {
    answers: [
      "Overtake the moped before the junction",
      "Pull alongside the moped and stay level until just before the junction",
      "Sound your horn as a warning and pull in front of the moped",
      "Stay behind until the moped has passed the junction",
    ],
    category: 13,
    correctAnswer: 3,
    explanation:
      "Passing the moped and turning into the junction could mean that you cut across the front of the rider. This might force them to slow down, stop or even lose control. Stay behind the moped until it has passed the junction and then you can turn without affecting the rider.",
    id: 25,
    mediaType: "image",
    question:
      "You're travelling behind a moped. What should you do if you want to turn left a short distance ahead?",
  },
  {
    answers: [
      "Proceed as normal",
      "Keep close to them",
      "Cut in front of them",
      "Stay well back",
    ],
    category: 13,
    correctAnswer: 3,
    explanation:
      "Allow the horse rider to enter and exit the roundabout in their own time. They may feel safer keeping to the left all the way around the roundabout. Don’t get up close behind or alongside them, because that would probably upset the horse and create a dangerous situation. ",
    id: 26,
    mediaType: "image",
    question:
      "You see a horse rider as you approach a roundabout. What should you do if they're signalling right but keeping well to the left?",
  },
  {
    answers: [
      "Sound your horn to warn them of your presence",
      "Be patient and prepare for them to react more slowly",
      "Flash your headlights to indicate that it's safe for them to proceed",
      "Overtake them as soon as possible",
    ],
    category: 13,
    correctAnswer: 1,
    explanation:
      "Learners might not have confidence when they first start to drive. Allow them plenty of room and don’t react adversely to their hesitation. We all learn from experience, but new drivers will have had less practice in dealing with all the situations that might occur. ",
    id: 27,
    mediaType: "image",
    question: "How should you react to inexperienced drivers?",
  },
  {
    answers: [
      "Be patient, as you expect them to make mistakes",
      "Stay very close behind and flash your headlights",
      "Start to rev your engine if they take too long to restart",
      "Immediately steer around them and drive on",
    ],
    category: 13,
    correctAnswer: 0,
    explanation:
      "Learning to drive is a process of practice and experience. Try to understand this and tolerate those who make mistakes while they're learning.",
    id: 28,
    mediaType: "image",
    question:
      "What should you do when you're following a learner driver who stalls at a junction?",
  },
  {
    answers: ["Motorcycles", "Bicycles", "Pedestrians", "Horse riders"],
    category: 13,
    correctAnswer: 2,
    explanation:
      "On a quiet country road, always be aware that there may be a hazard just around the next bend, such as a slow-moving vehicle or pedestrians. Pedestrians are advised to walk on the right-hand side of the road if there's no pavement, so they may be walking towards you on your side of the road.",
    id: 29,
    mediaType: "image",
    question:
      "You're on a country road. What should you expect to see coming towards you on your side of the road?",
  },
  {
    answers: [
      "Overtake the cyclist before you reach the junction",
      "Pull alongside the cyclist and stay level until after the junction",
      "Hold back until the cyclist has passed the junction",
      "Go around the cyclist on the junction",
    ],
    category: 13,
    content: require("./../assets/qimage/AB2601n1.jpg"),
    correctAnswer: 2,
    explanation:
      "Make allowances for cyclists, and give them plenty of room. Don’t overtake and then immediately turn left. Be patient and turn behind them when they've passed the junction.",
    id: 30,
    mediaType: "image",
    question:
      "You're following a cyclist. What should you do when you wish to turn left a short distance ahead?",
  },
  {
    answers: [
      "In any direction",
      "To the right",
      "To the left",
      "Straight ahead",
    ],
    category: 13,
    correctAnswer: 0,
    explanation:
      "Horses and their riders move more slowly than other road users. They might not have time to cut across heavy traffic to take up a position in the right-hand lane. For this reason, a horse and rider may approach a roundabout in the left-hand lane even though they're turning right. ",
    id: 31,
    mediaType: "image",
    question:
      "A horse rider is in the left-hand lane approaching a roundabout. Where should you expect the rider to go?",
  },
  {
    answers: [
      "Flashing red beacon",
      "Flashing green beacon",
      "Flashing blue beacon",
      "Flashing amber beacon",
    ],
    category: 13,
    correctAnswer: 3,
    explanation:
      "Powered vehicles used by disabled people are small and low making them hard to see on the road. They also travel very slowly. On an unrestricted dual carriageway, they must display a flashing amber beacon to warn other road users of their presence.",
    id: 32,
    mediaType: "image",
    question:
      "Powered vehicles used by disabled people are small and can be hard to see. What must they display if they're travelling on a dual carriageway?",
  },
  {
    answers: [
      "The vehicle is slow moving",
      "The vehicle has broken down",
      "The vehicle is a doctor's car",
      "The vehicle belongs to a school crossing patrol",
    ],
    category: 13,
    correctAnswer: 0,
    explanation:
      "Different coloured beacons warn of different types of vehicle needing special attention. Blue beacons are used on emergency vehicles that need priority. Green beacons are found on doctors' cars. Amber beacons generally denote slower moving vehicles, which are often large. These vehicles are usually involved in road maintenance or local amenities and make frequent stops.",
    id: 33,
    mediaType: "image",
    question:
      "What does it mean when a moving vehicle is showing a flashing amber beacon?",
  },
  {
    answers: [
      "Contraflow cycle lane",
      "With-flow cycle lane",
      "Cycles and buses only",
      "No cycles or buses",
    ],
    category: 13,
    content: require("./../assets/qimage/AB2726.jpg"),
    correctAnswer: 1,
    explanation:
      "Usually, a picture of a cycle will also be painted on the road, and sometimes the lane will have a different coloured surface. Leave these areas clear for cyclists and don't pass too closely when you overtake.",
    id: 34,
    mediaType: "image",
    question: "What does this sign mean?",
  },
  {
    answers: [
      "Pull out to the middle of the road",
      "Slow down and be ready to stop",
      "Switch on your hazard warning lights",
      "Give a right-turn signal",
    ],
    category: 13,
    content: require("./../assets/qimage/AB2727n1.jpg"),
    correctAnswer: 1,
    explanation:
      "Be particularly careful when approaching horse riders – slow down and be prepared to stop. Always pass wide and slowly, and look out for signals given by the riders. Horses are unpredictable: always treat them as potential hazards and take great care when passing them.",
    id: 35,
    mediaType: "image",
    question: "What should you do when you see these horse riders in front?",
  },
  {
    answers: [
      "To ensure children can see and be seen when they're crossing the road",
      "To enable teachers to have clear access to the school",
      "To ensure delivery vehicles have easy access to the school",
      "To enable parents to pick up or drop off children safely",
    ],
    category: 13,
    content: require("./../assets/qimage/AB2729.jpg"),
    correctAnswer: 0,
    explanation:
      "These markings are found on the road outside schools. Don't stop or park on them, even to set down or pick up children. The markings are there to ensure that drivers, riders, children and other pedestrians have a clear view of the road in all directions.",
    id: 36,
    mediaType: "image",
    question: "What's the purpose of these road markings?",
  },
  {
    answers: [
      "Watch out for pedestrians walking in the road",
      "Use your right-hand mirror more often",
      "Speed up to get past the roadworks more quickly",
      "Position close to the left-hand kerb",
    ],
    category: 13,
    correctAnswer: 0,
    explanation:
      "Where street repairs have closed off pavements, proceed carefully and slowly, as pedestrians might have to walk in the road.",
    id: 37,
    mediaType: "image",
    question:
      "What should you do if the left-hand pavement is closed due to street repairs?",
  },
  {
    answers: [
      "Follow closely so they can see you in their mirrors",
      "Overtake immediately to avoid delays",
      "Allow extra room in case they swerve to avoid potholes",
      "Allow the same room as normal to avoid wasting road space",
    ],
    category: 13,
    correctAnswer: 2,
    explanation:
      "To avoid being unbalanced, a motorcyclist might swerve to avoid potholes and bumps in the road. Be prepared for this and allow them extra space.",
    id: 38,
    mediaType: "image",
    question:
      "What should you do when you're following a motorcyclist along a road that has a poor surface?",
  },
  {
    answers: [
      "No cycling",
      "Cycle route ahead",
      "Cycle parking only",
      "End of cycle route",
    ],
    category: 13,
    content: require("./../assets/qimage/AB2840.jpg"),
    correctAnswer: 1,
    explanation:
      "More people are cycling today and cycle routes are being extended in our towns and cities to provide safe cycling routes. Respect the presence of cyclists on the road and give them plenty of room if you need to pass.",
    id: 39,
    mediaType: "image",
    question: "What does this sign mean?",
  },
  {
    answers: [
      "Sound your horn",
      "Overtake them",
      "Assume they're turning left",
      "Allow them space to turn ",
    ],
    category: 13,
    content: require("./../assets/qimage/AB2849n1.jpg"),
    correctAnswer: 3,
    explanation:
      "Cycling in today’s heavy traffic can be hazardous. Some cyclists may not feel safe crossing the path of traffic to take up a position in an outside lane. Be aware of this and understand that, although they're in the left-hand lane, the cyclist might be turning right.",
    id: 40,
    mediaType: "image",
    question:
      "You're approaching this roundabout. What should you do when a cyclist is keeping to the left while signalling to turn right?",
  },
  {
    answers: [
      "Prepare to slow down and stop",
      "Stop and wave the pedestrians across",
      "Speed up and pass by quickly",
      "Continue unless the pedestrians step out",
    ],
    category: 13,
    content: require("./../assets/qimage/AB2850.jpg"),
    correctAnswer: 0,
    explanation:
      "Be courteous and prepare to stop. Don't wave people across, because this could be dangerous if another vehicle is approaching the crossing.",
    id: 41,
    mediaType: "image",
    question: "What should you do when you're approaching this crossing?",
  },
  {
    answers: [
      "The pedestrian is an older person",
      "The pedestrian is a dog trainer",
      "The pedestrian is colour-blind",
      "The pedestrian is deaf",
    ],
    category: 13,
    correctAnswer: 3,
    explanation:
      "Dogs trained to help deaf people have a yellow or burgundy coat. If you see one, you should take extra care, as the pedestrian may not be aware of vehicles approaching.",
    id: 42,
    mediaType: "image",
    question:
      "What does it mean if you see a pedestrian with a dog that has a yellow or burgundy coat?",
  },
  {
    answers: [
      "Motorcyclists and cyclists",
      "Motorcyclists and pedestrians",
      "Only cyclists",
      "Cyclists and pedestrians",
    ],
    category: 13,
    correctAnswer: 3,
    explanation:
      "There are some crossings where cycle routes lead cyclists to cross at the same place as pedestrians. Always look out for cyclists, as they're likely to be approaching faster than pedestrians.",
    id: 43,
    mediaType: "image",
    question: "Who may use toucan crossings?",
  },
  {
    answers: [
      "To allow taxis to position in front of other traffic",
      "To allow people with disabilities to cross the road",
      "To allow cyclists and pedestrians to cross the road together",
      "To allow cyclists to position in front of other traffic",
    ],
    category: 13,
    content: require("./../assets/qimage/AB2860n1.jpg"),
    correctAnswer: 3,
    explanation:
      "These are known as advanced stop lines. When the lights are red (or about to become red), you should stop at the first white line. However, if you've crossed that line as the lights change, you must stop at the second line even if it means you're in the area reserved for cyclists.",
    id: 44,
    mediaType: "image",
    question:
      "This junction, controlled by traffic lights, has a marked area between two stop lines. What's this for?",
  },
  {
    answers: [
      "The cyclist might speed up",
      "The cyclist might get off their bicycle",
      "The cyclist might be unsettled if you pass too near them",
      "The cyclist might have to make a left turn",
    ],
    category: 13,
    correctAnswer: 2,
    explanation:
      "Before overtaking, assess the situation. Look well ahead to see whether the cyclist will need to change direction. Be especially aware of a cyclist approaching parked vehicles, as they'll need to alter course. Don't pass too closely or cut in sharply as this could unsettle the rider.",
    id: 45,
    mediaType: "image",
    question:
      "You're about to overtake a cyclist. Why should you leave them as much room as you would give to a car?",
  },
  {
    answers: [
      "Briefly sound your horn",
      "Go very slowly",
      "Pass quickly but quietly",
      "Herd them to the side of the road",
    ],
    category: 13,
    content: require("./../assets/qimage/AB2908n.jpg"),
    correctAnswer: 1,
    explanation:
      "Slow down and be ready to stop if you see animals in the road ahead. Animals are easily frightened by noise and vehicles passing too close to them. Stop if you're signalled to do so by the person in charge.",
    id: 46,
    mediaType: "image",
    question: "What should you do when you're passing loose sheep on the road?",
  },
  {
    answers: [
      "You're approaching roadworks",
      "You're approaching an organised walk",
      "You're approaching a slow-moving vehicle",
      "You're approaching a traffic danger spot",
    ],
    category: 13,
    correctAnswer: 1,
    explanation:
      "The people on the walk should be keeping to the left, but don’t assume this. Pass carefully, making sure you have time to do so safely. Be aware that the pedestrians have their backs to you and may not know that you’re there.",
    id: 47,
    mediaType: "image",
    question:
      "At night, what does it mean if you see a pedestrian wearing reflective clothing and carrying a bright red light?",
  },
  {
    answers: [
      "By always staying close to the vehicle in front",
      "By never going over 40 mph",
      "By staying in the left-hand lane on all roads",
      "By taking further training",
    ],
    category: 13,
    correctAnswer: 3,
    explanation:
      "New drivers and riders are often involved in a collision or incident early in their driving career. Due to a lack of experience, they may not react to hazards appropriately. Approved training courses are offered by driver and rider training schools for people who have passed their test but want extra training.",
    id: 48,
    mediaType: "image",
    question:
      "You’ve just passed your driving test. How can you reduce your risk of being involved in a collision?",
  },
  {
    answers: [
      "Turn in because the pedestrians are safe on the pavement",
      "Wave at the pedestrians, inviting them to cross the road",
      "Wait and give way to the pedestrians",
      "Sound your horn to alert the pedestrians to your presence",
    ],
    category: 13,
    correctAnswer: 2,
    explanation:
      "You should give way to pedestrians crossing or waiting to cross the road into which or from which you're turning. Be patient if they're cautious and take their time checking that it’s safe before they step into the road.",
    id: 49,
    mediaType: "image",
    question:
      "You're turning right from a main road into a side road. There's no oncoming traffic. What should you do if pedestrians are standing on the pavement waiting to cross the side road?",
  },
  {
    answers: [
      "Sound your horn to alert them to your presence",
      "Stay behind and allow them to ride in this position",
      "Move across to the right and try to ease past them",
      "Get up close behind to encourage them to move aside",
    ],
    category: 13,
    correctAnswer: 1,
    explanation:
      "On narrow sections of road, horse riders may ride in the centre of the lane. This is for their own safety as it makes them more visible. You should be patient and only pass when it’s safe to do so.",
    id: 50,
    mediaType: "image",
    question:
      "You're travelling on a narrow section of road. What should you do if a horse rider ahead is riding in the centre of the lane?",
  },
  {
    answers: [
      "At least as much room as you would if you were overtaking a car",
      "At least a car’s width",
      "At least a car’s length",
      "At least 2 car widths",
    ],
    category: 13,
    correctAnswer: 0,
    explanation:
      "You should leave cyclists at least as much room as you would if you were overtaking a car. Leave them more room if you’re overtaking at speeds over 30 mph.",
    id: 51,
    mediaType: "image",
    question:
      "You’re about to overtake a cyclist on a road that has a 30 mph speed limit. How much room should you leave them as you overtake?",
  },
  {
    answers: [
      "Flash your lights to encourage the pedestrian to cross",
      "Carry on turning into the side road",
      "Sound your horn to let the pedestrian know you’re there",
      "Wait and give way to the pedestrian",
    ],
    category: 13,
    correctAnswer: 3,
    explanation:
      "You should give way to pedestrians crossing or waiting to cross the road into which or from which you're turning. Be patient if they’re cautious, and let them check that it’s safe from all directions before they step into the road. Do not signal or wave them to cross.",
    id: 52,
    mediaType: "image",
    question:
      "You're turning left from a main road into a side road. What should you do if there’s a pedestrian on the pavement waiting to cross the side road?",
  },
  {
    answers: [
      "Look through the rear window only",
      "Get out and check",
      "Check the mirrors only",
      "Carry on, assuming it's clear",
    ],
    category: 13,
    correctAnswer: 1,
    explanation:
      "If you can't tell whether there's anything behind you, it's always safest to check before reversing. There may be a small child or a low obstruction close behind your car.",
    id: 53,
    mediaType: "image",
    question:
      "You want to reverse into a side road. What should you do if you aren't sure that the area behind your car is clear?",
  },
  {
    answers: [
      "Wave to the pedestrian to stop",
      "Give way to the pedestrian",
      "Sound your horn to warn the pedestrian",
      "Reverse before the pedestrian starts to cross",
    ],
    category: 13,
    correctAnswer: 1,
    explanation:
      "If you need to reverse into a side road, try to find a place that’s free from traffic and pedestrians. Look all around before and during the manoeuvre. Stop and give way to any pedestrians who want to cross behind you. Avoid waving them across, sounding the horn, flashing your lights or giving any signals that could mislead them and create a dangerous situation.",
    id: 54,
    mediaType: "image",
    question:
      "You're about to reverse into a side road. What should you do if a pedestrian is waiting to cross behind your car?",
  },
  {
    answers: ["Motorcyclists", "Car drivers", "Cyclists", "Children"],
    category: 13,
    correctAnswer: 3,
    explanation:
      "It may not be possible to see a small child through the rear windscreen of your vehicle. Be aware of this before you reverse. If there are children about, get out and check that it's clear before reversing. ",
    id: 55,
    mediaType: "image",
    question:
      "Which road users are most difficult to see when you're reversing your car?",
  },
  {
    answers: [
      "Move out quickly, but be prepared to stop",
      "Sound your horn and pull out if there's no reply",
      "Stop, then move forward slowly until you have a clear view",
      "Stop, get out and look along the main road to check",
    ],
    category: 13,
    correctAnswer: 2,
    explanation:
      "If you want to turn right from a junction and your view is restricted, stop. Ease forward until you can see – something might be approaching.nIf you don't know, don't go.",
    id: 56,
    mediaType: "image",
    question:
      "You want to turn right from a junction. What should you do if your view is restricted by parked vehicles?",
  },
  {
    answers: [
      "To look for pedestrians about to cross",
      "To check for overtaking vehicles",
      "To make sure the side road is clear",
      "To check for emerging traffic",
    ],
    category: 13,
    correctAnswer: 1,
    explanation:
      "A motorcyclist could be riding along the outside of the queue. Always check your mirror before turning, as situations behind you can change while you've been waiting to turn.",
    id: 57,
    mediaType: "image",
    question:
      "You're at the front of a queue of traffic waiting to turn right into a side road. Why is it important to check your right mirror just before turning?",
  },
  {
    answers: [
      "Signal the pedestrian to cross",
      "Always wait for the green light before proceeding",
      "Give way to any pedestrians on the crossing",
      "Wait for the red-and-amber light before proceeding",
    ],
    category: 13,
    correctAnswer: 2,
    explanation:
      "The flashing amber light allows pedestrians already on the crossing to get to the other side before a green light shows to the traffic. Be aware that some pedestrians, such as older people and young children, need longer to cross. Let them do this at their own pace.",
    id: 58,
    mediaType: "image",
    question:
      "You've driven up to a pelican crossing. What must you do while the amber light is flashing?",
  },
  {
    answers: [
      "Wait for them to finish crossing",
      "Drive in front of them",
      "Edge forward slowly",
      "Sound your horn",
    ],
    category: 13,
    correctAnswer: 0,
    explanation:
      "At a pelican crossing, the green light means you may proceed as long as the crossing is clear. If someone hasn’t finished crossing, be patient and wait for them, whether they're disabled or not.",
    id: 59,
    mediaType: "image",
    question:
      "You've stopped at a pelican crossing. What should you do if a disabled person is crossing slowly in front of you and the lights change to green?",
  },
  {
    answers: [
      "Continue driving at the same speed and sound your horn",
      "Continue driving at the same speed and flash your headlights",
      "Slow down and be prepared to stop for children",
      "Stop and wave the children across to fetch their ball",
    ],
    category: 13,
    content: require("./../assets/qimage/BB1142n1.jpg"),
    correctAnswer: 2,
    explanation:
      "Beware of children playing in the street and running out into the road. If a ball bounces out from the pavement, slow down and be prepared to stop. Don’t encourage anyone to retrieve it. Other road users may not see your signal and you might lead a child into a dangerous situation.",
    id: 60,
    mediaType: "image",
    question:
      "You're driving past a line of parked cars. What should you do if a ball bounces out into the road ahead?",
  },
  {
    answers: [
      "Cancel your right-turn signal",
      "Select first gear",
      "Check for traffic overtaking on your right",
      "Stop and set the parking brake",
    ],
    category: 13,
    correctAnswer: 2,
    explanation:
      "In some circumstances, your indicators may be difficult to see and another road user may not realise you're about to turn. A final check in your mirror and blind spot can help you to see an overtaking vehicle, so that you can avoid turning across their path.",
    id: 61,
    mediaType: "image",
    question:
      "You want to turn right from a main road into a side road. What should you do just before turning?",
  },
  {
    answers: [
      "Sound the horn and flash your lights",
      "Look for motorcyclists filtering through the traffic",
      "Give a ‘slowing down’ arm signal",
      "Change down to first gear",
    ],
    category: 13,
    correctAnswer: 1,
    explanation:
      "In queuing traffic, motorcyclists could be passing you on either side. Use your mirrors and check your blind area before changing lanes or changing direction.",
    id: 62,
    mediaType: "image",
    question:
      "You're driving in a slow-moving queue of traffic. What should you do just before changing lane?",
  },
  {
    answers: [
      "The bus might have broken down",
      "Pedestrians might come from behind the bus",
      "The bus might move off suddenly",
      "The bus might remain stationary",
    ],
    category: 13,
    correctAnswer: 1,
    explanation:
      "If you see a bus ahead, watch out for pedestrians. They might not be able to see you if they’re behind the bus.",
    id: 63,
    mediaType: "image",
    question:
      "You're driving in town. Why should you be careful if there's a bus at a bus stop on the other side of the road?",
  },
  {
    answers: [
      "Drive up close and overtake as soon as possible",
      "Speed isn't important but allow plenty of room",
      "Use your horn just once to warn them",
      "Drive slowly and leave plenty of room",
    ],
    category: 13,
    correctAnswer: 3,
    explanation:
      "When you decide to overtake a horse rider, make sure you can do so safely before you move out. Leave them plenty of room and pass slowly. Passing too close could startle the horse and unseat the rider.",
    id: 64,
    mediaType: "image",
    question: "How should you overtake horse riders?",
  },
  {
    answers: [
      "The rider may turn off suddenly to get out of the wind",
      "The rider may be blown in front of you",
      "The rider may stop suddenly",
      "The rider may be travelling faster than normal",
    ],
    category: 13,
    correctAnswer: 1,
    explanation:
      "If you’re driving in high winds, be aware that the conditions might make a motorcyclist (or cyclist) swerve or wobble. Take this into consideration if you’re following or wish to overtake a two-wheeled vehicle.",
    id: 65,
    mediaType: "image",
    question:
      "Why should you allow extra room while overtaking a motorcyclist on a windy day?",
  },
  {
    answers: [
      "On dual carriageways",
      "At junctions",
      "At zebra crossings",
      "On one-way streets",
    ],
    category: 13,
    correctAnswer: 1,
    explanation:
      "Motorcyclists and cyclists are often more difficult to see at junctions. They're easily hidden from view and you may not be able to see them approaching a junction if your view is partially blocked; for example, by other traffic.",
    id: 66,
    mediaType: "image",
    question:
      "Where should you take particular care to look for motorcyclists and cyclists?",
  },
  {
    answers: [
      "You may park on the lines when dropping off schoolchildren",
      "You may park on the lines when picking up schoolchildren",
      "You shouldn't wait or park your vehicle here",
      "You must stay with your vehicle if you park here",
    ],
    category: 13,
    content: require("./../assets/qimage/BB1577n1.jpg"),
    correctAnswer: 2,
    explanation:
      "Parking here would block other road users' view of the school entrance and would endanger the lives of children on their way to and from school.",
    id: 67,
    mediaType: "image",
    question:
      "The road outside this school is marked with yellow zigzag lines. What do these lines mean?",
  },
  {
    answers: [
      "Accelerate past quickly and sound your horn",
      "Slow down and wave the cyclist across",
      "Brake sharply and flash your headlights",
      "Slow down and be prepared to stop for a cyclist",
    ],
    category: 13,
    correctAnswer: 3,
    explanation:
      "Scan the road as you drive. Try to anticipate hazards by being aware of the places where they're likely to occur. You’ll then be able to react in good time.",
    id: 68,
    mediaType: "image",
    question:
      "You're driving past parked cars. What should you do if you see a bicycle wheel sticking out between the cars?",
  },
  {
    answers: [
      "Set your mirror to the anti-dazzle position",
      "Set your mirror to dazzle the other driver",
      "Brake sharply to a stop",
      "Switch your rear lights on and off",
    ],
    category: 13,
    correctAnswer: 0,
    explanation:
      "The interior mirror of most vehicles can be set to an anti-dazzle position. You'll still be able to see the lights of the traffic behind you, but the dazzle will be greatly reduced.",
    id: 69,
    mediaType: "image",
    question:
      "You're driving at night. What should you do if you're dazzled by a vehicle behind you?",
  },
  {
    answers: [
      "Continue on your way",
      "Wave to the person to cross",
      "Wave to the person to wait",
      "Be prepared to stop",
    ],
    category: 13,
    correctAnswer: 3,
    explanation:
      "You should slow down and be prepared to stop, as you would for an able-bodied person. Don’t wave them across, as other traffic may not stop.",
    id: 70,
    mediaType: "image",
    question:
      "You're driving towards a zebra crossing. What should you do if a person in a wheelchair is waiting to cross?",
  },
  {
    answers: [
      "Anything overtaking the lorry will be hidden from view",
      "The lorry could suddenly speed up",
      "The lorry might be slowing down",
      "The load on the lorry might be unstable",
    ],
    category: 7,
    correctAnswer: 0,
    explanation:
      "Large vehicles can hide other vehicles that are overtaking – especially motorcycles. You need to be aware of the possibility of hidden vehicles and not assume that it's safe to turn.",
    id: 1,
    mediaType: "image",
    question:
      "You're waiting to turn right out of a minor road. It's clear to the left but a lorry is coming from the right. Why should you wait, even if you have enough time to turn?",
  },
  {
    answers: [
      "Get closer in order to pass it quickly",
      "Stay well back and give it room",
      "Assume the signal is wrong and that it's turning right",
      "Overtake it as it starts to slow down",
    ],
    category: 7,
    correctAnswer: 1,
    explanation:
      "A long vehicle may need to swing out in the opposite direction as it approaches a turn, to allow the rear wheels to clear the kerb. Don’t try to filter through if you see a gap; as the lorry turns, the gap will close.",
    id: 2,
    mediaType: "image",
    question:
      "You're following a long vehicle as it approaches a crossroads. What should you do if it signals left but moves out to the right?",
  },
  {
    answers: [
      "Warn the driver about the wrong signal",
      "Wait behind the long vehicle",
      "Report the driver to the police",
      "Overtake on the right-hand side",
    ],
    category: 7,
    correctAnswer: 1,
    explanation:
      "When a long vehicle is going to turn right, it may need to keep close to the left-hand kerb. This is to prevent the rear end of the trailer cutting the corner. You need to be aware of how long vehicles behave in such situations. Don’t overtake the lorry, because it could turn as you’re alongside. Stay behind and wait for it to turn.",
    id: 3,
    mediaType: "image",
    question:
      "You're following a long vehicle approaching a crossroads. What should you do if the driver signals right but moves close to the left-hand kerb?",
  },
  {
    answers: [
      "Sound your horn",
      "Overtake on the left",
      "Follow the same course as the lorry",
      "Keep well back",
    ],
    category: 7,
    correctAnswer: 3,
    explanation:
      "At mini-roundabouts, there isn’t much room for a long vehicle to manoeuvre. It will have to swing out wide so that it can complete the turn safely. Keep well back and don’t try to move up alongside it.",
    id: 4,
    mediaType: "image",
    question:
      "You’re approaching a mini-roundabout. What should you do if a long vehicle in front signals left but positions over to the right?",
  },
  {
    answers: [
      "To give yourself acceleration space if you decide to overtake",
      "To get the best view of the road ahead",
      "To leave a gap in case the vehicle stops and rolls back",
      "To offer other drivers a safe gap if they want to overtake you",
    ],
    category: 7,
    correctAnswer: 1,
    explanation:
      "When following a large vehicle, keep well back. If you’re too close, you won’t be able to see the road ahead and the driver of the long vehicle might not be able to see you in their mirrors.",
    id: 5,
    mediaType: "image",
    question:
      "You're driving on a single carriageway road. Why should you keep well back while you're following a large vehicle?",
  },
  {
    answers: [
      "Accelerate past the bus",
      "Look for pedestrians",
      "Sound your horn",
      "Pull in closely behind the bus",
    ],
    category: 7,
    correctAnswer: 1,
    explanation:
      "People may be running to catch the bus or passengers leaving the bus might wish to cross the road in front of the bus. Look out for them if you intend to go past it. Consider how many people are waiting to get on the bus – check the queue if you can. The bus might move off straight away if no-one is waiting to get on.nIf a bus is signalling to pull out, give it priority if it’s safe to do so.",
    id: 6,
    mediaType: "image",
    question:
      "You're travelling behind a bus. What should you do if it pulls up at a bus stop?",
  },
  {
    answers: [
      "Drop back until you can see better",
      "Put your headlights on full beam",
      "Keep close to the lorry, away from the spray",
      "Speed up and overtake quickly",
    ],
    category: 7,
    content: require("./../assets/qimage/AB2193n1.jpg"),
    correctAnswer: 0,
    explanation:
      "Large vehicles can throw up a lot of spray when it's wet. This makes it difficult for drivers behind to see the road ahead. You'll be able to see more by dropping back further, out of the spray. This will also increase your separation distance, giving you more room to stop if you have to.",
    id: 7,
    mediaType: "image",
    question:
      "You're following a lorry on a wet road. What should you do when spray makes it difficult to see the road ahead?",
  },
  {
    answers: [
      "Sound your horn",
      "Drop back further",
      "Flash your headlights",
      "Start to overtake",
    ],
    category: 7,
    correctAnswer: 1,
    explanation:
      "Sometimes your separation distance is shortened by a driver moving into the gap you've allowed. When this happens, react positively, stay calm and drop further back to re-establish a safe following distance.",
    id: 8,
    mediaType: "image",
    question:
      "You're leaving a safe gap as you follow a large vehicle. What should you do if a car moves into this gap?",
  },
  {
    answers: [
      "Get past before it moves",
      "Allow it to pull away, if it's safe to do so",
      "Flash your headlights as you approach",
      "Signal left and wave the bus on",
    ],
    category: 7,
    correctAnswer: 1,
    explanation:
      "Try to give way to buses if you can do so safely, especially when the driver signals to pull away from a bus stop. Look out for people getting off the bus or running to catch it, because they may cross the road without looking. Don’t accelerate to get past the bus, and don't flash your lights, as this could mislead other road users.",
    id: 9,
    mediaType: "image",
    question:
      "What should you do when you're approaching a bus that's signalling to move away from a bus stop?",
  },
  {
    answers: [
      "Follow it closely and keep moving out to see the road ahead",
      "Flash your headlights for the oncoming traffic to give way",
      "Stay behind until the driver waves you past",
      "Keep well back so that you get a good view of the road ahead",
    ],
    category: 7,
    correctAnswer: 3,
    explanation:
      "When you're following a long vehicle, stay well back so that you can get a better view of the road ahead. The closer you get, the less you'll be able to see of the road. Be patient and don't take a gamble. Only overtake when you're certain that you can complete the manoeuvre safely.",
    id: 10,
    mediaType: "image",
    question:
      "What should you do if you want to overtake a long, slow-moving vehicle on a busy road?",
  },
  {
    answers: ["Cyclists", "Motorcyclists", "High-sided vehicles", "Cars"],
    category: 7,
    correctAnswer: 3,
    explanation:
      "Although cars are the least likely to be affected, side winds can take anyone by surprise. This is most likely to happen after overtaking a large vehicle, when passing gaps between hedges or buildings, and on exposed sections of road.",
    id: 11,
    mediaType: "image",
    question: "Which vehicles are least likely to be affected by side wind?",
  },
  {
    answers: [
      "Slow down and be prepared to wait",
      "Make the lorry wait for you",
      "Flash your lights at the lorry",
      "Move to the right-hand side of the road",
    ],
    category: 7,
    content: require("./../assets/qimage/AB2737.jpg"),
    correctAnswer: 0,
    explanation:
      "When turning, long vehicles need much more room on the road than other vehicles. At junctions, they may take up the whole of the road space, so be patient and allow them the room they need.",
    id: 12,
    mediaType: "image",
    question: "What should you do as you approach this lorry?",
  },
  {
    answers: [
      "Overtake if you can leave plenty of room",
      "Overtake if there are no oncoming vehicles",
      "Wait for the driver to cancel their signal",
      "Wait for the vehicle to finish turning",
    ],
    category: 7,
    correctAnswer: 3,
    explanation:
      "Hold back and wait until the vehicle has turned before proceeding. Don't overtake, because the vehicle turning left could hide another vehicle emerging from the same junction.",
    id: 13,
    mediaType: "image",
    question:
      "You're following a large vehicle as it approaches a crossroads. What should you do if the driver signals to turn left?",
  },
  {
    answers: [
      "It will take longer to overtake a large vehicle",
      "A large vehicle will be fitted with a speed limiter",
      "A large vehicle will have air brakes",
      "It will take longer for a large vehicle to accelerate",
    ],
    category: 7,
    correctAnswer: 0,
    explanation:
      "Depending on relative speed, it will usually take you longer to pass a lorry than other vehicles. Hazards to watch for include oncoming traffic, junctions ahead, bends or dips that could restrict your view, and signs or road markings that prohibit overtaking. Make sure you can see that it’s safe to complete the manoeuvre before you start to overtake.",
    id: 14,
    mediaType: "image",
    question:
      "Why is it more difficult to overtake a large vehicle than a car?",
  },
  {
    answers: [
      "Overtake the motorcyclist immediately",
      "Keep well back",
      "Stay level with the motorcyclist",
      "Keep close to the motorcyclist",
    ],
    category: 7,
    correctAnswer: 1,
    explanation:
      "Windy weather affects motorcyclists more than other vehicles. In windy conditions, high-sided vehicles cause air turbulence. You should keep well back, as the motorcyclist could be blown off course. ",
    id: 15,
    mediaType: "image",
    question:
      "It's very windy. What should you do if you're behind a motorcyclist who's overtaking a high-sided vehicle?",
  },
  {
    answers: [
      "Flash your lights to warn the driver of your presence",
      "Continue at the same speed but sound your horn as a warning",
      "Watch carefully for the sudden appearance of pedestrians",
      "Pass the bus as quickly as you possibly can",
    ],
    category: 7,
    correctAnswer: 2,
    explanation:
      "As you approach, look out for any signal the driver might make. If you pass the vehicle, watch out for pedestrians attempting to cross the road from behind the bus. They’ll be hidden from view until the last moment.",
    id: 16,
    mediaType: "image",
    question: "What should you do if there's a bus at a bus stop ahead of you?",
  },
  {
    answers: [
      "Sound your horn and continue",
      "Slow down and give way",
      "Report the driver to the police",
      "Squeeze through the gap",
    ],
    category: 7,
    content: require("./../assets/qimage/BB1399.jpg"),
    correctAnswer: 1,
    explanation:
      "Sometimes, large vehicles may need more space than other road users. If a vehicle needs more time and space to turn, be prepared to stop and wait.",
    id: 17,
    mediaType: "image",
    question: "What should you be prepared to do in this situation?",
  },
  {
    answers: [
      "Because trams don't have a horn",
      "Because trams can't stop for cars",
      "Because trams don't have lights",
      "Because trams can't steer to avoid obstructions",
    ],
    category: 7,
    correctAnswer: 3,
    explanation:
      "You should take extra care when you first encounter trams. You'll have to get used to dealing with a different traffic system. nBe aware that trams can accelerate and travel very quickly, and they can't change direction to avoid obstructions.",
    id: 18,
    mediaType: "image",
    question:
      "Why should drivers be more careful on roads where trams also operate?",
  },
  {
    answers: [
      "Interior wide-angle mirror",
      "Extended-arm side mirrors",
      "Ordinary door mirrors",
      "Ordinary interior mirror",
    ],
    category: 7,
    correctAnswer: 1,
    explanation:
      "Towing a large trailer or caravan can greatly reduce your view of the road behind. You may need to fit extended-arm side mirrors so that you can see clearly behind and down both sides of the caravan or trailer.",
    id: 19,
    mediaType: "image",
    question:
      "You're towing a caravan. Which is the safest type of rear-view mirror to use?",
  },
  {
    answers: [
      "Main-beam headlights",
      "Sidelights only",
      "Rear fog lights if visibility is more than 100 metres (328 feet)",
      "Dipped headlights",
    ],
    category: 7,
    correctAnswer: 3,
    explanation:
      "You must make sure that other road users can see you, but you don't want to dazzle them. Use your dipped headlights during the day if visibility is poor. If visibility falls below 100 metres (328 feet), you may use your rear fog lights, but don’t forget to turn them off when the visibility improves.",
    id: 20,
    mediaType: "image",
    question:
      "You're driving in heavy traffic on a wet road. Which lights should you use if there's a lot of surface spray?",
  },
  {
    answers: [
      "Overtake very slowly",
      "Keep close as you pass",
      "Sound your horn repeatedly",
      "Allow extra room",
    ],
    category: 7,
    correctAnswer: 3,
    explanation:
      "Cyclists, and motorcyclists, are very vulnerable in high winds. They can easily be blown well off course and veer into your path. Always allow plenty of room when overtaking them. Passing too close could cause a draught and unbalance the rider.",
    id: 21,
    mediaType: "image",
    question:
      "What should you do if you overtake a cyclist when it's very windy?",
  },
  {
    answers: [
      "When you’re in a one-way street",
      "When approaching a motorway slip road where you’ll be turning off",
      "When the vehicle in front is signalling to turn left",
      "When a slower vehicle is travelling in the right-hand lane of a dual carriageway",
    ],
    category: 8,
    correctAnswer: 0,
    explanation:
      "You may pass slower vehicles on their left while travelling along a one-way street. Be aware of drivers who may need to change lanes and may not expect faster traffic passing on their left.",
    id: 1,
    mediaType: "image",
    question: "When may you overtake another vehicle on their left?",
  },
  {
    answers: [
      "It will be doubled",
      "It will be halved",
      "It will be ten times greater",
      "It will be no different",
    ],
    category: 8,
    correctAnswer: 0,
    explanation:
      "The road will be very wet and spray from other vehicles will reduce your visibility. Tyre grip will also be reduced, increasing your stopping distance. You should at least double your separation distance to make sure you can stop safely in the space you've allowed.",
    id: 2,
    mediaType: "image",
    question:
      "You're travelling in very heavy rain. How is this likely to affect your overall stopping distance?",
  },
  {
    answers: [
      "Wait until a bend so that you can see oncoming headlights",
      "Sound your horn twice before moving out",
      "Go past slowly so that you can react to unseen hazards",
      "Beware of bends in the road ahead",
    ],
    category: 8,
    correctAnswer: 3,
    explanation:
      "Don't overtake if there’s a possibility of a road junction, bend or brow of a bridge or hill ahead. There are many hazards that are difficult to see in the dark. Only overtake if you’re certain that the road ahead is clear. Don’t take a chance.",
    id: 3,
    mediaType: "image",
    question: "What should you do when you're overtaking at night?",
  },
  {
    answers: [
      "When you're stationary in a queue of traffic",
      "When approaching a pelican crossing",
      "When approaching a zebra crossing",
      "When oncoming traffic prevents you turning right",
    ],
    category: 8,
    content: require("./../assets/qimage/AB2211.jpg"),
    correctAnswer: 3,
    explanation:
      "The purpose of a box junction is to keep the junction clear by preventing vehicles from stopping in the path of crossing traffic. nYou mustn't enter a box junction unless your exit is clear. However, you may enter the box and wait if you want to turn right and are only prevented from doing so by oncoming traffic.",
    id: 4,
    mediaType: "image",
    question: "When may you wait in a box junction?",
  },
  {
    answers: [
      "To stop road rage",
      "To make overtaking easier",
      "To slow traffic down",
      "To make parking easier",
    ],
    category: 8,
    correctAnswer: 2,
    explanation:
      "Traffic-calming measures make the roads safer for vulnerable road users, such as cyclists, pedestrians and children. These can be designed as chicanes, road humps or other obstacles that encourage drivers and riders to slow down. ",
    id: 5,
    mediaType: "image",
    question: "What's the reason for traffic-calming measures?",
  },
  {
    answers: ["Green", "Amber", "Red", "White"],
    category: 8,
    correctAnswer: 2,
    explanation:
      "Reflective studs are used to help you in poor visibility. Different colours are used so that you’ll know which lane you're in. These aren• red on the left-hand edge of the carriagewayn• white between lanes n• amber on the right-hand edge of the carriagewayn• green between the carriageway and slip roads.",
    id: 6,
    mediaType: "image",
    question:
      "What colour are the reflective studs along the left-hand edge of the motorway?",
  },
  {
    answers: [
      "Give directions",
      "Prevent cattle escaping",
      "Alert you to low tyre pressure",
      "Alert you to a hazard",
    ],
    category: 8,
    content: require("./../assets/qimage/AB2572n1.jpg"),
    correctAnswer: 3,
    explanation:
      "A rumble device consists of raised markings or strips, designed to give drivers an audible, visual and tactile warning. These devices are used in various locations, including in the line separating the hard shoulder and the left-hand lane on the motorway and on the approach to some hazards, to alert drivers to the need to slow down.",
    id: 7,
    mediaType: "image",
    question: "What's a rumble device designed to do?",
  },
  {
    answers: [
      "Follow other vehicles’ tail lights closely",
      "Avoid using dipped headlights",
      "Leave plenty of time for your journey",
      "Keep two seconds behind the vehicle ahead",
    ],
    category: 8,
    correctAnswer: 2,
    explanation:
      "If you’re planning to make a journey when it’s foggy, listen to the weather reports. If visibility is very poor, avoid making unnecessary journeys. If you do travel, leave plenty of time – and if someone is waiting for you to arrive, let them know that your journey will take longer than normal. This will also take off any pressure you may feel to rush.",
    id: 8,
    mediaType: "image",
    question:
      "What should you do if you have to make a journey in foggy conditions?",
  },
  {
    answers: [
      "Flash your headlights before overtaking",
      "Select a higher gear",
      "Switch your headlights to main beam before overtaking",
      "Make sure you don't dazzle other road users",
    ],
    category: 8,
    correctAnswer: 3,
    explanation:
      "To prevent your headlights from dazzling the driver of the car in front, wait until you’ve passed them before switching to main beam.",
    id: 9,
    mediaType: "image",
    question: "What must you do when you're overtaking a car at night?",
  },
  {
    answers: [
      "Sound your horn",
      "Overtake as soon as you can",
      "Flash your headlights",
      "Slow down and stay behind",
    ],
    category: 8,
    content: require("./../assets/qimage/AB2640n1.jpg"),
    correctAnswer: 3,
    explanation:
      "Be patient and stay behind the car in front. You shouldn't normally overtake other vehicles in areas subject to traffic calming. If you overtake here, you may easily exceed the speed limit, defeating the purpose of the traffic-calming measures.",
    id: 10,
    mediaType: "image",
    question:
      "You're travelling on a road that has road humps. What should you do when the driver in front is travelling more slowly than you?",
  },
  {
    answers: [
      "To show a safe distance between vehicles",
      "To keep the area clear of traffic",
      "To make you aware of your speed ",
      "To warn you to change direction",
    ],
    category: 8,
    content: require("./../assets/qimage/AB2665n1.jpg"),
    correctAnswer: 2,
    explanation:
      "These lines may be painted on the road on the approach to a roundabout, a village or a particular hazard. The lines are raised and painted yellow, and their purpose is to make you aware of your speed. Reduce your speed in good time so that you avoid having to brake harshly over the last few metres before reaching the junction. ",
    id: 11,
    mediaType: "image",
    question: "What’s the purpose of the yellow lines painted across the road?",
  },
  {
    answers: [
      "Reverse back to the main road",
      "Carry out an emergency stop",
      "Stop at a passing place",
      "Switch on your hazard warning lights",
    ],
    category: 8,
    correctAnswer: 2,
    explanation:
      "Take care when using single-track roads. It can be difficult to see around bends, because of hedges or fences, so expect to meet oncoming vehicles. Drive carefully and be ready to pull into or stop opposite a passing place, where you can pass each other safely.",
    id: 12,
    mediaType: "image",
    question:
      "What should you do when you meet an oncoming vehicle on a single-track road?",
  },
  {
    answers: [
      "To avoid puncturing the tyres on the edge of the drain covers",
      "To prevent the motorcycle sliding on the metal drain covers",
      "To help judge the bend using the drain covers as marker points",
      "To avoid splashing pedestrians on the pavement",
    ],
    category: 8,
    correctAnswer: 1,
    explanation:
      "Other drivers or riders may have to change course due to the size or characteristics of their vehicle. Understanding this will help you to anticipate their actions. Motorcyclists and cyclists will be checking the road ahead for uneven or slippery surfaces, especially in wet weather. They may need to move across their lane to avoid surface hazards such as potholes and drain covers.",
    id: 13,
    mediaType: "image",
    question:
      "The road is wet. Why would a motorcyclist steer around drain covers while they were cornering?",
  },
  {
    answers: [
      "You'll be on a slippery road",
      "Your brakes will be wet",
      "You'll be going down a long hill",
      "You'll have just crossed a long bridge",
    ],
    category: 8,
    content: require("./../assets/qimage/AB2821.jpg"),
    correctAnswer: 1,
    explanation:
      "A ford is a crossing over a stream that’s shallow enough to drive or ride through. After you’ve gone through a ford or deep puddle, your brakes will be wet and they won't work as well as usual. To dry them out, apply a light brake pressure while moving slowly. Don’t travel at normal speeds until you're sure your brakes are working properly again.",
    id: 14,
    mediaType: "image",
    question: "Why should you test your brakes after this hazard?",
  },
  {
    answers: [
      "The brakes don't work as well",
      "You'll be dazzled by other headlights",
      "The engine will take longer to warm up",
      "It's more difficult to see what's ahead",
    ],
    category: 8,
    correctAnswer: 3,
    explanation:
      "You won’t be able to see as far ahead in fog as you can on a clear day. You'll need to reduce your speed so that, if a hazard looms out of the fog, you have the time and space to take avoiding action.nTravelling in fog is hazardous. If you can, try to delay your journey until it has cleared.",
    id: 15,
    mediaType: "image",
    question:
      "Why should you reduce your speed when you're driving or riding in fog?",
  },
  {
    answers: [
      "The high gears will pull better",
      "The steering will feel heavier",
      "Overtaking will be easier",
      "The engine will work harder",
    ],
    category: 8,
    correctAnswer: 3,
    explanation:
      "The engine will need more power to pull the vehicle up the hill. When approaching a steep hill you should select a lower gear to help maintain your speed. You should do this without hesitation, so that you don’t lose too much speed before engaging the lower gear.",
    id: 16,
    mediaType: "image",
    question: "What will happen to your car when you drive up a steep hill?",
  },
  {
    answers: [
      "Increase your speed",
      "Be wary of a sudden gust",
      "Drive alongside very closely",
      "Expect normal conditions",
    ],
    category: 8,
    correctAnswer: 1,
    explanation:
      "The draught caused by other vehicles – particularly those with high sides – could be strong enough to push you out of your lane. Be prepared for a sudden gust of wind as you overtake large vehicles. Keep both hands on the steering wheel to help you keep full control.",
    id: 17,
    mediaType: "image",
    question:
      "You're driving on the motorway in windy conditions. What should you do as you overtake a high-sided vehicle?",
  },
  {
    answers: [
      "In case it changes direction suddenly",
      "In case its fog lights dazzle you",
      "In case it stops suddenly",
      "In case its brake lights dazzle you",
    ],
    category: 8,
    correctAnswer: 2,
    explanation:
      "If you’re following another road user in fog, stay well back. The driver in front won’t be able to see hazards until they’re close and might need to brake suddenly. Also, the road surface is likely to be wet and could be slippery.",
    id: 18,
    mediaType: "image",
    question:
      "You're driving in fog. Why should you keep well back from the vehicle in front?",
  },
  {
    answers: [
      "Leave parking lights switched on",
      "Leave dipped headlights and fog lights switched on",
      "Leave dipped headlights switched on",
      "Leave main-beam headlights switched on",
    ],
    category: 8,
    correctAnswer: 0,
    explanation:
      "If you have to park your vehicle in foggy conditions, try to find a place to park off the road. If this isn’t possible, park on the road facing in the same direction as the traffic. Leave your parking lights switched on and make sure they're clean.",
    id: 19,
    mediaType: "image",
    question: "What should you do if you park on the road when it's foggy?",
  },
  {
    answers: [
      "Pull down your sun visor",
      "Slow down or stop",
      "Flash your main-beam headlights",
      "Shade your eyes with your hand",
    ],
    category: 8,
    correctAnswer: 1,
    explanation:
      "If the headlights of an oncoming vehicle dazzle you, slow down or, if necessary, stop. Don’t close your eyes or swerve, as you'll increase your chances of having a collision. Don't flash your headlights either, as this could dazzle other drivers and make the situation worse.",
    id: 20,
    mediaType: "image",
    question:
      "You're driving at night. What should you do if you're dazzled by headlights coming towards you?",
  },
  {
    answers: [
      "When visibility is seriously reduced",
      "When they're fitted above the bumper",
      "When they aren't as bright as the headlights",
      "When an audible warning device is used",
    ],
    category: 8,
    content: require("./../assets/qimage/BB1325n1.jpg"),
    correctAnswer: 0,
    explanation:
      "Your fog lights must only be used when visibility is reduced to 100 metres (328 feet) or less. You need to be familiar with the layout of your dashboard so you're aware if your fog lights have been switched on in error, or you've forgotten to switch them off.",
    id: 21,
    mediaType: "image",
    question: "When may front fog lights be used?",
  },
  {
    answers: [
      "Leave them on if other drivers have their lights on",
      "Switch them off as long as visibility remains good",
      "Flash them to warn oncoming traffic that it's foggy",
      "Drive with them on instead of your headlights",
    ],
    category: 8,
    correctAnswer: 1,
    explanation:
      "Switch off your fog lights if the weather improves, but be prepared to use them again if visibility reduces to less than 100 metres (328 feet).",
    id: 22,
    mediaType: "image",
    question:
      "You're driving with your front fog lights switched on. What should you do if the fog has cleared?",
  },
  {
    answers: [
      "To allow your headlights to work",
      "To stop draining the battery",
      "To stop the engine losing power",
      "To prevent dazzling drivers behind",
    ],
    category: 8,
    correctAnswer: 3,
    explanation:
      "Don’t forget to switch off your fog lights when the weather improves. You could be prosecuted for driving with them on in good visibility. The high intensity of rear fog lights can dazzle drivers behind and make your brake lights difficult to notice.",
    id: 23,
    mediaType: "image",
    question:
      "Why should you switch off your rear fog lights when the fog has cleared?",
  },
  {
    answers: [
      "They'll make it safer when towing a trailer",
      "They'll protect you from larger vehicles",
      "They'll dazzle other drivers",
      "They'll make drivers behind keep back",
    ],
    category: 8,
    correctAnswer: 2,
    explanation:
      "Rear fog lights shine more brightly than normal rear lights, so that they show up in reduced visibility. When the visibility improves, you must switch them off; this stops them dazzling the driver behind.",
    id: 24,
    mediaType: "image",
    question: "What will happen if you use rear fog lights in good conditions?",
  },
  {
    answers: [
      "To help prevent damage to the road surface",
      "To help prevent wear to the tyres",
      "To help prevent skidding in deep snow",
      "To help prevent the brakes locking",
    ],
    category: 8,
    correctAnswer: 2,
    explanation:
      "Chains can be fitted to your wheels in snowy conditions. They can help you to move off without wheelspin, or to keep moving in deep snow. You'll still need to adjust your driving to suit these conditions.",
    id: 25,
    mediaType: "image",
    question: "Why would you fit chains to your wheels?",
  },
  {
    answers: [
      "By changing to a lower gear",
      "By selecting reverse gear",
      "By changing to a higher gear",
      "By selecting neutral",
    ],
    category: 8,
    correctAnswer: 0,
    explanation:
      "You should brake and slow down before selecting a lower gear. The gear can then be used to keep the speed low and help you control the vehicle. This is particularly helpful on long downhill stretches, where brake fade can occur if the brakes overheat.",
    id: 26,
    mediaType: "image",
    question: "How can you use your vehicle's engine to control your speed?",
  },
  {
    answers: [
      "Fuel spillage will occur",
      "Engine damage may be caused",
      "You'll have less steering and braking control",
      "It will wear tyres out more quickly",
    ],
    category: 8,
    correctAnswer: 2,
    explanation:
      "Letting your vehicle roll or coast in neutral reduces your control over steering and braking. This can be dangerous on downhill slopes, where your vehicle could pick up speed very quickly.",
    id: 27,
    mediaType: "image",
    question:
      "Why could it be dangerous to keep the clutch down, or select neutral, for long periods of time while you're driving?",
  },
  {
    answers: [
      "Four times the normal distance",
      "Six times the normal distance",
      "Eight times the normal distance",
      "Ten times the normal distance",
    ],
    category: 8,
    correctAnswer: 3,
    explanation:
      "Don't travel in icy or snowy weather unless your journey is essential.nDrive extremely carefully when roads are or may be icy. Stopping distances can be ten times greater than on dry roads.",
    id: 28,
    mediaType: "image",
    question:
      "You're driving on an icy road. What distance from the car in front should you drive?",
  },
  {
    answers: [
      "Use only your sidelights",
      "Use your headlights",
      "Use rear fog lights",
      "Use front fog lights",
    ],
    category: 8,
    correctAnswer: 1,
    explanation:
      "If you’re driving on a motorway at night or in poor visibility, you must always use your headlights, even if the road is well lit. Other road users must be able to see you, but you should avoid causing dazzle.",
    id: 29,
    mediaType: "image",
    question:
      "Which lights must you use if you're driving on a well-lit motorway at night?",
  },
  {
    answers: [
      "Front fog lights",
      "Main-beam headlights",
      "Sidelights only",
      "Dipped headlights",
    ],
    category: 8,
    correctAnswer: 3,
    explanation:
      "If you’re driving behind other traffic on the motorway at night, use dipped headlights. Main-beam headlights will dazzle the other drivers. Your headlights’ dipped beam should fall short of the vehicle in front.",
    id: 30,
    mediaType: "image",
    question:
      "You're driving on a motorway at night. Which lights should you have on if there are other vehicles just ahead of you?",
  },
  {
    answers: [
      "The speed limit",
      "The street lighting",
      "The time of day",
      "The condition of the tyres",
    ],
    category: 8,
    correctAnswer: 3,
    explanation:
      "Having tyres correctly inflated and in good condition will ensure they have maximum grip on the road; how well your tyres grip the road has a significant effect on your car's stopping distance.",
    id: 31,
    mediaType: "image",
    question: "What will affect your vehicle's stopping distance?",
  },
  {
    answers: [
      "When you only use the parking brake",
      "When you're in neutral",
      "When you change to a lower gear",
      "When you change to a higher gear",
    ],
    category: 8,
    correctAnswer: 2,
    explanation:
      "When you take your foot off the accelerator, engines have a natural resistance to turn, caused mainly by the cylinder compression. Changing to a lower gear requires the engine to turn faster and so it will have greater resistance than when it's made to turn more slowly. When going downhill, changing to a lower gear will therefore help to keep the vehicle's speed in check. ",
    id: 32,
    mediaType: "image",
    question: "When will you feel the effects of engine braking?",
  },
  {
    answers: [
      "Headlights and fog lights",
      "Front fog lights",
      "Dipped headlights",
      "Rear fog lights",
    ],
    category: 8,
    correctAnswer: 2,
    explanation:
      "Only use your fog lights when visibility is seriously reduced. Use dipped headlights in poor conditions because this helps other road users to see you without the risk of causing dazzle.",
    id: 33,
    mediaType: "image",
    question:
      "Which lights should you switch on when daytime visibility is poor but not seriously reduced?",
  },
  {
    answers: [
      "To make them more visible when driving at high speed",
      "To show when they've broken down in a dangerous position",
      "To make them more visible in thick fog",
      "To warn drivers following closely to drop back",
    ],
    category: 8,
    correctAnswer: 2,
    explanation:
      "Rear fog lights make it easier to spot a vehicle ahead in foggy conditions. Avoid the temptation to use other vehicles' lights as a guide, as they may give you a false sense of security.",
    id: 34,
    mediaType: "image",
    question: "Why are vehicles fitted with rear fog lights?",
  },
  {
    answers: [
      "Whether you should fit an amber flashing beacon to your car",
      "Whether you should drive without wearing your seat belt",
      "Whether you should wear sunglasses to reduce the glare",
      "Whether your journey is essential",
    ],
    category: 8,
    correctAnswer: 3,
    explanation:
      "Consider whether the increased risk is worth it. If the weather conditions are bad and your journey isn’t essential, then don't drive. If you have to drive, make sure you're well prepared in case you get stuck.",
    id: 35,
    mediaType: "image",
    question:
      "There's been a heavy fall of snow. What should you consider before driving in these conditions?",
  },
  {
    answers: [
      "The radiator has enough anti-freeze",
      "You have a warning triangle in the vehicle",
      "The windows and lights are clean and clear",
      "You have a mobile phone with you",
    ],
    category: 8,
    correctAnswer: 2,
    explanation:
      "If you have to drive in fog, switch your dipped headlights on and keep all your windows clear. You should always be able to pull up within the distance you can see ahead.",
    id: 36,
    mediaType: "image",
    question:
      "What should you check before you start a journey in foggy weather?",
  },
  {
    answers: [
      "Switch off your fog lights",
      "Keep your rear fog lights switched on",
      "Keep your front fog lights switched on",
      "Leave your fog lights switched on in case the fog returns",
    ],
    category: 8,
    correctAnswer: 0,
    explanation:
      "You must turn off your fog lights if visibility is more than 100 metres (328 feet). Be prepared for the fact that the fog may be patchy and you may need to turn them on again if the fog returns.",
    id: 37,
    mediaType: "image",
    question:
      "You've been driving in fog. What must you do when the visibility improves?",
  },
  {
    answers: [
      "They may be confused with brake lights",
      "The bulbs would fail",
      "Electrical systems could be overloaded",
      "Direction indicators may not work properly",
    ],
    category: 8,
    correctAnswer: 0,
    explanation:
      "If your rear fog lights are left on when it isn’t foggy, the glare they cause makes it difficult for road users behind to know whether you’re braking or you’ve just forgotten to turn off your rear fog lights. This can be a particular problem on wet roads and on motorways. If you leave your rear fog lights on at night, road users behind you are likely to be dazzled and this could put them at risk.",
    id: 38,
    mediaType: "image",
    question:
      "Why is it dangerous to leave rear fog lights switched on after the fog has cleared?",
  },
  {
    answers: [
      "It will use more fuel",
      "It will cause the engine to overheat",
      "It will reduce your control",
      "It will improve tyre wear",
    ],
    category: 8,
    correctAnswer: 2,
    explanation:
      "Holding the clutch down or staying in neutral for too long will cause your vehicle to freewheel. This is known as 'coasting' and it's dangerous because it reduces your control of the vehicle. ",
    id: 39,
    mediaType: "image",
    question:
      "What will happen if you hold the clutch pedal down or roll in neutral for too long?",
  },
  {
    answers: [
      "The fuel consumption will increase",
      "The engine will overheat",
      "The tyres will wear more quickly",
      "The vehicle will gain speed more quickly",
    ],
    category: 8,
    correctAnswer: 3,
    explanation:
      "Coasting is when you allow the vehicle to freewheel in neutral or with the clutch pedal depressed. When travelling downhill, this will cause the vehicle to gain speed more quickly as you lose the benefits of engine braking; it may even lead to a loss of control. You shouldn't coast, especially when approaching hazards such as junctions or bends and when travelling downhill.",
    id: 40,
    mediaType: "image",
    question: "Why is it bad technique to coast when you're driving downhill?",
  },
  {
    answers: [
      "Switch on your hazard warning lights",
      "Use a low gear and drive slowly",
      "Use a high gear to prevent wheelspin",
      "Switch on your windscreen wipers",
    ],
    category: 8,
    content: require("./../assets/qimage/BB1718.jpg"),
    correctAnswer: 1,
    explanation:
      "In normal conditions, a ford can be crossed quite safely by driving through it slowly. The water may affect your brakes, so when you're clear of the ford, test them before you resume normal driving.",
    id: 41,
    mediaType: "image",
    question: "What should you do when dealing with this hazard?",
  },
  {
    answers: [
      "It will cause the car to skid",
      "It will make the engine stall",
      "The engine will run faster",
      "There won't be any engine braking",
    ],
    category: 8,
    correctAnswer: 3,
    explanation:
      "Try to look and plan well ahead. Plan your approach to hazards and select the correct gear in good time. This will help give you the control you need to deal with anything unexpected that may occur.",
    id: 42,
    mediaType: "image",
    question:
      "Why is travelling in neutral for long distances (known as coasting) bad driving technique?",
  },
  {
    answers: [
      "All the time you're driving",
      "When you're driving along narrow streets",
      "When you're driving in poor visibility",
      "When you're parking",
    ],
    category: 8,
    correctAnswer: 2,
    explanation:
      "You must use dipped headlights when daytime visibility is seriously reduced, generally to 100 metres (328 feet) or less. You may also use front or rear fog lights, but they must be switched off when visibility improves.",
    id: 43,
    mediaType: "image",
    question: "When must you use dipped headlights during the day?",
  },
  {
    answers: [
      "Brake firmly when you reach each road hump",
      "Vary your speed between each road hump",
      "Stay at a reduced speed for the whole stretch of road",
      "Set your car's cruise control",
    ],
    category: 8,
    correctAnswer: 2,
    explanation:
      "Traffic-calming measures are designed to protect vulnerable road users. Keep your speed down where traffic-calming measures are in place.",
    id: 44,
    mediaType: "image",
    question:
      "What should you do when you're driving along a road that has a series of road humps?",
  },
  {
    answers: [
      "Carry on along the hard shoulder until you see a safe gap",
      "Stop at the end of the slip road and look for a safe gap",
      "Use the slip road to accelerate until you're moving much faster than the motorway traffic",
      "Match your speed to traffic in the left-hand lane and filter into a safe gap",
    ],
    category: 9,
    correctAnswer: 3,
    explanation:
      "You should give way to traffic already on the motorway. Where possible, traffic may move over to let you in, but don’t force your way into the traffic stream. Traffic could be travelling at high speed, so try to match your speed to filter in without affecting the traffic flow.",
    id: 1,
    mediaType: "image",
    question:
      "You're joining a motorway from a slip road. How should you deal with traffic already on the motorway?",
  },
  {
    answers: ["30 mph", "50 mph", "60 mph", "70 mph"],
    category: 9,
    correctAnswer: 3,
    explanation:
      "Travelling at the national speed limit doesn't allow you to hog the right-hand lane. Always use the left-hand lane whenever possible. When leaving a motorway, get into the left-hand lane well before your exit. Reduce your speed on the slip road and look out for sharp bends or curves and traffic queuing at roundabouts.",
    id: 2,
    mediaType: "image",
    question:
      "What's the national speed limit on motorways for cars and motorcycles?",
  },
  {
    answers: [
      "Any vehicle that isn't overtaking",
      "Large vehicles only",
      "Emergency vehicles only",
      "Slow vehicles only",
    ],
    category: 9,
    correctAnswer: 0,
    explanation:
      "On a motorway, all traffic should use the left-hand lane unless overtaking. When overtaking a number of slower vehicles, move back to the left-hand lane when you’re safely past. Check your mirrors frequently and don’t stay in the middle or right-hand lane if the left-hand lane is free.",
    id: 3,
    mediaType: "image",
    question:
      "Which vehicles should use the left-hand lane on a three-lane motorway?",
  },
  {
    answers: [
      "Small delivery vans",
      "Motorcycles",
      "Vehicles towing a trailer",
      "Motorcycle and sidecar outfits",
    ],
    category: 9,
    correctAnswer: 2,
    explanation:
      "On the motorway, any vehicle towing a trailer is restricted to 60 mph. It isn’t allowed in the right-hand lane, as it might hold up faster-moving traffic that wishes to overtake in that lane.",
    id: 4,
    mediaType: "image",
    question:
      "Which vehicles aren't allowed to use the right-hand lane of a three-lane motorway?",
  },
  {
    answers: [
      "It connects you to a local garage",
      "Using a mobile phone will distract other drivers",
      "It allows easy location by the emergency services",
      "Mobile phones don't work on motorways",
    ],
    category: 9,
    correctAnswer: 2,
    explanation:
      "On a motorway, it's best to use a roadside emergency telephone so that the emergency services are able to find you easily. The location of the nearest telephone is shown by an arrow on marker posts at the edge of the hard shoulder. If you use a mobile, find out the number on the nearest marker post before you call. This number will let the operator know where you are and in which direction you're travelling.",
    id: 5,
    mediaType: "image",
    question:
      "Your vehicle breaks down on a motorway and you need to call for help. Why might it be better to use an emergency roadside telephone rather than a mobile phone?",
  },
  {
    answers: [
      "Move out onto the carriageway, then build up your speed",
      "Move out onto the carriageway using your hazard warning lights",
      "Gain speed on the hard shoulder before moving out onto the carriageway",
      "Wait on the hard shoulder until someone flashes their headlights at you",
    ],
    category: 9,
    correctAnswer: 2,
    explanation:
      "Signal your intention and build up sufficient speed on the hard shoulder so that you can filter into a safe gap in the traffic. Don't push your way into a small gap or cause other traffic to alter speed or direction.",
    id: 6,
    mediaType: "image",
    question:
      "Your vehicle broke down on the hard shoulder of a motorway, but has now been repaired. How should you rejoin the main carriageway?",
  },
  {
    answers: [
      "On a steep gradient",
      "Before a service area",
      "Before a junction",
      "Along the hard shoulder",
    ],
    category: 9,
    content: require("./../assets/qimage/AB2237.jpg"),
    correctAnswer: 0,
    explanation:
      "Large, slow-moving vehicles can hinder the progress of other traffic. On a steep gradient, an extra crawler lane may be provided for slow-moving vehicles to allow faster-moving traffic to flow more easily.",
    id: 7,
    mediaType: "image",
    question:
      "You're travelling along a motorway. Where would you find a crawler or climbing lane? ",
  },
  {
    answers: [
      "They're countdown markers to a bridge",
      "They're distance markers to the next telephone",
      "They're countdown markers to the next exit",
      "They warn of a police control ahead",
    ],
    category: 9,
    content: require("./../assets/qimage/AB2241.jpg"),
    correctAnswer: 2,
    explanation:
      "The exit from a motorway is indicated by countdown markers. These are positioned 90 metres (100 yards) apart, the first being 270 metres (300 yards) from the start of the slip road. Move into the left-hand lane well before you reach the start of the slip road.",
    id: 8,
    mediaType: "image",
    question: "What do these motorway signs mean?",
  },
  {
    answers: [
      "Between the hard shoulder and the carriageway",
      "Between the acceleration lane and the carriageway",
      "Between the central reservation and the carriageway",
      "Between each pair of lanes",
    ],
    category: 9,
    correctAnswer: 2,
    explanation:
      "On motorways, reflective studs of various colours are fixed in the road between the lanes. These help you to identify which lane you're in when it's dark or in poor visibility. Amber-coloured studs are found on the right-hand edge of the main carriageway, next to the central reservation.",
    id: 9,
    mediaType: "image",
    question: "Where are amber reflective studs found on a motorway?",
  },
  {
    answers: ["Green", "Amber", "White", "Red"],
    category: 9,
    correctAnswer: 2,
    explanation:
      "White studs are found between the lanes on motorways. They reflect back the light from your headlights. This is especially useful in bad weather, when visibility is restricted.",
    id: 10,
    mediaType: "image",
    question:
      "What colour are the reflective studs between the lanes on a motorway?",
  },
  {
    answers: ["Amber", "White", "Green", "Red"],
    category: 9,
    correctAnswer: 2,
    explanation:
      "The studs between the carriageway and the hard shoulder are normally red. These change to green where there's a slip road, helping you to identify slip roads when visibility is poor or when it's dark.",
    id: 11,
    mediaType: "image",
    question:
      "What colour are the reflective studs between a motorway and a slip road?",
  },
  {
    answers: [
      "With the traffic flow",
      "Facing oncoming traffic",
      "In the direction shown on the marker posts",
      "In the direction of the nearest exit",
    ],
    category: 9,
    correctAnswer: 2,
    explanation:
      "Along the hard shoulder there are marker posts at 100-metre intervals. These will direct you to the nearest emergency telephone.",
    id: 12,
    mediaType: "image",
    question:
      "Your vehicle has broken down on a motorway. In which direction should you walk to find the nearest emergency telephone?",
  },
  {
    answers: [
      "Because there's space available to turn round if you need to",
      "To allow you direct access to the overtaking lanes",
      "To allow you to fit safely into the traffic flow in the left-hand lane",
      "Because you can continue on the hard shoulder",
    ],
    category: 9,
    correctAnswer: 2,
    explanation:
      "Try to join the motorway without affecting the progress of the traffic in the left-hand lane and always give way to traffic already on the motorway. At busy times, you may have to slow down to merge into slow-moving traffic.",
    id: 13,
    mediaType: "image",
    question:
      "Why is it important to make full use of the slip road as you join a motorway?",
  },
  {
    answers: [
      "Stay close to the carriageway",
      "Face the oncoming traffic",
      "Keep your back to the traffic",
      "Stand on the hard shoulder",
    ],
    category: 9,
    correctAnswer: 1,
    explanation:
      "Traffic is passing you at speed. If the draught from a large lorry catches you by surprise, it could blow you off balance and even onto the carriageway. By facing the oncoming traffic, you can see approaching lorries and so be prepared for their draught. You'll also be in a position to see any other hazards approaching.",
    id: 14,
    mediaType: "image",
    question:
      "How should you position yourself when you use the emergency telephone on a motorway?",
  },
  {
    answers: ["Green", "Red", "White", "Amber"],
    category: 9,
    correctAnswer: 1,
    explanation:
      "Red studs are placed between the edge of the carriageway and the hard shoulder. Where slip roads leave or join the motorway, the studs are green.",
    id: 15,
    mediaType: "image",
    question:
      "What colour are the reflective studs between the hard shoulder and the left-hand lane of a motorway?",
  },
  {
    answers: ["Left", "Right", "Centre", "Either the right or centre"],
    category: 9,
    correctAnswer: 0,
    explanation:
      "On a three-lane motorway, you should travel in the left-hand lane unless you’re overtaking. This applies regardless of the speed at which you’re travelling.",
    id: 16,
    mediaType: "image",
    question:
      "On a three-lane motorway, which lane should you use if there's no traffic ahead?",
  },
  {
    answers: [
      "Use dipped headlights",
      "Keep a good distance from the vehicle ahead",
      "Switch lanes to keep the traffic flowing",
      "Stay close to the vehicle ahead to reduce queues",
    ],
    category: 9,
    content: require("./../assets/qimage/AB2611n1.jpg"),
    correctAnswer: 1,
    explanation:
      "At roadworks, and especially where a contraflow system is operating, a speed restriction is likely to be in place. Keep to the lower speed limit and don’tn• switch lanesn• get too close to the vehicle in front of you.nBe aware that there will be no permanent barrier between you and the oncoming traffic.",
    id: 17,
    mediaType: "image",
    question:
      "What should you do when going through a contraflow system on a motorway?",
  },
  {
    answers: [
      "In the right-hand lane",
      "In the middle lane",
      "On the hard shoulder",
      "In the left-hand lane",
    ],
    category: 9,
    correctAnswer: 3,
    explanation:
      "The colours of the reflective studs on the motorway and their locations aren• red – between the hard shoulder and the carriagewayn• white – between lanesn• amber – between the carriageway and the central reservationn• green – along slip-road exits and entrancesn• bright green/yellow – at roadworks and contraflow systems.",
    id: 18,
    mediaType: "image",
    question:
      "You're on a three-lane motorway. Which lane are you in if there are red reflective studs on your left and white ones to your right?",
  },
  {
    answers: [
      "Speed up to clear the area quickly",
      "Always use the hard shoulder",
      "Obey the speed limit",
      "Stay very close to the vehicle in front",
    ],
    category: 9,
    correctAnswer: 2,
    explanation:
      "Be aware of reduced speed limits at roadworks. Speed limits shown inside a red circle are mandatory and cameras are often used to enforce the reduced limit. Slow down in good time and keep your distance from the vehicle in front.",
    id: 19,
    mediaType: "image",
    question:
      "What should you do when you're approaching roadworks on a motorway?",
  },
  {
    answers: [
      "Powered mobility scooters",
      "Motorcycles over 50 cc",
      "Double-deck buses",
      "Cars with automatic transmission",
    ],
    category: 9,
    correctAnswer: 0,
    explanation:
      "Motorways mustn’t be used by pedestrians, cyclists, motorcycles under 50 cc, certain slow-moving vehicles without permission, and powered wheelchairs/mobility scooters.",
    id: 20,
    mediaType: "image",
    question: "Which vehicles are prohibited from using the motorway?",
  },
  {
    answers: [
      "Look much further ahead than you would on other roads",
      "Travel much faster than you would on other roads",
      "Maintain a shorter separation distance than you would on other roads",
      "Concentrate more than you would on other roads",
    ],
    category: 9,
    correctAnswer: 0,
    explanation:
      "Traffic on motorways usually travels faster than on other roads. You need to be looking further ahead to give yourself more time to react to any hazard that may develop.",
    id: 21,
    mediaType: "image",
    question:
      "What should you do while you're driving or riding along a motorway?",
  },
  {
    answers: [
      "Try to overtake",
      "Re-adjust your mirrors",
      "Position your vehicle in the centre lane",
      "Stay in the left-hand lane",
    ],
    category: 9,
    correctAnswer: 3,
    explanation:
      "When you've just joined a motorway, stay in the left-hand lane long enough to get used to the higher speeds of motorway traffic before considering overtaking.",
    id: 22,
    mediaType: "image",
    question: "What should you do immediately after joining a motorway?",
  },
  {
    answers: [
      "When you're turning right",
      "When you're overtaking",
      "When you're travelling above the speed limit",
      "When you're trying to save fuel",
    ],
    category: 9,
    correctAnswer: 1,
    explanation:
      "The right-hand lane of the motorway is for overtaking. Sometimes you may be directed into a right-hand lane as a result of roadworks or a traffic incident. This will be indicated by signs or officers directing the traffic.",
    id: 23,
    mediaType: "image",
    question:
      "When would you use the right-hand lane on a three-lane motorway?",
  },
  {
    answers: [
      "When you're stopping in an emergency",
      "When you're leaving the motorway",
      "When you're stopping for a rest",
      "When you're joining the motorway",
    ],
    category: 9,
    correctAnswer: 0,
    explanation:
      "Don’t use the hard shoulder for stopping unless it's an emergency. If you want to stop for any other reason, go to the next exit or service area.",
    id: 24,
    mediaType: "image",
    question:
      "You're on a motorway that isn't subject to smart motorway regulations. When should you use the hard shoulder?",
  },
  {
    answers: [
      "Move to the left and reduce your speed to 50 mph",
      "There are roadworks 50 metres (55 yards) ahead",
      "Use the hard shoulder until you've passed the hazard",
      "Leave the motorway at the next exit",
    ],
    category: 9,
    content: require("./../assets/qimage/AB2748.jpg"),
    correctAnswer: 0,
    explanation:
      "You must obey these signs even if there appear to be no problems ahead. There could be queuing traffic or another hazard that you can't see yet.",
    id: 25,
    mediaType: "image",
    question:
      "You're in the right-hand lane of a three-lane motorway. What do these overhead signs mean?",
  },
  {
    answers: [
      "When you need to walk and get fresh air",
      "When you wish to pick up hitchhikers",
      "When you're signalled to do so by traffic signals",
      "When you need to use a mobile telephone",
    ],
    category: 9,
    correctAnswer: 2,
    explanation:
      "You must stop if overhead gantry signs show a red cross above every lane on the motorway. If any of the other lanes doesn't show a red cross, you may move into that lane and continue if it's safe to do so.",
    id: 26,
    mediaType: "image",
    question: "When are you allowed to stop on a motorway?",
  },
  {
    answers: [
      "Increase your speed to ensure they join behind you",
      "Adjust your speed or change lane if you can do so safely",
      "Maintain a steady speed",
      "Switch on your hazard warning lights",
    ],
    category: 9,
    correctAnswer: 1,
    explanation:
      "Plan well ahead when approaching a slip road. If you see traffic joining the motorway, be prepared to adjust your speed or move to another lane if it's safe to do so. This can help the flow of traffic joining the motorway, especially at peak times.",
    id: 27,
    mediaType: "image",
    question:
      "You're travelling in the left-hand lane of a three-lane motorway. How should you react to traffic joining from a slip road? ",
  },
  {
    answers: [
      "Use the lane that has the least traffic",
      "Keep to the left-hand lane unless you're overtaking",
      "Overtake using the lane that’s clearest",
      "Stay in one lane until you reach your exit",
    ],
    category: 9,
    correctAnswer: 1,
    explanation:
      "You should normally travel in the left-hand lane unless you're overtaking a slower-moving vehicle. When you've finished overtaking, move back into the left-hand lane, but don’t cut across in front of the vehicle that you’ve overtaken.",
    id: 28,
    mediaType: "image",
    question: "How should you use the lanes on a motorway?",
  },
  {
    answers: [
      "When you can see well ahead that the hard shoulder is clear",
      "When the traffic in the right-hand lane is signalling right",
      "When you warn drivers behind by signalling left",
      "When in queues and traffic to your right is moving more slowly than you are ",
    ],
    category: 9,
    correctAnswer: 3,
    explanation:
      "Never overtake on the left, unless the traffic is moving in queues and the queue on your right is moving more slowly than the one you're in.",
    id: 29,
    mediaType: "image",
    question:
      "You're travelling along a motorway. When are you allowed to overtake on the left?",
  },
  {
    answers: [
      "In cases of emergency or breakdown",
      "If you think you'll be involved in a road rage incident",
      "To stop and check where you are",
      "To make a private phone call",
    ],
    category: 9,
    correctAnswer: 0,
    explanation:
      "On smart motorways, emergency refuge areas are built at the side of the hard shoulder. If you break down, try to get your vehicle into the refuge, where there's an emergency telephone. The phone connects directly to a control centre. Remember to take care when rejoining the motorway, especially if the hard shoulder is being used as a running lane.",
    id: 30,
    mediaType: "image",
    question:
      "When would you use an emergency refuge area on a smart motorway?",
  },
  {
    answers: [
      "Stop and arrest drivers who break the law",
      "Repair broken-down vehicles on the motorway",
      "Issue fixed penalty notices",
      "Stop and direct anyone on a motorway",
    ],
    category: 9,
    content: require("./../assets/qimage/AB2788n.jpg"),
    correctAnswer: 3,
    explanation:
      "Traffic officers don't have enforcement powers but are able to stop and direct people on motorways and some ‘A’ class roads. They operate in England and Wales and work in partnership with the police at incidents, providing a highly trained and visible service. They're recognised by an orange-and-yellow jacket and their vehicle has yellow-and-black markings. ",
    id: 31,
    mediaType: "image",
    question:
      "Traffic officers operate on motorways and some primary routes in England and Wales. What are they authorised to do?",
  },
  {
    answers: [
      "Pull up in this lane to answer your mobile phone",
      "Use this lane as a running lane",
      "This lane can be used if you need a rest",
      "You must not travel in this lane",
    ],
    category: 9,
    content: require("./../assets/qimage/AB2789.jpg"),
    correctAnswer: 3,
    explanation:
      "Some motorways have been redesigned as smart motorways. At certain times, the hard shoulder will be open as a running lane. However, a red cross above the hard shoulder shows that it isn't open as a running lane and should only be used for emergencies and breakdowns.",
    id: 32,
    mediaType: "image",
    question:
      "You're on a smart motorway. What does it mean when a red cross is displayed above the hard shoulder?",
  },
  {
    answers: [
      "You shouldn't travel in this lane",
      "The hard shoulder can be used as a running lane",
      "You can park on the hard shoulder if you feel tired",
      "You can pull up in this lane to answer a mobile phone",
    ],
    category: 9,
    content: require("./../assets/qimage/AB2790.jpg"),
    correctAnswer: 1,
    explanation:
      "A mandatory speed-limit sign above the hard shoulder shows that this part of the road can be used as a running lane between junctions. You must stay within the speed limit. Look out for vehicles that may have broken down and could be blocking the hard shoulder.",
    id: 33,
    mediaType: "image",
    question:
      "You're on a smart motorway. What does it mean when a mandatory speed limit is displayed above the hard shoulder?",
  },
  {
    answers: [
      "By using higher speed limits",
      "By using advisory speed limits",
      "By using minimum speed limits",
      "By using variable speed limits",
    ],
    category: 9,
    correctAnswer: 3,
    explanation:
      "When a smart motorway is operating, you must follow the mandatory signs on the gantries above each lane, including the hard shoulder. Variable speed limits help keep the traffic moving and also help to prevent bunching. ",
    id: 34,
    mediaType: "image",
    question: "How do smart motorways prevent traffic bunching?",
  },
  {
    answers: [
      "Variable speed limits",
      "Contraflow systems",
      "National speed limits",
      "Lane closures",
    ],
    category: 9,
    correctAnswer: 0,
    explanation:
      "Congestion can be reduced by keeping traffic at a constant speed. At busy times, maximum speed limits are displayed on overhead gantries. These can be varied quickly, depending on the amount of traffic. By keeping to a constant speed on busy sections of motorway, overall journey times are normally improved.",
    id: 35,
    mediaType: "image",
    question: "What helps to reduce traffic bunching on a motorway?",
  },
  {
    answers: [
      "If you have to read a map",
      "When you're tired and need a rest",
      "If your mobile phone rings",
      "In an emergency or breakdown",
    ],
    category: 9,
    correctAnswer: 3,
    explanation:
      "You shouldn't normally stop on a motorway, but there may be occasions when you need to do so. If your vehicle breaks down or there's an emergency, stop on the hard shoulder and use the emergency telephones to call for assistance.",
    id: 36,
    mediaType: "image",
    question: "When may you stop on a motorway?",
  },
  {
    answers: ["50 mph", "60 mph", "70 mph", "80 mph"],
    category: 9,
    correctAnswer: 2,
    explanation:
      "The national speed limit for a car or motorcycle on a motorway is 70 mph. Lower speed limits may be in force; for example, at roadworks. Variable speed limits also operate in some areas when the motorway is very busy. Cars or motorcycles towing trailers are subject to a lower speed limit.",
    id: 37,
    mediaType: "image",
    question:
      "What's the national speed limit for a car or motorcycle on a motorway?",
  },
  {
    answers: [
      "Next to the phone",
      "Well away from the carriageway",
      "With your vehicle",
      "On the hard shoulder",
    ],
    category: 9,
    correctAnswer: 1,
    explanation:
      "When you're on the hard shoulder, you're at risk of being injured by motorway traffic. The safest place to wait is away from the carriageway, but near enough to see the emergency services arriving.",
    id: 38,
    mediaType: "image",
    question:
      "You stop on the hard shoulder of a motorway and use the emergency telephone. Where's the best place to wait for help to arrive?",
  },
  {
    answers: [
      "Pull onto the hard shoulder",
      "Slow down and watch for further signals",
      "Leave at the next exit",
      "Stop and wait",
    ],
    category: 9,
    content: require("./../assets/qimage/AB2852n.jpg"),
    correctAnswer: 3,
    explanation:
      "A red cross signal above all lanes means you must stop and wait. Don't change lanes and don't try to continue any further along the motorway.",
    id: 39,
    mediaType: "image",
    question:
      "You're on a motorway. What must you do if there's a red cross showing above every lane?",
  },
  {
    answers: [
      "The hard shoulder can be used as a rest area if you feel tired",
      "The hard shoulder is for emergency or breakdown use only",
      "The hard shoulder can be used as a normal running lane ",
      "The hard shoulder has a speed limit of 50 mph",
    ],
    category: 9,
    content: require("./../assets/qimage/AB2856.jpg"),
    correctAnswer: 1,
    explanation:
      "A red cross above the hard shoulder shows that it's closed as a running lane and should only be used for emergencies or breakdowns. On a smart motorway, the hard shoulder may be used as a running lane at busy times. This will be shown by a mandatory speed limit on the gantry above the hard shoulder.",
    id: 40,
    mediaType: "image",
    question:
      "You're on a smart motorway. What does it mean if a red cross is showing above the hard shoulder and mandatory speed limits above all other lanes?",
  },
  {
    answers: [
      "Use any lane except the hard shoulder",
      "Use the hard shoulder only",
      "Use the three right-hand lanes only",
      "Use all the lanes, including the hard shoulder",
    ],
    category: 9,
    content: require("./../assets/qimage/AB2857.jpg"),
    correctAnswer: 3,
    explanation:
      "You must obey mandatory speed-limit signs above motorway lanes, including the hard shoulder. In this case, you can use the hard shoulder as a running lane but you should look for any vehicles that may have broken down and may be blocking the hard shoulder.",
    id: 41,
    mediaType: "image",
    question: "On a smart motorway, what does this sign mean?",
  },
  {
    answers: [
      "On the hard shoulder",
      "At the nearest service area",
      "On a slip road",
      "On the central reservation",
    ],
    category: 9,
    correctAnswer: 1,
    explanation:
      "If you feel tired, stop at the nearest service area. If that's too far away, leave the motorway at the next exit and find a safe place to stop. You mustn't stop on the carriageway or hard shoulder of a motorway except in an emergency, when in a traffic queue, or when signalled to do so by a police officer, a traffic officer or traffic signals. Plan your journey so that you have regular rest stops.",
    id: 42,
    mediaType: "image",
    question:
      "Where should you stop to rest if you feel tired while you're travelling along a motorway?",
  },
  {
    answers: [
      "Use the emergency telephone",
      "Give an arm signal as you are moving off",
      "Switch on your vehicle's headlights",
      "Move away with your hazard lights on",
    ],
    category: 9,
    correctAnswer: 0,
    explanation:
      "To rejoin the carriageway from an emergency area, you must use the emergency telephone and follow the operator's advice. A lane may have to be closed so that you can rejoin the carriageway safely.",
    id: 43,
    mediaType: "image",
    question:
      "You have stopped in an emergency area. What must you do before you rejoin the carriageway?",
  },
  {
    answers: [
      "Build up speed on the hard shoulder before looking for a safe gap in the traffic",
      "Move straight out into the left-hand lane as you are not allowed to drive on the hard shoulder",
      "Wait until a vehicle in the left-hand lane signals to you that it's safe to rejoin",
      "Keep your hazard lights flashing until you have safely rejoined the carriageway",
    ],
    category: 9,
    correctAnswer: 0,
    explanation:
      "To rejoin a motorway from the hard shoulder, you first need to build up speed on the hard shoulder. You can then look for a safe gap in the traffic in the left-hand lane. Watch for traffic that may be returning from a lane on the right into the left-hand lane.",
    id: 44,
    mediaType: "image",
    question:
      "How should you rejoin the motorway after a breakdown on the hard shoulder?",
  },
  {
    answers: ["40 mph", "50 mph", "60 mph", "70 mph"],
    category: 9,
    correctAnswer: 2,
    explanation:
      "If you’re towing a small, light trailer, it won’t reduce your vehicle’s performance by very much and it may not be visible in your mirrors. However, strong winds or buffeting from large vehicles might cause the trailer to snake from side to side. Be aware of your speed and don’t exceed the reduced speed limit imposed on vehicles towing trailers.",
    id: 45,
    mediaType: "image",
    question:
      "What's the speed limit for a car towing a trailer on a motorway?",
  },
  {
    answers: [
      "When your vehicle breaks down",
      "When you're overtaking slower traffic in the other lanes",
      "When you're making a phone call",
      "When the road ahead is clear",
    ],
    category: 9,
    correctAnswer: 3,
    explanation:
      "You should drive in the left-hand lane whenever possible. Only use the other lanes for overtaking or when directed to do so by signals. Using other lanes when the left-hand lane is empty can frustrate drivers behind you.",
    id: 46,
    mediaType: "image",
    question: "When should you use the left-hand lane of a motorway?",
  },
  {
    answers: [
      "Switch on your hazard warning lights",
      "Switch on your headlights",
      "Sound your horn",
      "Flash your headlights",
    ],
    category: 9,
    correctAnswer: 0,
    explanation:
      "Using your hazard warning lights, as well as your brake lights, will give the traffic behind an extra warning of the problem ahead. Only use them for long enough for your warning to be seen.",
    id: 47,
    mediaType: "image",
    question:
      "You're driving on a motorway and have to slow down suddenly due to a hazard ahead. How can you warn drivers behind of the hazard?",
  },
  {
    answers: [
      "Carefully change the wheel yourself",
      "Use an emergency telephone and call for help",
      "Try to wave down another vehicle for help",
      "Only change the wheel if you have a passenger to help you",
    ],
    category: 9,
    correctAnswer: 1,
    explanation:
      "Park as far to the left as you can and leave the vehicle by the nearside door. Don't attempt even simple repairs. Instead, walk to an emergency telephone on your side of the road and phone for help. While waiting for help to arrive, stay by your car, keeping well away from the carriageway and hard shoulder.",
    id: 48,
    mediaType: "image",
    question:
      "Your car gets a puncture while you're driving on the motorway. What should you do when you've stopped on the hard shoulder?",
  },
  {
    answers: [
      "Carefully reverse along the hard shoulder",
      "Carry on to the next exit",
      "Carefully reverse in the left-hand lane",
      "Make a U-turn at the next gap in the central reservation",
    ],
    category: 9,
    correctAnswer: 1,
    explanation:
      "It's illegal to reverse, cross the central reservation or drive against the traffic flow on a motorway. If you miss your exit, carry on until you reach the next one. Ask yourself why you missed your exit – if you think that your concentration is fading, take a break before continuing your journey.",
    id: 49,
    mediaType: "image",
    question:
      "What should you do if you're driving on a motorway and you miss the exit that you wanted to take?",
  },
  {
    answers: [
      "Switch on your hazard warning lights",
      "Stop the traffic behind and ask for help",
      "Attempt to repair your vehicle quickly",
      "Stand behind your vehicle to warn others",
    ],
    category: 9,
    correctAnswer: 0,
    explanation:
      "If you can’t get your vehicle onto the hard shoulder, use your hazard warning lights to warn others. Leave your vehicle only when you can safely get clear of the carriageway. Don't try to repair the vehicle or attempt to place any warning device on the carriageway.",
    id: 50,
    mediaType: "image",
    question:
      "Your vehicle has broken down on a motorway. What should you do if you aren't able to get onto the hard shoulder?",
  },
  {
    answers: [
      "You'll have to do more harsh braking on motorways",
      "Motorway services areas don't deal with breakdowns",
      "The road surface will wear down the tyres faster",
      "Continuous high speeds increase the risk of your vehicle breaking down",
    ],
    category: 9,
    correctAnswer: 3,
    explanation:
      "Before you start your journey, make sure that your vehicle can cope with the demands of high-speed driving. You should check a number of things; the main ones being fuel, oil, water and tyres. You also need to plan rest stops if you’re making a long journey.",
    id: 51,
    mediaType: "image",
    question:
      "Why is it particularly important to check your vehicle before making a long motorway journey?",
  },
  {
    answers: [
      "The driver wants you to overtake",
      "The other car is going to change lanes",
      "Traffic ahead is slowing or stopping suddenly",
      "There's a police speed check ahead",
    ],
    category: 9,
    correctAnswer: 2,
    explanation:
      "If the vehicle in front shows its hazard warning lights, there may be an incident, stopped traffic or queuing traffic ahead. By keeping a safe distance from the vehicle in front, you're able to look beyond it and see any hazards well ahead.",
    id: 52,
    mediaType: "image",
    question:
      "You're driving on a motorway. What does it mean if the car in front shows its hazard warning lights for a short time?",
  },
  {
    answers: [
      "The middle lane",
      "The left-hand lane",
      "The hard shoulder",
      "The right-hand lane",
    ],
    category: 9,
    correctAnswer: 1,
    explanation:
      "You’ll see the first advance direction sign one mile from a motorway exit. If you’re travelling at 60 mph in the right-hand lane, you’ll only have about 50 seconds before you reach the countdown markers. There'll be another sign at the half-mile point. Don’t cut across lanes of traffic at the last moment – move to the left-hand lane in good time.",
    id: 53,
    mediaType: "image",
    question:
      "You're driving on the motorway. Which lane should you get into well before you reach your exit?",
  },
  {
    answers: [
      "They can't drive over 30 mph",
      "They can't drive at night",
      "They can't drive unaccompanied",
      "They can't drive with more than one passenger",
    ],
    category: 9,
    correctAnswer: 2,
    explanation:
      "You won't be able to drive unaccompanied until you've passed your practical driving test. If you haven't driven on the motorway while you were learning, ask your instructor to take you for a lesson on the motorway when you've passed your test. Alternatively, you could take part in the Pass Plus scheme. This has been created for new drivers and includes motorway driving. Ask your instructor for details.",
    id: 54,
    mediaType: "image",
    question:
      "What restrictions apply to people who have a provisional driving licence?",
  },
  {
    answers: [
      "Stand at the rear of the vehicle while making the call",
      "Phone a friend and ask them to come and collect you",
      "Wait in the car for the emergency services to arrive",
      "Check your location from the nearest marker posts beside the hard shoulder",
    ],
    category: 9,
    correctAnswer: 3,
    explanation:
      "You should use an emergency telephone when you break down on the motorway; only use your mobile if this isn't possible. The emergency services need to know your exact location so they can reach you as quickly as possible. Look for a number on the nearest marker post beside the hard shoulder. Give this number when you call the emergency services.",
    id: 55,
    mediaType: "image",
    question:
      "Your vehicle breaks down on a motorway and you manage to stop on the hard shoulder. What should you do if you use your mobile phone to call for help?",
  },
  {
    answers: [
      "When there are lane closures",
      "When there's slow-moving traffic",
      "When you can maintain a high speed",
      "When large vehicles are in the left and centre lanes",
    ],
    category: 9,
    correctAnswer: 0,
    explanation:
      "If you're towing a caravan or trailer, you mustn't use the right-hand lane of a motorway with three or more lanes except in certain specified circumstances, such as when lanes are closed.",
    id: 56,
    mediaType: "image",
    question:
      "You're towing a trailer along a three-lane motorway. When may you use the right-hand lane?",
  },
  {
    answers: [
      "Temporary traffic lights",
      "Lower speed limits",
      "Wider lanes than normal",
      "Road humps",
    ],
    category: 9,
    correctAnswer: 1,
    explanation:
      "When approaching a contraflow system, reduce speed in good time and obey all speed limits. You may be travelling in a narrower lane than normal, with no permanent barrier between you and the oncoming traffic. Be aware that the hard shoulder may be used for traffic and the road ahead could be obstructed by slow-moving or broken-down vehicles.",
    id: 57,
    mediaType: "image",
    question:
      "What would you expect to find at a contraflow system on a motorway?",
  },
  {
    answers: [
      "Local speed limit applies",
      "No waiting on the carriageway",
      "National speed limit applies",
      "No entry for vehicles",
    ],
    category: 10,
    content: require("./../assets/qimage/AB2246.jpg"),
    correctAnswer: 2,
    explanation:
      "This sign doesn't tell you the speed limit in figures. You should know the speed limit for the type of road that you're on and the type of vehicle that you're driving or riding. Study your copy of The Highway Code.",
    id: 1,
    mediaType: "image",
    question: "What's the meaning of this sign?",
  },
  {
    answers: ["30 mph", "50 mph", "60 mph", "70 mph"],
    category: 10,
    correctAnswer: 3,
    explanation:
      "Make sure that you know the speed limit for the road that you're on. The speed limit on a dual carriageway or motorway is 70 mph for cars and motorcycles, unless signs indicate otherwise. The speed limits for different types of vehicle are listed in The Highway Code.",
    id: 2,
    mediaType: "image",
    question:
      "What's the national speed limit for cars and motorcycles on a dual carriageway?",
  },
  {
    answers: [
      "By hazard warning lines",
      "By street lighting",
      "By pedestrian islands",
      "By double or single yellow lines",
    ],
    category: 10,
    correctAnswer: 1,
    explanation:
      "There's a 30 mph speed limit where there are street lights unless signs show another limit.",
    id: 3,
    mediaType: "image",
    question:
      "There are no speed-limit signs on the road. How is a 30 mph limit generally indicated?",
  },
  {
    answers: ["30 mph", "40 mph", "50 mph", "60 mph"],
    category: 10,
    correctAnswer: 0,
    explanation:
      "The presence of street lights generally indicates that there's a 30 mph speed limit, unless signs tell you otherwise.",
    id: 4,
    mediaType: "image",
    question:
      "What will the speed limit usually be where you can see street lights but no speed-limit signs?",
  },
  {
    answers: [
      "Minimum speed 30 mph",
      "End of maximum speed",
      "End of minimum speed",
      "Maximum speed 30 mph",
    ],
    category: 10,
    content: require("./../assets/qimage/AB2254.jpg"),
    correctAnswer: 2,
    explanation:
      "The red slash through the sign indicates that the restriction has ended. In this case, the restriction was a minimum speed limit of 30 mph.",
    id: 5,
    mediaType: "image",
    question: "What does this sign mean?",
  },
  {
    answers: [
      "Follow another vehicle as it overtakes the tractor",
      "Sound your horn to make the tractor driver pull over",
      "Speed past, flashing your lights at oncoming traffic",
      "Stay behind it if you're in any doubt",
    ],
    category: 10,
    correctAnswer: 3,
    explanation:
      "Following a tractor can be frustrating, but never overtake if you’re unsure whether it’s safe. Ask yourself: 'Can I see far enough down the road to ensure that I can complete the manoeuvre safely?' It's better to be delayed for a minute or two than to take a chance that may cause a collision.",
    id: 6,
    mediaType: "image",
    question:
      "What should you do if you want to overtake a tractor but aren't sure that it's safe?",
  },
  {
    answers: ["Estate car", "Milk float", "Delivery van", "Long vehicle"],
    category: 10,
    correctAnswer: 3,
    explanation:
      "Long vehicles might have to take a slightly different position when approaching the roundabout or going around it. This is to stop the rear of the vehicle cutting in and mounting the kerb.",
    id: 7,
    mediaType: "image",
    question:
      "Which vehicle is most likely to take an unusual course at a roundabout?",
  },
  {
    answers: [
      "Never",
      "When it's busy",
      "In the rush hour",
      "During daylight hours",
    ],
    category: 10,
    correctAnswer: 0,
    explanation:
      "Clearways are in place so that traffic can flow without the obstruction of parked vehicles. Just one parked vehicle can cause an obstruction for all other traffic. You mustn't stop where a clearway is in force, not even to pick up or set down passengers. ",
    id: 8,
    mediaType: "image",
    question: "When may you stop on a clearway?",
  },
  {
    answers: [
      "No entry",
      "Waiting restrictions",
      "National speed limit",
      "School crossing patrol",
    ],
    category: 10,
    content: require("./../assets/qimage/AB2264.jpg"),
    correctAnswer: 1,
    explanation:
      "This sign indicates that there are waiting restrictions. It's normally accompanied by details of when the restrictions are in force.nDetails of most signs in common use are shown in The Highway Code. For more comprehensive coverage, see Know Your Traffic Signs.",
    id: 9,
    mediaType: "image",
    question: "What's the meaning of this sign?",
  },
  {
    answers: [
      "When you're in a one-way street",
      "When you have your sidelights on",
      "When you're more than 10 metres (32 feet) from a junction",
      "When you're under a lamppost",
    ],
    category: 10,
    correctAnswer: 0,
    explanation:
      "Red rear reflectors show up when headlights shine on them. These are useful when you're parked at night, but they'll only reflect if you park in the same direction as the traffic flow. Normally you should park on the left, but in a one-way street you may also park on the right-hand side of the road.",
    id: 10,
    mediaType: "image",
    question:
      "You're looking for somewhere to park at night. When may you park on the right-hand side of the road?",
  },
  {
    answers: [
      "When you're overtaking only",
      "When you're overtaking or turning right",
      "When you're using cruise control",
      "When you're turning right only",
    ],
    category: 10,
    correctAnswer: 1,
    explanation:
      "You should normally use the left-hand lane on any dual carriageway unless you're overtaking or turning right. nWhen overtaking on a dual carriageway, look for vehicles ahead that are turning right. They may be slowing or stopped. You need to see them in good time so that you can take appropriate action.n",
    id: 11,
    mediaType: "image",
    question:
      "When should you use the right-hand lane of a three-lane dual carriageway?",
  },
  {
    answers: [
      "Continue in that lane",
      "Force your way into the lane you need",
      "Stop until the area has cleared",
      "Use arm signals to help you change lane",
    ],
    category: 10,
    correctAnswer: 0,
    explanation:
      "There are times when road markings are obscured by queuing traffic, or you're unsure which lane to use. If, at the last moment, you find you're in the wrong lane, don’t cut across or bully other drivers to let you in. Follow the lane you’re in and find somewhere safe to turn around and rejoin your route.",
    id: 12,
    mediaType: "image",
    question:
      "You're approaching a busy junction. What should you do when, at the last moment, you realise you're in the wrong lane?",
  },
  {
    answers: [
      "Only on the left-hand side",
      "Overtaking isn't allowed",
      "Only on the right-hand side",
      "On either the right or the left",
    ],
    category: 10,
    correctAnswer: 3,
    explanation:
      "You can overtake other traffic on either side when travelling in a one-way street. Make full use of your mirrors and ensure it's clear all around before you attempt to overtake. Look for signs and road markings, and use the most suitable lane for your destination. ",
    id: 13,
    mediaType: "image",
    question: "Where may you overtake on a one-way street?",
  },
  {
    answers: [
      "Signal left before leaving the roundabout",
      "Don't signal at any time",
      "Signal right when you're approaching the roundabout",
      "Signal left when you're approaching the roundabout",
    ],
    category: 10,
    correctAnswer: 0,
    explanation:
      "When going straight ahead at a roundabout, don’t signal as you approach it. Signal left just after passing the exit before the one you wish to take.",
    id: 14,
    mediaType: "image",
    question:
      "What signal should you give when you're going straight ahead at a roundabout?",
  },
  {
    answers: ["Sports car", "Van", "Estate car", "Long vehicle"],
    category: 10,
    correctAnswer: 3,
    explanation:
      "A long vehicle may have to straddle lanes either on or approaching a roundabout so that the rear wheels don’t mount the kerb. nIf you’re following a long vehicle, stay well back and give it plenty of room.",
    id: 15,
    mediaType: "image",
    question:
      "Which vehicle might have to take a different course from normal at a roundabout?",
  },
  {
    answers: [
      "When there are fewer than two vehicles ahead",
      "When signalled by another road user",
      "When your exit road is clear",
      "When traffic signs direct you",
    ],
    category: 10,
    content: require("./../assets/qimage/AB2281n1.jpg"),
    correctAnswer: 2,
    explanation:
      "Yellow box junctions are marked on the road to prevent the road becoming blocked. Don’t enter the box unless your exit road is clear. You may wait in the box if you want to turn right and your exit road is clear but oncoming traffic or other vehicles waiting to turn right are preventing you from making the turn.",
    id: 16,
    mediaType: "image",
    question: "When may you enter a box junction?",
  },
  {
    answers: [
      "When oncoming traffic prevents you from turning right",
      "When you're in a queue of traffic turning left",
      "When you're in a queue of traffic going ahead",
      "When you're on a roundabout",
    ],
    category: 10,
    content: require("./../assets/qimage/AB2282n1.jpg"),
    correctAnswer: 0,
    explanation:
      "The purpose of yellow box markings is to keep junctions clear of queuing traffic. You may only wait in the marked area when you’re turning right and your exit lane is clear but you can’t complete the turn because of oncoming traffic or other traffic waiting to turn right.",
    id: 17,
    mediaType: "image",
    question: "When may you stop and wait in a box junction?",
  },
  {
    answers: [
      "A motorcyclist",
      "A pedestrian",
      "A police officer",
      "A bus driver",
    ],
    category: 10,
    correctAnswer: 2,
    explanation:
      "You must obey signals to stop given by police and traffic officers, traffic wardens and school crossing patrols. Failure to do so is an offence and could lead to prosecution.",
    id: 18,
    mediaType: "image",
    question: "Who is authorised to signal you to stop?",
  },
  {
    answers: [
      "Go on quickly before they step onto the crossing",
      "Stop before you reach the zigzag lines and let them cross",
      "Be ready to slow down or stop to let them cross",
      "Ignore them as they're still on the pavement",
    ],
    category: 10,
    correctAnswer: 2,
    explanation:
      "By standing on the pavement, the pedestrian is showing an intention to cross. By looking well ahead, you'll give yourself time to see the pedestrian, check your mirrors and respond safely.",
    id: 19,
    mediaType: "image",
    question:
      "What should you do if you see a pedestrian waiting at a zebra crossing?",
  },
  {
    answers: [
      "Car drivers and motorcyclists",
      "Cyclists and pedestrians",
      "Bus and lorry drivers",
      "Tram and train drivers",
    ],
    category: 10,
    correctAnswer: 1,
    explanation:
      "Toucan crossings are similar to pelican crossings but there's no flashing amber phase. Cyclists share the crossing with pedestrians and are allowed to cycle across when the green cycle symbol is shown.",
    id: 20,
    mediaType: "image",
    question: "Which road users benefit from toucan crossings?",
  },
  {
    answers: [
      "Give way to pedestrians on the crossing",
      "Move off immediately without any hesitation",
      "Wait for the green light before moving off",
      "Get ready and go when the continuous amber light shows",
    ],
    category: 10,
    correctAnswer: 0,
    explanation:
      "This light allows pedestrians already on the crossing to get to the other side in their own time, without being rushed. Don’t rev your engine or start to move off while they’re still crossing.",
    id: 21,
    mediaType: "image",
    question:
      "You’re waiting at a pelican crossing. What does it mean when the red light changes to flashing amber?",
  },
  {
    answers: [
      "If the line nearest to you is broken",
      "When there are no yellow lines",
      "To pick up or set down passengers",
      "During daylight hours only",
    ],
    category: 10,
    content: require("./../assets/qimage/AB2528n1.jpg"),
    correctAnswer: 2,
    explanation:
      "You mustn't park or stop on a road marked with double white lines (even where one of the lines is broken) except to pick up or set down passengers.",
    id: 22,
    mediaType: "image",
    question:
      "You see these double white lines along the centre of the road. When may you park on the left?",
  },
  {
    answers: [
      "You'll have a clearer view of any approaching traffic ",
      "You'll use less fuel because you can stay in a higher gear",
      "You'll have more time to turn",
      "You'll be able to turn without stopping",
    ],
    category: 10,
    correctAnswer: 0,
    explanation:
      "When turning right at a crossroads where oncoming traffic is also turning right, it's generally safer to turn behind the approaching vehicle. This allows you a clear view of approaching traffic and is called 'turning offside to offside'. However, some junctions, usually controlled by traffic-light filters - are marked for vehicles to turn nearside to nearside.",
    id: 23,
    mediaType: "image",
    question:
      "You're turning right at a crossroads. An oncoming driver is also turning right. What's the advantage of turning behind the oncoming vehicle? ",
  },
  {
    answers: [
      "So that oncoming traffic can see you more clearly",
      "You may set off car alarms",
      "There may be delivery lorries on the street",
      "Children may run out from between the vehicles",
    ],
    category: 10,
    correctAnswer: 3,
    explanation:
      "Travel slowly and carefully near parked vehicles. Beware ofn• vehicles pulling out, especially bicycles and motorcyclesn• pedestrians, especially children, who may run out from between carsn• drivers opening their doors.",
    id: 24,
    mediaType: "image",
    question:
      "You're travelling along a residential street. There are parked vehicles on the left-hand side. Why should you keep your speed down?",
  },
  {
    answers: [
      "Carry on, as you have priority",
      "Give way to oncoming traffic",
      "Wave oncoming vehicles through",
      "Accelerate to get past first",
    ],
    category: 10,
    correctAnswer: 1,
    explanation:
      "Take care if you have to pass an obstruction, such as a parked vehicle, on your side of the road. Give way to oncoming traffic if there isn’t enough room for you both to continue safely.",
    id: 25,
    mediaType: "image",
    question:
      "What should you do when there's an obstruction on your side of the road?",
  },
  {
    answers: [
      "When you're turning right or overtaking",
      "When you're passing a side road on the left",
      "When you're staying at the minimum allowed speed",
      "When you're travelling at a constant high speed",
    ],
    category: 10,
    correctAnswer: 0,
    explanation:
      "Normally you should travel in the left-hand lane and only use the right-hand lane for overtaking or turning right. Move back into the left lane as soon as it’s safe but don’t cut in across the path of the vehicle you’ve just passed.",
    id: 26,
    mediaType: "image",
    question:
      "When would you use the right-hand lane of a two-lane dual carriageway?",
  },
  {
    answers: [
      "The larger vehicle",
      "No-one has priority",
      "The faster vehicle",
      "The smaller vehicle",
    ],
    category: 10,
    correctAnswer: 1,
    explanation:
      "Practise good observation in all directions before you emerge or make a turn. Proceed only when you're sure it's safe to do so.",
    id: 27,
    mediaType: "image",
    question: "Who has priority at an unmarked crossroads?",
  },
  {
    answers: [
      "10 metres (32 feet)",
      "12 metres (39 feet)",
      "15 metres (49 feet)",
      "20 metres (66 feet)",
    ],
    category: 10,
    correctAnswer: 0,
    explanation:
      "Don't park within 10 metres (32 feet) of a junction (unless in an authorised parking place). This is to allow drivers emerging from, or turning into, the junction a clear view of the road they're joining. It also allows them to see hazards such as pedestrians or cyclists at the junction.",
    id: 28,
    mediaType: "image",
    question: "What's the nearest you may park to a junction?",
  },
  {
    answers: [
      "At or near a bus stop",
      "In a designated parking space",
      "Near the brow of a hill",
      "On the approach to a level crossing",
    ],
    category: 10,
    correctAnswer: 1,
    explanation:
      "It may be tempting to park where you shouldn’t while you run a quick errand. Careless parking is a selfish act and could endanger other road users.",
    id: 29,
    mediaType: "image",
    question:
      "You're looking for somewhere to safely park your vehicle. Where would you choose to park?",
  },
  {
    answers: [
      "Carry on waiting",
      "Phone the signal operator",
      "Edge over the stop line and look for trains",
      "Park and investigate",
    ],
    category: 10,
    correctAnswer: 0,
    explanation:
      "If the lights at a level crossing keep flashing after a train has passed, you should continue to wait, because another train might be coming. Time seems to pass slowly when you’re held up in a queue. Be patient and wait until the lights stop flashing.",
    id: 30,
    mediaType: "image",
    question:
      "You're waiting at a level crossing. What must you do if a train passes but the lights keep flashing?",
  },
  {
    answers: [
      "No through road",
      "End of traffic-calming zone",
      "Free-parking zone ends",
      "End of controlled parking zone",
    ],
    category: 10,
    content: require("./../assets/qimage/AB2669n1.jpg"),
    correctAnswer: 3,
    explanation:
      "This sign shows that you're leaving a controlled parking zone and those restrictions no longer apply.",
    id: 31,
    mediaType: "image",
    question: "What does this sign mean?",
  },
  {
    answers: [
      "Obey the speed limit",
      "Obey the limit, but only during rush hour",
      "Ignore the displayed limit ",
      "Use your own judgement; the limit is only advisory",
    ],
    category: 10,
    correctAnswer: 0,
    explanation:
      "Where there are extra hazards, such as at roadworks, it’s often necessary to slow traffic by imposing a lower speed limit. These speed limits aren’t advisory; they must be obeyed.",
    id: 32,
    mediaType: "image",
    question:
      "What must you do if you come across roadworks that have a temporary speed limit displayed?",
  },
  {
    answers: [
      "So that you can see further along the road",
      "So that you can go at a much faster speed",
      "So that you can switch to main beam quickly",
      "So that you can be easily seen by others",
    ],
    category: 10,
    correctAnswer: 3,
    explanation:
      "You may be difficult to see when you’re travelling at night, even on a well-lit road. If you use dipped headlights rather than sidelights, other road users should be able to see you more easily.",
    id: 33,
    mediaType: "image",
    question:
      "You're in a built-up area at night and the road is well lit. Why should you use dipped headlights? ",
  },
  {
    answers: [
      "Proceed to the central reservation and wait",
      "Wait until the road is clear in both directions",
      "Stop in the first lane so that other vehicles give way",
      "Emerge slightly to show your intentions",
    ],
    category: 10,
    correctAnswer: 1,
    explanation:
      "When the central reservation is narrow, it may not be able to contain your vehicle. In this case, you should treat a dual carriageway as one road. Wait until the road is clear in both directions before emerging to turn right. If you try to treat it as two separate roads and wait in the middle, your vehicle will stick out and cause an obstruction that may lead to a collision.",
    id: 34,
    mediaType: "image",
    question:
      "You're turning right onto a dual carriageway. What should you do if the central reservation is too narrow to contain your vehicle?",
  },
  {
    answers: ["30 mph", "50 mph", "60 mph", "70 mph"],
    category: 10,
    correctAnswer: 2,
    explanation:
      "Exceeding the speed limit is dangerous and can result in you receiving penalty points on your licence. It isn't worth it. You should know the speed limit for the road that you're on by observing the road signs. Different speed limits apply if you're towing a trailer.",
    id: 35,
    mediaType: "image",
    question:
      "What's the national speed limit on a single carriageway road for cars and motorcycles?",
  },
  {
    answers: [
      "Park facing the traffic",
      "Leave parking lights switched on",
      "Leave dipped headlights switched on",
      "Park near a street light",
    ],
    category: 10,
    correctAnswer: 1,
    explanation:
      "You must use parking lights when parking at night on a road or in a lay-by on a road with a speed limit greater than 30 mph. You must also park in the direction of the traffic flow and not close to a junction.",
    id: 36,
    mediaType: "image",
    question:
      "What should you do when you park at night on a road that has a 40 mph speed limit?",
  },
  {
    answers: [
      "Approaching the end of a motorway",
      "Approaching a concealed level crossing",
      "Approaching a concealed speed-limit sign",
      "Approaching the end of a dual carriageway",
    ],
    category: 10,
    content: require("./../assets/qimage/AB2826n1.jpg"),
    correctAnswer: 1,
    explanation:
      "If there's a bend just before a level crossing, you may not be able to see the level-crossing barriers or waiting traffic. These signs give you an early warning that you may find these hazards just around the bend.",
    id: 37,
    mediaType: "image",
    question: "Where will you see these red and white markers?",
  },
  {
    answers: [
      "When signalled to stop by a roadworks supervisor",
      "When signalled to stop by a traffic officer",
      "When signalled to stop by a pedestrian on the hard shoulder",
      "When signalled to stop by a driver who has broken down",
    ],
    category: 10,
    correctAnswer: 1,
    explanation:
      "You'll find traffic officers on motorways and some primary routes in England and Wales. They work in partnership with the police, helping to keep traffic moving and helping to make your journey as safe as possible. It's an offence not to comply with the directions given by a traffic officer.",
    id: 38,
    mediaType: "image",
    question:
      "You're travelling on a motorway in England. When must you stop your vehicle?",
  },
  {
    answers: [
      "Signal right on the approach and then left to leave the roundabout",
      "Signal left after you leave the roundabout and enter the new road",
      "Signal right on the approach to the roundabout and keep the signal on",
      "Signal left just after you pass the exit before the one you're going to take",
    ],
    category: 10,
    correctAnswer: 3,
    explanation:
      "To go straight ahead at a roundabout, you should normally approach in the left-hand lane, but check the road markings. At some roundabouts, the left lane on approach is marked ‘left turn only’, so make sure you use the correct lane to go ahead. You won't normally need to signal as you approach, but signal before you leave the roundabout, as other road users need to know your intentions. ",
    id: 39,
    mediaType: "image",
    question:
      "How should you signal if you're going straight ahead at a roundabout?",
  },
  {
    answers: [
      "To overtake slow-moving traffic",
      "When the pavement is very wide",
      "If there are no pedestrians nearby",
      "To gain access to a property",
    ],
    category: 10,
    correctAnswer: 3,
    explanation:
      "It's illegal to drive on or over a pavement, except to gain access to a property. If you need to cross a pavement, give priority to pedestrians.",
    id: 40,
    mediaType: "image",
    question: "When may you drive over a pavement?",
  },
  {
    answers: ["30 mph", "40 mph", "50 mph", "60 mph"],
    category: 10,
    content: require("./../assets/qimage/BB1207.jpg"),
    correctAnswer: 2,
    explanation:
      "When you're towing a trailer, a reduced speed limit also applies on dual carriageways and motorways. These lower speed limits apply to vehicles pulling all sorts of trailers, including caravans and horse boxes.",
    id: 41,
    mediaType: "image",
    question:
      "A single carriageway road has this sign. What's the maximum permitted speed for a car towing a trailer?",
  },
  {
    answers: ["50 mph", "40 mph", "70 mph", "60 mph"],
    category: 10,
    correctAnswer: 3,
    explanation:
      "The speed limit for cars towing caravans or trailers on dual carriageways or motorways is 60 mph. Due to the increased weight and size of the combination, you should plan further ahead. Take care in windy weather, as a strong side wind can make a caravan or large trailer unstable.",
    id: 42,
    mediaType: "image",
    question:
      "What's the speed limit for a car towing a caravan on a dual carriageway?",
  },
  {
    answers: [
      "Park in a bay and not pay",
      "Park on yellow lines and pay",
      "Park on yellow lines and not pay",
      "Park in a bay and pay",
    ],
    category: 10,
    content: require("./../assets/qimage/BB1213.jpg"),
    correctAnswer: 3,
    explanation:
      "Parking restrictions apply in a variety of places and situations. Make sure you know the rules and understand where and when restrictions apply. Controlled parking areas will be indicated by signs and road markings. Parking in the wrong place could cause an obstruction and danger to other traffic. It can also result in a fine.",
    id: 43,
    mediaType: "image",
    question:
      "You want to park and you see this sign. What should you do on the days and times shown?",
  },
  {
    answers: [
      "They may park in the lane",
      "They may drive in the lane at any time",
      "They may use the lane when necessary",
      "They mustn't drive along the lane",
    ],
    category: 10,
    content: require("./../assets/qimage/BB1220n1.jpg"),
    correctAnswer: 3,
    explanation:
      "While it's in operation, other vehicles must not use this part of the carriageway except to pick up or set down passengers. At other times, when the lane isn't in operation, you should still be aware that there may be cyclists using the lane. Give them plenty of room as you pass and allow for their movement from side to side, especially in windy weather or on a bumpy road.nn",
    id: 44,
    mediaType: "image",
    question:
      "A cycle lane, marked by a solid white line, is in operation. What does this mean for car drivers?",
  },
  {
    answers: [
      "Keep just left of the middle of the road",
      "Keep in the middle of the road",
      "Swing out to the right just before turning",
      "Keep well to the left of the road",
    ],
    category: 10,
    correctAnswer: 3,
    explanation:
      "Your road position can help other road users to anticipate your actions. Keep to the left as you approach a left turn and don't swing out into the centre of the road in order to make the turn easier. This could endanger oncoming traffic and may cause other road users to misunderstand your intentions.",
    id: 45,
    mediaType: "image",
    question:
      "You're going to turn left from a main road into a minor road. What should you do as you approach the junction?",
  },
  {
    answers: [
      "Get out and investigate",
      "Telephone the signal operator",
      "Continue to wait",
      "Drive across carefully",
    ],
    category: 10,
    content: require("./../assets/qimage/BB1226.jpg"),
    correctAnswer: 2,
    explanation:
      "At a level crossing, flashing red lights mean you must stop. If the train passes but the lights keep flashing, wait. Another train may be coming.",
    id: 46,
    mediaType: "image",
    question:
      "You're waiting at a level crossing. What should you do if the red warning lights continue to flash after a train has passed by?",
  },
  {
    answers: [
      "Get everyone out of the vehicle immediately",
      "Stop and reverse back to clear the crossing",
      "Keep going and clear the crossing",
      "Stop immediately and use your hazard warning lights",
    ],
    category: 10,
    content: require("./../assets/qimage/BB1227.jpg"),
    correctAnswer: 2,
    explanation:
      "Keep going; don’t stop on the crossing. If the warning sounds and the amber lights come on as you’re approaching the crossing, you must stop unless it's unsafe to do so. Red flashing lights together with the audible warning mean you must stop.",
    id: 47,
    mediaType: "image",
    question:
      "What should you do if the amber lights come on and a warning sounds while you're driving over a level crossing?",
  },
  {
    answers: [
      "Turn into a side road on the right and reverse into the main road",
      "Make a U-turn in the main road",
      "Make a ‘three-point’ turn in the main road",
      "Turn around in a side road",
    ],
    category: 10,
    correctAnswer: 3,
    explanation:
      "Don’t turn around in a busy street or reverse from a side road into a main road. Find a quiet side road and choose a place to turn around where you won’t obstruct an entrance or exit. Look out for pedestrians and cyclists as well as other traffic.",
    id: 48,
    mediaType: "image",
    question:
      "You're driving on a busy main road. What should you do if you find that you're driving in the wrong direction?",
  },
  {
    answers: [
      "When you're carrying out a manoeuvre that includes reversing",
      "When you're moving off on a hill",
      "When you're testing your brakes",
      "When you're driving slowly in queuing traffic",
    ],
    category: 10,
    correctAnswer: 0,
    explanation:
      "You may remove your seat belt while you're carrying out a manoeuvre that includes reversing. However, you must remember to put it back on again before you resume driving.",
    id: 49,
    mediaType: "image",
    question: "When may you drive without wearing your seat belt?",
  },
  {
    answers: [
      "No further than is necessary",
      "No more than a car’s length",
      "As far as it takes to reverse around a corner",
      "The length of a residential street",
    ],
    category: 10,
    correctAnswer: 0,
    explanation:
      "You mustn't reverse further than is necessary. You may decide to turn your vehicle around by reversing into an opening or side road. When you reverse, always look all around you and watch for pedestrians. Don’t reverse from a side road into a main road.",
    id: 50,
    mediaType: "image",
    question: "How far are you allowed to reverse?",
  },
  {
    answers: [
      "Sound your horn",
      "Rev your engine",
      "Get out and check",
      "Reverse slowly",
    ],
    category: 10,
    correctAnswer: 2,
    explanation:
      "A small child could be hidden directly behind you, so, if you can't see all around your vehicle, get out and have a look. You could also ask someone reliable outside the vehicle to guide you.",
    id: 51,
    mediaType: "image",
    question:
      "What should you do when you're unsure whether it's safe to reverse your vehicle?",
  },
  {
    answers: [
      "Your reverse sensors will beep",
      "Your view will be restricted",
      "Your reversing lights will be hidden",
      "Your mirrors will need adjusting",
    ],
    category: 10,
    correctAnswer: 1,
    explanation:
      "Don’t reverse into a main road from a side road because your view will be restricted. The main road is likely to be busy and the traffic on it moving quickly.",
    id: 52,
    mediaType: "image",
    question:
      "Why could it be dangerous to reverse from a side road into a main road?",
  },
  {
    answers: [
      "Wait in the box junction if your exit is clear",
      "Wait before the junction until it's clear of all traffic",
      "Drive on; you can't turn right at a box junction",
      "Drive slowly into the box junction when signalled by oncoming traffic",
    ],
    category: 10,
    correctAnswer: 0,
    explanation:
      "You can wait in the box junction as long as your exit is clear. At some point there'll be a gap in the oncoming traffic, or the traffic lights will change, allowing you to proceed.",
    id: 53,
    mediaType: "image",
    question:
      "You want to turn right at a box junction. What should you do if there's oncoming traffic?",
  },
  {
    answers: [
      "After you’ve completed the manoeuvre",
      "Just before you begin to manoeuvre",
      "After you’ve entered the side road",
      "When the front of your vehicle swings out",
    ],
    category: 10,
    correctAnswer: 3,
    explanation:
      "Always check in all directions before reversing. Keep a good lookout throughout the manoeuvre and remember that the front will swing out as you reverse into the side road. Act on what you see and wait if necessary. ",
    id: 54,
    mediaType: "image",
    question:
      "You're reversing into a side road. When would your vehicle be the greatest hazard to passing traffic?",
  },
  {
    answers: [
      "In a garage",
      "On a busy road",
      "In a quiet car park",
      "Near a red route",
    ],
    category: 10,
    correctAnswer: 0,
    explanation:
      "If you have a garage, use it. Your vehicle is less likely to be a victim of car crime if it's in a garage. Also, in winter, the windows will be kept free from ice and snow.",
    id: 55,
    mediaType: "image",
    question: "Where's the safest place to park your vehicle at night?",
  },
  {
    answers: [
      "To set down and pick up passengers",
      "To use a mobile telephone",
      "To ask for directions",
      "To load or unload goods",
    ],
    category: 10,
    correctAnswer: 0,
    explanation:
      "Urban clearways have their times of operation clearly signed. You may only stop to pick up or set down passengers.",
    id: 56,
    mediaType: "image",
    question: "When may you stop on an urban clearway?",
  },
  {
    answers: [
      "Use one of these spaces",
      "Park in one of these spaces but stay with your vehicle",
      "Use one of the spaces as long as one is kept free",
      "Wait for a regular parking space to become free",
    ],
    category: 10,
    correctAnswer: 3,
    explanation:
      "It's illegal to park in a space reserved for disabled drivers unless you're permitted to do so. These spaces are provided for people with limited mobility, who may need extra space to get in and out of their vehicle.",
    id: 57,
    mediaType: "image",
    question:
      "You're looking for somewhere to park your vehicle. Neither you or your passenger are disabled. What should you do if the only free spaces are marked for disabled drivers?",
  },
  {
    answers: [
      "Pull into a passing place on your right",
      "Force the other driver to reverse",
      "Pull into a passing place if your vehicle is wider",
      "Pull into a passing place on your left",
    ],
    category: 10,
    correctAnswer: 3,
    explanation:
      "Pull into the nearest passing place on the left if you meet another vehicle on a narrow road. If the nearest passing place is on the right, wait opposite it.",
    id: 58,
    mediaType: "image",
    question:
      "You're on a road that's only wide enough for one vehicle. What should you do if a car is coming towards you?",
  },
  {
    answers: [
      "Some time after the vehicle has passed you",
      "Before the vehicle starts to pass you",
      "Only if the other driver dips their headlights",
      "As soon as the vehicle passes you",
    ],
    category: 10,
    correctAnswer: 3,
    explanation:
      "On main beam, your lights could dazzle the driver in front. Dip your headlights as soon as the driver passes you and drop back so that the dipped beam falls short of the vehicle in front.",
    id: 59,
    mediaType: "image",
    question:
      "You're driving at night with your headlights on main beam. A vehicle is overtaking you. When should you dip your headlights?",
  },
  {
    answers: [
      "Outside its hours of operation",
      "To get to the front of a traffic queue",
      "You may not use it at any time",
      "To overtake slow-moving traffic",
    ],
    category: 10,
    content: require("./../assets/qimage/BB1581.jpg"),
    correctAnswer: 0,
    explanation:
      "Some bus lanes operate only during peak hours and other vehicles may use them outside these hours. Make sure you check the sign for the hours of operation before driving in a bus lane.",
    id: 60,
    mediaType: "image",
    question: "When may you drive a car in this bus lane?",
  },
  {
    answers: [
      "By using brake lights",
      "By using sidelights",
      "By using fog lights",
      "By using interior lights",
    ],
    category: 10,
    correctAnswer: 0,
    explanation:
      "Your brake lights will give an indication to traffic behind that you're slowing down. Good anticipation will allow you time to check your mirrors before slowing.",
    id: 61,
    mediaType: "image",
    question:
      "Other than direction indicators, how can you give signals to other road users?",
  },
  {
    answers: [
      "Turn around in a quiet side road",
      "Drive into a side road and reverse out into the main road",
      "Ask someone to stop the traffic",
      "Carry out a U-turn",
    ],
    category: 10,
    correctAnswer: 0,
    explanation:
      "Make sure you carry out the manoeuvre without causing a hazard to other vehicles. Choose a place to turn that's safe and considers other road users.",
    id: 62,
    mediaType: "image",
    question:
      "You're parked in a busy high street. What's the safest way to turn your vehicle around so you can drive in the opposite direction?",
  },
  {
    answers: [
      "Near a police station",
      "In a quiet road",
      "On a red route",
      "In a well-lit area",
    ],
    category: 10,
    correctAnswer: 3,
    explanation:
      "When you're parking at night, park in a well-lit area. This can help deter criminals from targeting your vehicle.",
    id: 63,
    mediaType: "image",
    question: "Where should you park your vehicle at night?",
  },
  {
    answers: [
      "Keep in that lane until you reach the queue",
      "Move to the left immediately",
      "Wait and see which lane is moving faster",
      "Move to the left in good time",
    ],
    category: 10,
    content: require("./../assets/qimage/BB1694n1.jpg"),
    correctAnswer: 3,
    explanation:
      "Keep a lookout for traffic signs. If you’re directed to change lanes, do so in good time. Don’tn• push your way into traffic in another lanen• try to gain advantage by delaying changing lanes.",
    id: 64,
    mediaType: "image",
    question:
      "You're driving in the right-hand lane of a dual carriageway. What should you do if you see a sign showing that the right-hand lane is closed 800 yards ahead?",
  },
  {
    answers: [
      "You shouldn't drive in the lane unless it's unavoidable",
      "There's a reduced speed limit for motor vehicles using the lane",
      "Cyclists can travel in both directions in that lane",
      "The lane must be used by motorcyclists in heavy traffic",
    ],
    category: 10,
    content: require("./../assets/qimage/BB1747n1.jpg"),
    correctAnswer: 0,
    explanation:
      "Cycle lanes are marked with either a solid or a broken white line. If the line is solid, you should check the times of operation shown on the signs, and not drive or park in the lane during those times. If the line is broken, you shouldn't drive or park in the lane unless it's unavoidable.",
    id: 65,
    mediaType: "image",
    question:
      "You're driving on a road that has a cycle lane. What does it mean if the lane is marked by a broken white line?",
  },
  {
    answers: [
      "When you have a Blue Badge",
      "When you have a wheelchair",
      "When you have an advanced driver certificate",
      "When you have an adapted vehicle",
    ],
    category: 10,
    correctAnswer: 0,
    explanation:
      "Don’t park in a space reserved for disabled people unless you or your passenger are a Blue Badge holder. The badge must be displayed on the dashboard or fascia panel, where it can be clearly read through the front windscreen.",
    id: 66,
    mediaType: "image",
    question:
      "When are you allowed to park in a parking bay for disabled drivers?",
  },
  {
    answers: [
      "If you’re involved in an incident that causes damage or injury",
      "At a junction where there are ‘give way’ lines",
      "At the end of a one-way street",
      "Before merging onto a motorway",
    ],
    category: 10,
    correctAnswer: 0,
    explanation:
      "You must stop your vehicle when signalled to do so by a n• police, DVSA or traffic officern• traffic wardenn• school crossing patrol n• red traffic light. nYou must also stop if you're involved in an incident that causes damage or injury to any other person, vehicle, animal or property.",
    id: 67,
    mediaType: "image",
    question: "When must you stop your vehicle?",
  },
  {
    answers: [
      "They're rectangular with a yellow border",
      "They're triangular with a blue border",
      "They're square with a brown border",
      "They're circular with a red border ",
    ],
    category: 5,
    correctAnswer: 3,
    explanation:
      "There are three basic types of traffic sign: those that warn, those that inform and those that give orders. Generally, triangular signs warn, rectangular signs give information or directions and circular signs give orders. An exception is the eight-sided 'stop' sign.",
    id: 1,
    mediaType: "image",
    question: "How can you identify traffic signs that give orders?",
  },
  {
    answers: [
      "Maximum speed limit with traffic calming",
      "Minimum speed limit with traffic calming",
      "‘20 cars only’ parking zone",
      "Only 20 cars allowed at any one time",
    ],
    category: 5,
    content: require("./../assets/qimage/AB2296.jpg"),
    correctAnswer: 0,
    explanation:
      "If you’re in a place where there are likely to be pedestrians (for example, outside a school, near a park, in a residential area or in a shopping area), you should be cautious and keep your speed down. nMany local authorities have taken steps to slow traffic down by creating traffic-calming measures such as road humps. They're there for a reason; slow down.",
    id: 2,
    mediaType: "image",
    question: "What does this sign mean?",
  },
  {
    answers: [
      "New speed limit 20 mph",
      "No vehicles over 30 tonnes",
      "Minimum speed limit 30 mph",
      "End of 20 mph zone",
    ],
    category: 5,
    content: require("./../assets/qimage/AB2299.jpg"),
    correctAnswer: 3,
    explanation:
      "Where you see this sign, the 20 mph restriction ends and a 30 mph restriction starts. Check all around for possible hazards and only increase your speed if it’s safe to do so. ",
    id: 3,
    mediaType: "image",
    question: "What does this sign mean?",
  },
  {
    answers: [
      "No overtaking",
      "No motor vehicles",
      "Clearway (no stopping)",
      "Cars and motorcycles only",
    ],
    category: 5,
    content: require("./../assets/qimage/AB2301.jpg"),
    correctAnswer: 1,
    explanation:
      "A sign will indicate which types of vehicles are prohibited from certain roads. Make sure that you know which signs apply to the vehicle you're using.",
    id: 4,
    mediaType: "image",
    question: "What does this sign mean?",
  },
  {
    answers: ["No parking", "No road markings", "No through road", "No entry"],
    category: 5,
    content: require("./../assets/qimage/AB2302.jpg"),
    correctAnswer: 3,
    explanation:
      "'No entry' signs are used in places such as one-way streets to prevent vehicles driving against the traffic. To ignore one would be dangerous, both for yourself and for other road users, as well as being against the law.",
    id: 5,
    mediaType: "image",
    question: "What does this sign mean?",
  },
  {
    answers: [
      "Bend to the right",
      "Road on the right closed",
      "No traffic from the right",
      "No right turn",
    ],
    category: 5,
    content: require("./../assets/qimage/AB2303.jpg"),
    correctAnswer: 3,
    explanation:
      "The 'no right turn' sign may be used to warn road users that there's a 'no entry' prohibition on a road to the right ahead.",
    id: 6,
    mediaType: "image",
    question: "What does this sign mean?",
  },
  {
    answers: [
      "Route for trams only",
      "Route for buses only",
      "Parking for buses only",
      "Parking for trams only",
    ],
    category: 5,
    content: require("./../assets/qimage/AB2305.jpg"),

    correctAnswer: 0,
    explanation:
      "Avoid blocking tram routes. Trams are fixed on their route and can't manoeuvre around other vehicles or pedestrians. Modern trams travel quickly and are quiet, so you might not hear them approaching.",
    id: 7,
    mediaType: "image",
    question: "What does this sign mean?",
  },
  {
    answers: [
      "Wide vehicles",
      "Long vehicles",
      "High vehicles",
      "Heavy vehicles",
    ],
    category: 5,
    content: require("./../assets/qimage/AB2306.jpg"),
    correctAnswer: 2,
    explanation:
      "The triangular shapes above and below the dimensions indicate a height restriction that applies to the road ahead.",
    id: 8,
    mediaType: "image",
    question: "Which type of vehicle does this sign apply to?",
  },
  {
    answers: [
      "You have priority",
      "No motor vehicles",
      "Two-way traffic",
      "No overtaking",
    ],
    category: 5,
    content: require("./../assets/qimage/AB2308.jpg"),
    correctAnswer: 3,
    explanation:
      "Road signs that prohibit overtaking are placed in locations where passing the vehicle in front is dangerous. If you see this sign, don't attempt to overtake. The sign is there for a reason; you must obey it.",
    id: 9,
    mediaType: "image",
    question: "What does this sign mean?",
  },
  {
    answers: [
      "Waiting restrictions apply",
      "Waiting permitted",
      "National speed limit applies",
      "Clearway (no stopping)",
    ],
    category: 5,
    content: require("./../assets/qimage/AB2311.jpg"),
    correctAnswer: 0,
    explanation:
      "There'll be a plate or additional sign to tell you when the restrictions apply.",
    id: 10,
    mediaType: "image",
    question: "What does this sign mean?",
  },
  {
    answers: [
      "End of restricted speed area",
      "End of restricted parking area",
      "End of clearway",
      "End of cycle route",
    ],
    category: 5,
    content: require("./../assets/qimage/AB2313.jpg"),
    correctAnswer: 1,
    explanation:
      "Even though you've left the restricted area, make sure that you park where you won't endanger other road users or cause an obstruction.",
    id: 11,
    mediaType: "image",
    question: "What does this sign mean?",
  },
  {
    answers: [
      "National speed limit applies",
      "Waiting restrictions apply",
      "No stopping",
      "No entry",
    ],
    category: 5,
    content: require("./../assets/qimage/AB2316.jpg"),
    correctAnswer: 2,
    explanation:
      "This is the sign for a clearway. Clearways are stretches of road where you aren’t allowed to stop unless it’s an emergency. Stopping where these restrictions apply may be dangerous and is likely to cause an obstruction. Restrictions might apply for several miles and this may be indicated on the sign. ",
    id: 12,
    mediaType: "image",
    question: "What does this sign mean?",
  },
  {
    answers: [
      "Distance to parking place ahead",
      "Distance to public telephone ahead",
      "Distance to public house ahead",
      "Distance to passing place ahead",
    ],
    category: 5,
    content: require("./../assets/qimage/AB2317.jpg"),
    correctAnswer: 0,
    explanation:
      "If you intend to stop and rest, this sign allows you time to reduce speed and pull over safely.",
    id: 13,
    mediaType: "image",
    question: "What does this sign mean?",
  },
  {
    answers: [
      "Vehicles may not park on the verge or footway",
      "Vehicles may park on the left-hand side of the road only",
      "Vehicles may park fully on the verge or footway",
      "Vehicles may park on the right-hand side of the road only",
    ],
    category: 5,
    content: require("./../assets/qimage/AB2318.jpg"),
    correctAnswer: 2,
    explanation:
      "In order to keep roads free from parked cars, there are some areas where you're allowed to park on the verge. Only do this where you see the sign. Parking on verges or footways anywhere else could lead to a fine.",
    id: 14,
    mediaType: "image",
    question: "What does this sign mean?",
  },
  {
    answers: [
      "No overtaking allowed",
      "Give priority to oncoming traffic",
      "Two-way traffic",
      "One-way traffic only",
    ],
    category: 5,
    content: require("./../assets/qimage/AB2319.jpg"),
    correctAnswer: 1,
    explanation:
      "Priority signs are normally shown where the road is narrow and there isn't enough room for two vehicles to pass. Examples are narrow bridges, roadworks and where there's a width restriction. nMake sure you know who has priority; don't force your way through. Show courtesy and consideration to other road users.",
    id: 15,
    mediaType: "image",
    question: "What does this traffic sign mean?",
  },
  {
    answers: [
      "End of two-way road",
      "Give priority to vehicles coming towards you",
      "You have priority over vehicles coming towards you",
      "Bus lane ahead",
    ],
    category: 5,
    content: require("./../assets/qimage/AB2320.jpg"),
    correctAnswer: 2,
    explanation:
      "Don't force your way through. Show courtesy and consideration to other road users. Although you have priority, make sure oncoming traffic is going to give way before you continue.",
    id: 16,
    mediaType: "image",
    question: "What's the meaning of this traffic sign?",
  },
  {
    answers: ["Crossroads", "Give way", "Stop", "Turn right"],
    category: 5,
    content: require("./../assets/qimage/AB2325.jpg"),
    correctAnswer: 2,
    explanation:
      "The 'stop' sign is the only road sign that's octagonal. This is so that it can be recognised and obeyed even if it's obscured (for example, by snow).",
    id: 17,
    mediaType: "image",
    question:
      "In winter, road signs can become covered by snow. What does this sign mean?",
  },
  {
    answers: [
      "Service area 30 miles ahead",
      "Maximum speed 30 mph",
      "Minimum speed 30 mph",
      "Lay-by 30 miles ahead",
    ],
    category: 5,
    content: require("./../assets/qimage/AB2327.jpg"),
    correctAnswer: 2,
    explanation:
      "This sign is shown where slow-moving vehicles would impede the flow of traffic; for example, in tunnels. However, if you need to slow down or even stop to avoid an incident or potential collision, you should do so.",
    id: 18,
    mediaType: "image",
    question: "What does this sign mean?",
  },
  {
    answers: [
      "Give way to oncoming vehicles",
      "Approaching traffic passes you on both sides",
      "Turn off at the next available junction",
      "Pass either side to get to the same destination",
    ],
    category: 5,
    content: require("./../assets/qimage/AB2331.jpg"),
    correctAnswer: 3,
    explanation:
      "These signs are often seen in one-way streets that have more than one lane. When you see this sign, use the route that's the most convenient and doesn't require a late change of direction.",
    id: 19,
    mediaType: "image",
    question: "What does this sign mean?",
  },
  {
    answers: [
      "Route for trams",
      "Give way to trams",
      "Route for buses",
      "Give way to buses",
    ],
    category: 5,
    content: require("./../assets/qimage/AB2332.jpg"),
    correctAnswer: 0,
    explanation:
      "Take extra care when you encounter trams. Look out for road markings and signs that alert you to them. Modern trams are very quiet and you may not hear them approaching.",
    id: 20,
    mediaType: "image",
    question: "What does this sign mean?",
  },
  {
    answers: [
      "They give temporary directions during a diversion",
      "They give directions to car parks",
      "They give motorway information",
      "They give mandatory instructions",
    ],
    category: 5,
    content: require("./../assets/qimage/AB2333.jpg"),
    correctAnswer: 3,
    explanation:
      "Signs with blue circles generally give mandatory instruction. These are often found in urban areas and include signs for mini-roundabouts and directional arrows.",
    id: 21,
    mediaType: "image",
    question:
      "What messages are given by circular traffic signs that have a blue background?",
  },
  {
    answers: [
      "On a dual carriageway",
      "On a roundabout",
      "On an urban motorway",
      "On a one-way street",
    ],
    category: 5,
    content: require("./../assets/qimage/AB2335n1.jpg"),
    correctAnswer: 3,
    explanation:
      "The traffic permitted to use a contraflow lane travels in the opposite direction to traffic in the other lanes on the road.",
    id: 22,
    mediaType: "image",
    question: "Where would you see a contraflow bus lane?",
  },
  {
    answers: [
      "Bus station on the right",
      "Contraflow bus lane",
      "With-flow bus lane",
      "Give way to buses",
    ],
    category: 5,
    content: require("./../assets/qimage/AB2336.jpg"),
    correctAnswer: 1,
    explanation:
      "There will also be markings on the road surface to indicate the bus lane. You mustn't use this lane for parking or overtaking.",
    id: 23,
    mediaType: "image",
    question: "What does this sign mean?",
  },
  {
    answers: [
      "Tourist directions",
      "Primary roads",
      "Motorway routes",
      "Minor roads",
    ],
    category: 5,
    content: require("./../assets/qimage/AB2338.jpg"),
    correctAnswer: 0,
    explanation:
      "Signs with a brown background give directions to places of interest. They're often seen on a motorway, directing you along the easiest route to the attraction.",
    id: 24,
    mediaType: "image",
    question: "What does a sign with a brown background show?",
  },
  {
    answers: [
      "Tourist attraction",
      "Beware of trains",
      "Level crossing",
      "Beware of trams",
    ],
    category: 5,
    content: require("./../assets/qimage/AB2339.jpg"),
    correctAnswer: 0,
    explanation:
      "These signs indicate places of interest and are designed to guide you by the easiest route. They're particularly useful when you're unfamiliar with the area.",
    id: 25,
    mediaType: "image",
    question: "What does this sign mean?",
  },
  {
    answers: [
      "To give warnings",
      "To give information",
      "To give orders",
      "To give directions",
    ],
    category: 5,
    content: require("./../assets/qimage/AB2340.jpg"),
    correctAnswer: 0,
    explanation:
      "Triangular signs warn you of hazards ahead. Make sure you look at each sign that you pass on the road, so that you don't miss any vital instructions or information.",
    id: 26,
    mediaType: "image",
    question: "What's the purpose of triangular shaped signs?",
  },
  {
    answers: ["Turn left ahead", "T-junction", "No through road", "Give way"],
    category: 5,
    content: require("./../assets/qimage/AB2341.jpg"),
    correctAnswer: 1,
    explanation:
      "This type of sign warns you of hazards ahead. Make sure you look at each sign and road marking that you pass, so that you don't miss any vital instructions or information. This sign shows there's a T-junction with priority over vehicles from the right. ",
    id: 27,
    mediaType: "image",
    question: "What does this sign mean?",
  },
  {
    answers: [
      "Multi-exit roundabout",
      "Risk of ice",
      "Six roads converge",
      "Place of historical interest",
    ],
    category: 5,
    content: require("./../assets/qimage/AB2342.jpg"),
    correctAnswer: 1,
    explanation:
      "It will take up to 10 times longer to stop when it’s icy. Where there's a risk of icy conditions, you need to be aware of this and take extra care. If you think the road may be icy, don’t brake or steer harshly, as your tyres could lose their grip on the road.",
    id: 28,
    mediaType: "image",
    question: "What does this sign mean?",
  },
  {
    answers: [
      "Crossroads",
      "Level crossing with gate",
      "Level crossing without gate",
      "Ahead only",
    ],
    category: 5,
    content: require("./../assets/qimage/AB2343.jpg"),
    correctAnswer: 0,
    explanation:
      "The priority through the junction is shown by the broader line. You need to be aware of the hazard posed by traffic crossing or pulling out onto a major road.",
    id: 29,
    mediaType: "image",
    question: "What does this sign mean?",
  },
  {
    answers: ["Ring road", "Mini-roundabout", "No vehicles", "Roundabout"],
    category: 5,
    content: require("./../assets/qimage/AB2344.jpg"),
    correctAnswer: 3,
    explanation:
      "As you approach a roundabout, look well ahead and check all signs. Decide which exit you wish to take and move into the correct position as you approach the roundabout, signalling as required.",
    id: 30,
    mediaType: "image",
    question: "What does this sign mean?",
  },
  {
    answers: ["Road narrows", "Ahead only", "Keep left", "Minimum speed"],
    category: 5,
    content: require("./../assets/qimage/AB2345.jpg"),
    correctAnswer: 0,
    explanation:
      "Warning signs are there to make you aware of potential hazards on the road ahead. Take note of the signs so you're prepared and can take whatever action is necessary.",
    id: 31,
    mediaType: "image",
    question: "What information would be shown in a triangular road sign?",
  },
  {
    answers: [
      "Cyclists must dismount",
      "Cycles aren't allowed",
      "Cycle route ahead",
      "Cycle in single file",
    ],
    category: 5,
    content: require("./../assets/qimage/AB2346.jpg"),
    correctAnswer: 2,
    explanation:
      "Where there's a cycle route ahead, a sign will show a bicycle in a red warning triangle. Watch out for children on bicycles and cyclists rejoining the main road.",
    id: 32,
    mediaType: "image",
    question: "What does this sign mean?",
  },
  {
    answers: [
      "Wait at the barriers",
      "Wait at the crossroads",
      "Give way to trams",
      "Give way to farm vehicles",
    ],
    category: 5,
    content: require("./../assets/qimage/AB2352.jpg"),
    correctAnswer: 2,
    explanation:
      "Obey the 'give way' signs. Trams are unable to steer around you if you misjudge when it's safe to enter the junction.",
    id: 33,
    mediaType: "image",
    question: "What does this sign mean?",
  },
  {
    answers: [
      "Hump bridge",
      "Humps in the road",
      "Entrance to tunnel",
      "Soft verges",
    ],
    category: 5,
    content: require("./../assets/qimage/AB2353.jpg"),
    correctAnswer: 1,
    explanation:
      "These humps have been put in place to slow the traffic down. They're usually found in residential areas. Slow down to an appropriate speed. ",
    id: 34,
    mediaType: "image",
    question: "What does this sign mean?",
  },
  {
    answers: [
      "End of dual carriageway",
      "Tall bridge",
      "Road narrows",
      "End of narrow bridge",
    ],
    category: 5,
    content: require("./../assets/qimage/AB2358.jpg"),
    correctAnswer: 0,
    explanation:
      "Don't wait until the last moment before moving into the left-hand lane. Plan ahead and don't rely on other traffic letting you in.",
    id: 35,
    mediaType: "image",
    question: "What does this sign mean?",
  },
  {
    answers: ["Side winds", "Road noise", "Airport", "Adverse camber"],
    category: 5,
    content: require("./../assets/qimage/AB2360.jpg"),
    correctAnswer: 0,
    explanation:
      "A warning sign with a picture of a windsock indicates that there may be strong side winds. This sign is often found on exposed roads.",
    id: 36,
    mediaType: "image",
    question: "What does this sign mean?",
  },
  {
    answers: [
      "Slippery road ahead",
      "Tyres liable to punctures ahead",
      "Danger ahead",
      "Service area ahead",
    ],
    category: 5,
    content: require("./../assets/qimage/AB2361.jpg"),
    correctAnswer: 2,
    explanation:
      "This sign is there to alert you to the likelihood of danger ahead. It may be accompanied by a plate indicating the type of hazard. Be ready to reduce your speed and take avoiding action.",
    id: 37,
    mediaType: "image",
    question: "What does this traffic sign mean?",
  },
  {
    answers: [
      "Overtake the other driver as quickly as possible",
      "Move to the right to get a better view",
      "Switch your headlights on before overtaking",
      "Hold back until you can see clearly ahead",
    ],
    category: 5,
    content: require("./../assets/qimage/AB2362.jpg"),
    correctAnswer: 3,
    explanation:
      "You won't be able to see any hazards that might be hidden in the dip. As well as oncoming traffic, the dip may concealn• cyclistsn• horse ridersn• parked vehiclesn• pedestriansnin the road. ",
    id: 38,
    mediaType: "image",
    question:
      "You're about to overtake. What should you do when you see this sign?",
  },
  {
    answers: [
      "Level crossing with gate or barrier",
      "Gated road ahead",
      "Level crossing without gate or barrier",
      "Cattle grid ahead",
    ],
    category: 5,
    content: require("./../assets/qimage/AB2363.jpg"),
    correctAnswer: 0,
    explanation:
      "Some crossings have gates but no attendant or signals. You should stop, look both ways, listen and make sure that no train is approaching. If there's a telephone, contact the signal operator to make sure it's safe to cross.",
    id: 39,
    mediaType: "image",
    question: "What does this sign mean?",
  },
  {
    answers: [
      "No trams ahead",
      "Oncoming trams",
      "Trams crossing ahead",
      "Trams only",
    ],
    category: 5,
    content: require("./../assets/qimage/AB2364.jpg"),
    correctAnswer: 2,
    explanation:
      "This sign tells you to beware of trams. If you don't usually drive in a town where there are trams, remember to look out for them at junctions and look for tram rails, signs and signals.",
    id: 40,
    mediaType: "image",
    question: "What does this sign mean?",
  },
  {
    answers: [
      "Adverse camber",
      "Steep hill downwards",
      "Uneven road",
      "Steep hill upwards",
    ],
    category: 5,
    content: require("./../assets/qimage/AB2365.jpg"),
    correctAnswer: 1,
    explanation:
      "This sign gives you an early warning that the road ahead will slope downhill. Prepare to alter your speed and gear. Looking at the sign from left to right will show you whether the road slopes uphill or downhill. ",
    id: 41,
    mediaType: "image",
    question: "What does this sign mean?",
  },
  {
    answers: [
      "Uneven road surface",
      "Bridge over the road",
      "Road ahead ends",
      "Water across the road",
    ],
    category: 5,
    content: require("./../assets/qimage/AB2367.jpg"),
    correctAnswer: 3,
    explanation:
      "This sign is found where a shallow stream crosses the road. Heavy rainfall could increase the flow of water. If the water looks too deep or the stream has spread over a large distance, stop and find another route.",
    id: 42,
    mediaType: "image",
    question: "What does this sign mean?",
  },
  {
    answers: [
      "Turn left for parking area",
      "No through road on the left",
      "No entry for traffic turning left",
      "Turn left for ferry terminal",
    ],
    category: 5,
    content: require("./../assets/qimage/AB2369.jpg"),
    correctAnswer: 1,
    explanation:
      "This sign shows you that you can't get through to another route by turning left at the junction ahead.",
    id: 43,
    mediaType: "image",
    question: "What does this sign mean?",
  },
  {
    answers: [
      "T-junction",
      "No through road",
      "Telephone box ahead",
      "Toilet ahead",
    ],
    category: 5,
    content: require("./../assets/qimage/AB2370.jpg"),
    correctAnswer: 1,
    explanation:
      "You won't be able to find a through route to another road. Use this road only for access.",
    id: 44,
    mediaType: "image",
    question: "What does this sign mean?",
  },
  {
    answers: [
      "The right-hand lane ahead is narrow",
      "Right-hand lane for buses only",
      "Right-hand lane for turning right",
      "The right-hand lane is closed",
    ],
    category: 5,
    content: require("./../assets/qimage/AB2378.jpg"),
    correctAnswer: 3,
    explanation:
      "Yellow-and-black temporary signs may be used to inform you about roadworks or lane restrictions. Look well ahead. If you have to change lanes, do so in good time.",
    id: 46,
    mediaType: "image",
    question: "What does this sign mean?",
  },
  {
    answers: [
      "Change to the left-hand lane",
      "Leave at the next exit",
      "Contraflow system",
      "One-way street",
    ],
    category: 5,
    content: require("./../assets/qimage/AB2379.jpg"),
    correctAnswer: 2,
    explanation:
      "If you use the right-hand lane in a contraflow system, you’ll be travelling with no permanent barrier between you and the oncoming traffic. Observe speed limits and keep a good distance from the vehicle ahead.",
    id: 47,
    mediaType: "image",
    question: "What does this sign mean?",
  },
  {
    answers: [
      "Leave motorway at next exit",
      "Lane for heavy and slow vehicles",
      "All lorries use the hard shoulder",
      "Rest area for lorries",
    ],
    category: 5,
    content: require("./../assets/qimage/AB2381.jpg"),
    correctAnswer: 1,
    explanation:
      "Where there's a long, steep, uphill gradient on a motorway, a crawler lane may be provided. This helps the traffic to flow by diverting the slower heavy vehicles into a dedicated lane on the left.",
    id: 48,
    mediaType: "image",
    question: "What does this sign mean?",
  },
  {
    answers: [
      "You should stop unless turning left",
      "Stop, if you're able to brake safely",
      "You must stop and wait behind the stop line",
      "Proceed with care",
    ],
    category: 5,
    correctAnswer: 2,
    explanation:
      "Whatever light is showing, you should know which light is going to appear next and be able to take appropriate action. For example, when amber is showing on its own, you’ll know that red will appear next. This should give you ample time to anticipate and respond safely.",
    id: 49,
    mediaType: "image",
    question: "What does a red traffic light mean?",
  },
  {
    answers: [
      "Prepare to go",
      "Go if the way is clear",
      "Go if no pedestrians are crossing",
      "Stop at the stop line",
    ],
    category: 5,
    correctAnswer: 3,
    explanation:
      "When the amber light is showing on its own, the red light will follow next. The amber light means stop, unless you've already crossed the stop line or you're so close to it that stopping may cause a collision.",
    id: 50,
    mediaType: "image",
    question:
      "At traffic lights, what does it mean when the amber light shows on its own?",
  },
  {
    answers: [
      "When pedestrians are waiting to cross",
      "When your exit from the junction is blocked",
      "When you think the lights may be about to change",
      "When you intend to turn right",
    ],
    category: 5,
    correctAnswer: 1,
    explanation:
      "As you approach the traffic lights, look into the road you wish to take. Only proceed if your exit road is clear. If the road is blocked, hold back, even if you have to wait for the next green signal.",
    id: 51,
    mediaType: "image",
    question:
      "You're at a junction controlled by traffic lights. When should you wait at a green light?",
  },
  {
    answers: [
      "Traffic lights out of order",
      "Amber signal out of order",
      "Temporary traffic lights ahead",
      "New traffic lights ahead",
    ],
    category: 5,
    content: require("./../assets/qimage/AB2390n1.jpg"),
    correctAnswer: 0,
    explanation:
      "You might see this sign where traffic lights are out of order. Proceed with caution, as nobody has priority at the junction.",
    id: 52,
    mediaType: "image",
    question: "What does this sign mean?",
  },
  {
    answers: [
      "Traffic going straight on",
      "Traffic turning right",
      "Nobody",
      "Traffic turning left",
    ],
    category: 5,
    correctAnswer: 2,
    explanation:
      "When traffic lights are out of order, you should treat the junction as an unmarked crossroads. Be cautious, as you may need to give way or stop. Look for traffic attempting to cross the junction, unaware that it doesn’t have priority.",
    id: 53,
    mediaType: "image",
    question: "Who has priority when traffic lights are out of order?",
  },
  {
    answers: [
      "Pelican crossings",
      "Motorway exits",
      "Zebra crossings",
      "Level crossings",
    ],
    category: 5,
    content: require("./../assets/qimage/AB2393n1.jpg"),
    correctAnswer: 3,
    explanation:
      "These signals are found at level crossings, swing or lifting bridges, some airfields and emergency access sites. The flashing red lights mean stop whether or not the way seems to be clear.",
    id: 54,
    mediaType: "image",
    question: "Where would you find these flashing red light signals?",
  },
  {
    answers: [
      "No parking at any time",
      "Parking allowed only for a short time",
      "Slow down to 20 mph",
      "Sounding horns isn't allowed",
    ],
    category: 5,
    content: require("./../assets/qimage/AB2394n1.jpg"),
    correctAnswer: 0,
    explanation:
      "The approach to, and exit from, a pedestrian crossing is marked with zigzag lines. You mustn't park on them or overtake the leading vehicle when approaching the crossing. Parking here would block the view for pedestrians and approaching traffic.",
    id: 55,
    mediaType: "image",
    question: "What do these zigzag white lines mean?",
  },
  {
    answers: [
      "To pass traffic that's queuing back at a junction",
      "To pass a car signalling to turn left ahead",
      "To pass a road maintenance vehicle travelling at 10 mph or less",
      "To pass a vehicle that's towing a trailer",
    ],
    category: 5,
    content: require("./../assets/qimage/AB2396n1.jpg"),
    correctAnswer: 2,
    explanation:
      "You may cross the solid white line to pass a stationary vehicle or to pass a pedal cycle, horse or road maintenance vehicle if it's travelling at 10 mph or less. You may also cross the solid white line to enter a side road or access a property.",
    id: 56,
    mediaType: "image",
    question:
      "When may you cross a double solid white line in the middle of the road?",
  },
  {
    answers: [
      "Don't cross the line",
      "No stopping allowed",
      "You're approaching a hazard",
      "No overtaking allowed",
    ],
    category: 5,
    content: require("./../assets/qimage/AB2398n1.jpg"),
    correctAnswer: 2,
    explanation:
      "A single broken line along the centre of the road, with long markings and short gaps, is a hazard warning line. Don’t cross it unless you can see that the road is clear well ahead.",
    id: 57,
    mediaType: "image",
    question: "What does this road marking mean?",
  },
  {
    answers: [
      "At traffic lights",
      "On road humps",
      "Near a level crossing",
      "At a box junction",
    ],
    category: 5,
    content: require("./../assets/qimage/AB2400.jpg"),
    correctAnswer: 1,
    explanation:
      "Because the road has a dark colour, changes in level aren't easily seen. White triangles painted on the road surface give you an indication of where there are road humps.",
    id: 58,
    mediaType: "image",
    question: "Where would you see this road marking?",
  },
  {
    answers: [
      "Speed on the major road is derestricted",
      "It's a busy junction",
      "Visibility along the major road is restricted",
      "The junction is on a downhill gradient",
    ],
    category: 5,
    content: require("./../assets/qimage/AB2402n1.jpg"),
    correctAnswer: 2,
    explanation:
      "Where emerging traffic has a very restricted view of the main road, you may find a 'stop' sign and a solid white stop line. You must stop at the line and then check carefully before you emerge.",
    id: 59,
    mediaType: "image",
    question:
      "Why does this junction have a 'stop' sign and a stop line on the road?",
  },
  {
    answers: [
      "Give way to traffic from the right",
      "Traffic from the left has right of way",
      "You have right of way",
      "Stop at the line",
    ],
    category: 5,
    content: require("./../assets/qimage/AB2403n1.jpg"),
    correctAnswer: 0,
    explanation:
      "Slow down as you approach the roundabout and check for traffic from the right. If you need to stop and give way, stay behind the broken line until it's safe to emerge onto the roundabout.",
    id: 60,
    mediaType: "image",
    question:
      "What does this line across the road at the entrance to a roundabout mean?",
  },
  {
    answers: [
      "Flash the headlights, indicate left and point to the left",
      "Overtake and give a slowing down arm signal",
      "Use the siren, overtake, cut in front and stop",
      "Pull alongside you, use the siren and wave you to stop",
    ],
    category: 5,
    correctAnswer: 0,
    explanation:
      "You must obey signals given by the police. If a police officer in a patrol vehicle wants you to pull over, they'll indicate this without causing danger to you or other traffic.",
    id: 61,
    mediaType: "image",
    question:
      "How will a police officer in a patrol vehicle signal for you to stop?",
  },
  {
    answers: [
      "Turn left only",
      "Turn right only",
      "Continue ahead only",
      "Stop at the stop line",
    ],
    category: 5,
    content: require("./../assets/qimage/AB2407n1.jpg"),
    correctAnswer: 3,
    explanation:
      "When a police officer or traffic warden is directing traffic, you must obey them. They'll use the arm signals shown in The Highway Code. Learn what these signals mean and obey them.",
    id: 62,
    mediaType: "image",
    question:
      "You're approaching a junction where the traffic lights aren't working. What should you do when a police officer gives this signal?",
  },
  {
    answers: [
      "The driver is slowing down",
      "The driver intends to turn right",
      "The driver wishes to overtake",
      "The driver intends to turn left",
    ],
    category: 5,
    content: require("./../assets/qimage/AB2408n1.jpg"),
    correctAnswer: 3,
    explanation:
      "There might be an occasion where another driver uses an arm signal. This may be because the vehicle’s indicators are obscured by other traffic. In order for such signals to be effective, all drivers should know their meaning. Be aware that the ‘left turn’ signal might look similar to the ‘slowing down’ signal.",
    id: 63,
    mediaType: "image",
    question: "What does this arm signal mean?",
  },
  {
    answers: [
      "Change to the lane on your left",
      "Leave the motorway at the next exit",
      "Change to the opposite carriageway",
      "Pull up on the hard shoulder",
    ],
    category: 5,
    content: require("./../assets/qimage/AB2418.jpg"),
    correctAnswer: 0,
    explanation:
      "On the motorway, signs sometimes show temporary warnings due to traffic or weather conditions. They may be used to indicaten• lane closuresn• temporary speed limitsn• weather warnings.",
    id: 64,
    mediaType: "image",
    question: "What does this motorway sign mean?",
  },
  {
    answers: [
      "Temporary minimum speed 50 mph",
      "No services for 50 miles",
      "Obstruction 50 metres (164 feet) ahead",
      "Temporary maximum speed 50 mph",
    ],
    category: 5,
    content: require("./../assets/qimage/AB2419.jpg"),
    correctAnswer: 3,
    explanation:
      "Look out for signs above your lane or on the central reservation. These will give you important information or warnings about the road ahead. To allow for the high speed of motorway traffic, these signs may light up some distance from any hazard. Don't ignore the signs just because the road looks clear to you.",
    id: 65,
    mediaType: "image",
    question: "What does this motorway sign mean?",
  },
  {
    answers: [
      "Through traffic to use left lane",
      "Right-hand lane T-junction only",
      "Right-hand lane closed ahead",
      "11 tonne weight limit",
    ],
    category: 5,
    content: require("./../assets/qimage/AB2420.jpg"),
    correctAnswer: 2,
    explanation:
      "You should change lanes as directed by the sign. Here, the right-hand lane is closed but the left-hand and centre lanes are available. Merging in turn is recommended when it's safe and traffic is going slowly; for example, at roadworks or a road traffic incident. When vehicles are travelling at speed, this isn't advisable and you should move into the appropriate lane in good time. ",
    id: 66,
    mediaType: "image",
    question: "What does this sign mean?",
  },
  {
    answers: [
      "The distance to the nearest town",
      "The route number of the road",
      "The number of the next junction",
      "The speed limit on the slip road",
    ],
    category: 5,
    content: require("./../assets/qimage/AB2422.jpg"),
    correctAnswer: 2,
    explanation:
      "Before you set out on your journey, use a road map to plan your route. When you see an advance warning of your junction, make sure you get into the correct lane in plenty of time. Last-minute harsh braking and cutting across lanes at speed is extremely hazardous.",
    id: 67,
    mediaType: "image",
    question: "What does '25' mean on this motorway sign?",
  },
  {
    answers: [
      "As a high-speed lane",
      "As an overtaking lane",
      "As a right-turn lane",
      "As an acceleration lane",
    ],
    category: 5,
    correctAnswer: 1,
    explanation:
      "You should stay in the left-hand lane of a motorway unless you're overtaking another vehicle. The right-hand lane of a motorway is an overtaking lane; it isn't the 'fast lane'. After overtaking, move back to the left when it's safe to do so.",
    id: 68,
    mediaType: "image",
    question:
      "How should the right-hand lane of a three-lane motorway be used?",
  },
  {
    answers: [
      "Separating the slip road from the motorway",
      "On the left-hand edge of the road",
      "On the right-hand edge of the road",
      "Separating the lanes",
    ],
    category: 5,
    correctAnswer: 2,
    explanation:
      "At night or in poor visibility, reflective studs on the road help you to judge your position on the carriageway.",
    id: 69,
    mediaType: "image",
    question: "Where can you find reflective amber studs on a motorway?",
  },
  {
    answers: [
      "Separating driving lanes",
      "Between the hard shoulder and the carriageway",
      "At slip-road entrances and exits",
      "Between the carriageway and the central reservation",
    ],
    category: 5,
    correctAnswer: 2,
    explanation:
      "Knowing the colours of the reflective studs on the road will help you judge your position, especially at night, in foggy conditions or when visibility is poor.",
    id: 70,
    mediaType: "image",
    question: "Where would you find green reflective studs on a motorway?",
  },
  {
    answers: [
      "Leave the motorway at the next exit",
      "Turn left immediately",
      "Change lane",
      "Move onto the hard shoulder",
    ],
    category: 5,
    content: require("./../assets/qimage/AB2426.jpg"),
    correctAnswer: 0,
    explanation:
      "You'll see this sign if the motorway is closed ahead. Pull into the left-hand lane as soon as it's safe to do so. Don't wait until the last moment before you move across, because the lane may be busy and you'll have to rely on another driver making room for you.",
    id: 71,
    mediaType: "image",
    question:
      "What should you do when you see this sign as you travel along a motorway?",
  },
  {
    answers: [
      "No motor vehicles",
      "End of motorway",
      "No through road",
      "End of bus lane",
    ],
    category: 5,
    content: require("./../assets/qimage/AB2428.jpg"),
    correctAnswer: 1,
    explanation:
      "When you leave the motorway, make sure that you check your speedometer. You may be going faster than you realise. Slow down and look for speed-limit signs.",
    id: 72,
    mediaType: "image",
    question: "What does this sign mean?",
  },
  {
    answers: ["50 mph", "60 mph", "40 mph", "70 mph"],
    category: 5,
    correctAnswer: 1,
    explanation:
      "If you’re travelling on a dual carriageway that becomes a single carriageway road, reduce your speed gradually so that you aren’t exceeding the limit as you enter. There might not be a sign to remind you of the limit, so make sure you know the speed limits for different types of road and vehicle.",
    id: 73,
    mediaType: "image",
    question: "What's the national speed limit on a single carriageway road?",
  },
  {
    answers: [
      "End of motorway",
      "End of restriction",
      "Lane ends ahead",
      "Free recovery ends",
    ],
    category: 5,
    content: require("./../assets/qimage/AB2529.jpg"),
    correctAnswer: 1,
    explanation:
      "Temporary restrictions on motorways are shown on signs that have flashing amber lights. At the end of the restriction, you'll see this sign without any flashing lights.",
    id: 74,
    mediaType: "image",
    question: "What does this sign mean?",
  },
  {
    answers: [
      "A diversion route",
      "A picnic area",
      "A pedestrian zone",
      "A cycle route",
    ],
    category: 5,
    content: require("./../assets/qimage/AB2530.jpg"),
    correctAnswer: 0,
    explanation:
      "When a diversion route has been put in place, drivers are advised to follow a symbol, which may be a black triangle, square, circle or diamond shape on a yellow background.",
    id: 75,
    mediaType: "image",
    question: "What does this sign indicate?",
  },
  {
    answers: [
      "Compulsory maximum speed limit",
      "Advisory maximum speed limit",
      "Compulsory minimum speed limit",
      "Advised separation distance",
    ],
    category: 5,
    content: require("./../assets/qimage/AB2578n1.jpg"),
    correctAnswer: 0,
    explanation:
      "The sign gives you an early warning of a speed restriction. If you're travelling at a higher speed, slow down in good time. You could come across queuing traffic due to roadworks or a temporary obstruction.",
    id: 76,
    mediaType: "image",
    question: "What does this traffic sign mean?",
  },
  {
    answers: [
      "Maintain the same speed",
      "Carry on with great care",
      "Find another route",
      "Telephone the police",
    ],
    category: 5,
    content: require("./../assets/qimage/AB2579n1.jpg"),
    correctAnswer: 1,
    explanation:
      "When traffic lights are out of order, treat the junction as an unmarked crossroads. Be very careful and be prepared to stop; no-one has priority.",
    id: 77,
    mediaType: "image",
    question: "What should you do when you see this sign at a crossroads?",
  },
  {
    answers: ["Motorcycles only", "No cars", "Cars only", "No motorcycles"],
    category: 5,
    content: require("./../assets/qimage/AB2591.jpg"),
    correctAnswer: 3,
    explanation:
      "You must comply with all traffic signs and be especially aware of those signs that apply specifically to the type of vehicle you're using. ",
    id: 78,
    mediaType: "image",
    question: "What does this sign mean?",
  },
  {
    answers: [
      "Move into the right-hand lane",
      "Stop behind the flashing lights",
      "Pass the lorry on the left",
      "Leave the motorway at the next exit",
    ],
    category: 5,
    content: require("./../assets/qimage/AB2592.jpg"),
    correctAnswer: 2,
    explanation:
      "Sometimes work is carried out on the motorway without closing the lanes. When this happens, signs are mounted on the back of lorries to warn other road users of the roadworks ahead. ",
    id: 79,
    mediaType: "image",
    question:
      "You're on a motorway. A lorry has stopped in the right-hand lane. What should you do when you see this sign on the lorry?",
  },
  {
    answers: [
      "Continue in that lane and look for further information",
      "Don't continue in that lane",
      "Pull onto the hard shoulder",
      "Stop and wait for an instruction to proceed",
    ],
    category: 5,
    correctAnswer: 1,
    explanation:
      "A red cross above your lane shows that your lane is closed. You should move into another lane as soon as you can do so safely.",
    id: 80,
    mediaType: "image",
    question:
      "You're on a motorway. What should you do if there's a red cross showing on the signs above your lane only?",
  },
  {
    answers: [
      "To give you right of way",
      "To attract a friend’s attention",
      "To warn others of your presence",
      "To make slower drivers move over",
    ],
    category: 5,
    correctAnswer: 2,
    explanation:
      "Never sound your vehicle's horn aggressively. You mustn't sound it in a built-up area between 11.30 pm and 7.00 am, or when you're stationary, unless another road user poses a danger. Don't scare animals by sounding your horn.",
    id: 81,
    mediaType: "image",
    question: "When may you sound your vehicle's horn?",
  },
  {
    answers: [
      "When another road user poses a danger",
      "When the road is blocked by queuing traffic",
      "When it's used only briefly",
      "When signalling that you've just arrived",
    ],
    category: 5,
    correctAnswer: 0,
    explanation:
      "When your vehicle is stationary, only sound the horn if you think there's a risk of danger from another road user. Don't use it just to attract someone's attention. This causes unnecessary noise and could be misleading.",
    id: 82,
    mediaType: "image",
    question: "Your vehicle is stationary. When may you use its horn?",
  },
  {
    answers: [
      "You can park on the days and times shown",
      "No parking on the days and times shown",
      "No parking at all from Monday to Friday",
      "End of the urban clearway restrictions",
    ],
    category: 5,
    content: require("./../assets/qimage/AB2670.jpg"),
    correctAnswer: 1,
    explanation:
      "Urban clearways are provided to keep traffic flowing at busy times. You may stop only briefly to set down or pick up passengers. Times of operation will vary from place to place, so always check the signs.",
    id: 83,
    mediaType: "image",
    question: "What does this sign mean?",
  },
  {
    answers: [
      "Quayside or river bank",
      "Steep hill downwards",
      "Uneven road surface",
      "Road liable to flooding",
    ],
    category: 5,
    content: require("./../assets/qimage/AB2671.jpg"),
    correctAnswer: 0,
    explanation:
      "You should be careful in these locations, as the road surface is likely to be wet and slippery. There may be a steep drop to the water, and there may not be a barrier along the edge of the road.",
    id: 84,
    mediaType: "image",
    question: "What does this sign mean?",
  },
  {
    answers: ["Bus lane", "Hazard warning", "Give way", "Lane marking"],
    category: 5,
    content: require("./../assets/qimage/AB2676n1.jpg"),
    correctAnswer: 1,
    explanation:
      "The centre of the road is usually marked by a broken white line, with lines that are shorter than the gaps. When the lines become longer than the gaps, this is a hazard warning line. Look well ahead for these, especially when you're planning to overtake or turn off.",
    id: 85,
    mediaType: "image",
    question: "What do the long white lines along the centre of the road mean?",
  },
  {
    answers: [
      "It separates traffic flowing in opposite directions",
      "It marks an area to be used by overtaking motorcyclists",
      "It's a temporary marking to warn of the roadworks",
      "It separates the two sides of the dual carriageway",
    ],
    category: 5,
    content: require("./../assets/qimage/AB2681n1.jpg"),
    correctAnswer: 0,
    explanation:
      "Areas of 'hatched markings' such as these separate traffic streams that could be a danger to each other. They're often seen on bends or where the road becomes narrow. If the area is bordered by a solid white line, you mustn't enter it except in an emergency.",
    id: 86,
    mediaType: "image",
    question:
      "What's the reason for the hatched area along the centre of this road?",
  },
  {
    answers: [
      "There's a radar speed trap ahead",
      "They're giving way to you",
      "They're warning you of their presence",
      "There's a fault with your vehicle",
    ],
    category: 5,
    correctAnswer: 2,
    explanation:
      "If other drivers flash their headlights, this isn’t a signal to show priority. The flashing of headlights has the same meaning as sounding the horn: it’s a warning of their presence.",
    id: 87,
    mediaType: "image",
    question:
      "Other drivers may sometimes flash their headlights at you. What's the official meaning of this signal?",
  },
  {
    answers: [
      "Cars must stop",
      "Trams must stop",
      "Both trams and cars must stop",
      "Both trams and cars can continue",
    ],
    category: 5,
    content: require("./../assets/qimage/AB2738.jpg"),
    correctAnswer: 1,
    explanation:
      "The white light shows that trams must stop. The green light shows that other vehicles can go if the way is clear. Trams are being introduced into more cities, so you're likely to come across them and you should learn which signs apply to them.",
    id: 88,
    mediaType: "image",
    question: "What does this signal mean?",
  },
  {
    answers: [
      "At a railway crossing",
      "At a mini-roundabout",
      "On a motorway",
      "On a pedestrian crossing",
    ],
    category: 5,
    content: require("./../assets/qimage/AB2756.jpg"),
    correctAnswer: 1,
    explanation:
      "These markings show the direction in which the traffic should go at a mini-roundabout.",
    id: 89,
    mediaType: "image",
    question: "Where would you find these road markings?",
  },
  {
    answers: [
      "Turn left at the next junction",
      "Pull up on the left",
      "Stop immediately",
      "Move over to the left",
    ],
    category: 5,
    correctAnswer: 1,
    explanation:
      "You must pull up on the left as soon as it’s safe to do so and switch off your engine.",
    id: 90,
    mediaType: "image",
    question:
      "A police car is following you. What should you do if the police officer flashes the headlights and points to the left?",
  },
  {
    answers: [
      "Red alone",
      "Red and amber together",
      "Green and amber together",
      "Green alone",
    ],
    category: 5,
    content: require("./../assets/qimage/AB2758n1.jpg"),
    correctAnswer: 0,
    explanation:
      "At junctions controlled by traffic lights, you must stop behind the white line until the lights change to green. A red light, an amber light, and red and amber lights showing together all mean stop.nYou may proceed when the light is green unless your exit road is blocked or pedestrians are crossing in front of you.nIf you’re approaching traffic lights that are visible from a distance and the light has been green for some time, be ready to slow down and stop, because the lights are likely to change.",
    id: 91,
    mediaType: "image",
    question:
      "You see this amber traffic light ahead. Which light, or lights, will come on next?",
  },
  {
    answers: [
      "Leave the motorway at the next exit",
      "All vehicles use the hard shoulder",
      "Sharp bend to the left ahead",
      "Stop: all lanes ahead closed",
    ],
    category: 5,
    content: require("./../assets/qimage/AB2760.jpg"),
    correctAnswer: 0,
    explanation:
      "You'll see this sign if there has been an incident ahead and the motorway is closed. You must obey the sign. Make sure that you prepare to leave in good time. nDon’t cause drivers to take avoiding action by cutting in at the last moment.",
    id: 92,
    mediaType: "image",
    question: "What does it mean if you see this signal on the motorway?",
  },
  {
    answers: [
      "Stop only if traffic is approaching",
      "Stop even if the road is clear",
      "Stop only if children are waiting to cross",
      "Stop only if a red light is showing",
    ],
    category: 5,
    content: require("./../assets/qimage/AB2762.jpg"),
    correctAnswer: 1,
    explanation:
      "'Stop' signs are situated at junctions where visibility is restricted or where there's heavy traffic. They must be obeyed: you must stop. Look carefully before moving off.",
    id: 93,
    mediaType: "image",
    question: "What must you do when you see this sign?",
  },
  {
    answers: ["Buses turning", "Ring road", "Mini-roundabout", "Keep right"],
    category: 5,
    content: require("./../assets/qimage/AB2764.jpg"),
    correctAnswer: 2,
    explanation:
      "When you see this sign, look out for any direction signs and judge whether you need to signal your intentions. Do this in good time so that other road users approaching the roundabout know what you're planning to do.",
    id: 94,
    mediaType: "image",
    question: "What does this sign mean?",
  },
  {
    answers: [
      "Two-way traffic straight ahead",
      "Two-way traffic crosses a one-way road",
      "Two-way traffic over a bridge",
      "Two-way traffic crosses a two-way road",
    ],
    category: 5,
    content: require("./../assets/qimage/AB2765.jpg"),
    correctAnswer: 1,
    explanation:
      "Be prepared for traffic approaching from junctions on either side of you. Try to avoid unnecessary changing of lanes just before the junction.",
    id: 95,
    mediaType: "image",
    question: "What does this sign mean?",
  },
  {
    answers: [
      "Two-way traffic crosses a one-way road",
      "Traffic approaching you has priority",
      "Two-way traffic straight ahead",
      "Motorway contraflow system ahead",
    ],
    category: 5,
    content: require("./../assets/qimage/AB2766.jpg"),
    correctAnswer: 2,
    explanation:
      "This sign may be at the end of a dual carriageway or a one-way street. It's there to warn you of oncoming traffic.",
    id: 96,
    mediaType: "image",
    question: "What does this sign mean?",
  },
  {
    answers: [
      "Hump bridge",
      "Traffic-calming hump",
      "Low bridge",
      "Uneven road",
    ],
    category: 5,
    content: require("./../assets/qimage/AB2767.jpg"),
    correctAnswer: 0,
    explanation:
      "You'll need to slow down. At hump bridges, your view ahead will be restricted and the road will often be narrow. If the bridge is very steep, sound your horn to warn others of your approach. Going over the bridge too fast is highly dangerous to other road users and could even cause your wheels to leave the road, with a resulting loss of control.",
    id: 97,
    mediaType: "image",
    question: "What does this sign mean?",
  },
  {
    answers: [
      "Direction to park-and-ride car park",
      "No parking for buses or coaches",
      "Direction to bus and coach park",
      "Parking area for cars and coaches",
    ],
    category: 5,
    content: require("./../assets/qimage/AB2769.jpg"),
    correctAnswer: 0,
    explanation:
      "To ease the congestion in town centres, some cities and towns provide park-and-ride schemes. These allow you to park in a designated area and ride by bus into the centre. nPark-and-ride schemes are usually cheaper and easier than car parking in the town centre.",
    id: 98,
    mediaType: "image",
    question: "What does this sign mean?",
  },
  {
    answers: [
      "Pass the lights if the road is clear",
      "Take care because there's a fault with the lights",
      "Wait for the green light",
      "Stop because the lights are changing to red",
    ],
    category: 5,
    correctAnswer: 2,
    explanation:
      "Be aware that other traffic might still be clearing the junction as you approach. A green light means you may go on, but only if the way is clear.",
    id: 99,
    mediaType: "image",
    question:
      "What should you do when you're approaching traffic lights that have red and amber showing together?",
  },
  {
    answers: [
      "Phone the signal operator",
      "Alert drivers behind you",
      "Wait",
      "Proceed with caution",
    ],
    category: 5,
    correctAnswer: 2,
    explanation:
      "You must always obey red flashing stop lights. If a train passes but the lights continue to flash, another train will be passing soon. Cross only when the lights go off and the barriers open.",
    id: 100,
    mediaType: "image",
    question:
      "You've stopped at a railway level crossing. What should you do if the red lights continue to flash after a train has gone by?",
  },
  {
    answers: [
      "Direction to an emergency pedestrian exit",
      "Beware of pedestrians: no footpath ahead",
      "No access for pedestrians",
      "Beware of pedestrians crossing ahead",
    ],
    category: 5,
    content: require("./../assets/qimage/AB2841.jpg"),
    correctAnswer: 0,
    explanation:
      "If you have to leave your vehicle and get out of a tunnel by an emergency exit, do so as quickly as you can. Follow the signs directing you to the nearest exit point. If there are several people using the exit, don’t panic but try to leave in a calm and orderly manner.",
    id: 101,
    mediaType: "image",
    question: "You're in a tunnel and you see this sign. What does it mean?",
  },
  {
    answers: [
      "With-flow bus and cycle lane",
      "Contraflow bus and cycle lane",
      "No buses and cycles allowed",
      "No waiting for buses and cycles",
    ],
    category: 5,
    content: require("./../assets/qimage/AB2886.jpg"),
    correctAnswer: 0,
    explanation:
      "Buses and cycles can travel in this lane. In this example, they'll flow in the same direction as other traffic. If it's busy, they may be passing you on the left, so watch out for them. Times on the sign will show the lane's hours of operation; if no times are shown, or there's no sign at all, this means the lane is in operation 24 hours a day. In some areas, other vehicles, such as taxis and motorcycles, are allowed to use bus lanes. The sign will show if this is the case.",
    id: 102,
    mediaType: "image",
    question: "What does this sign mean?",
  },
  {
    answers: [
      "School crossing patrol",
      "No pedestrians allowed",
      "Pedestrian zone - no vehicles",
      "Zebra crossing ahead",
    ],
    category: 5,
    content: require("./../assets/qimage/AB2889.jpg"),
    correctAnswer: 3,
    explanation:
      "Look well ahead and be ready to stop for any pedestrians crossing, or about to cross, the road. Also check the pavements for anyone who looks like they might step or run into the road.",
    id: 103,
    mediaType: "image",
    question: "What does this sign mean?",
  },
  {
    answers: [
      "This is a single-track road",
      "You can't stop on this road",
      "Only one lane is in use",
      "All traffic is going one way",
    ],
    category: 5,
    content: require("./../assets/qimage/AB2899.jpg"),
    correctAnswer: 3,
    explanation:
      "In a one-way system, traffic may pass you on either side. Always be aware of all traffic signs and understand their meaning. Look well ahead and react to them in good time.",
    id: 104,
    mediaType: "image",
    question: "What should you be aware of if you've just passed this sign?",
  },
  {
    answers: ["Red and amber", "Green alone", "Amber alone", "Green and amber"],
    category: 5,
    correctAnswer: 0,
    explanation:
      "If you know which light is going to show next, you can plan your approach accordingly. This can help prevent excessive braking or hesitation at the junction.",
    id: 105,
    mediaType: "image",
    question:
      "You're approaching traffic lights and the red light is showing. What signal will show next?",
  },
  {
    answers: [
      "Low bridge ahead",
      "Tunnel ahead",
      "Ancient monument ahead",
      "Traffic danger spot ahead",
    ],
    category: 5,
    content: require("./../assets/qimage/AB2912.jpg"),
    correctAnswer: 1,
    explanation:
      "When approaching a tunnel, switch on your dipped headlights. Be aware that your eyes might need to adjust to the sudden darkness. You may need to reduce your speed.",
    id: 106,
    mediaType: "image",
    question: "What does this sign mean?",
  },
  {
    answers: [
      "The edge of the carriageway",
      "The approach to a hazard",
      "No parking",
      "No overtaking",
    ],
    category: 5,
    content: require("./../assets/qimage/BB1235n1.jpg"),
    correctAnswer: 0,
    explanation:
      "A continuous white line is used on many roads to indicate the edge of the carriageway. This can be useful when visibility is restricted. The line is discontinued at junctions, lay-bys, and entrances to or exits from private drives.",
    id: 107,
    mediaType: "image",
    question: "What does the white line along the side of the road indicate?",
  },
  {
    answers: [
      "Entrance on the left",
      "All vehicles turn left",
      "Return to your side of the road",
      "Road bends to the left",
    ],
    category: 5,
    content: require("./../assets/qimage/BB1236n1.jpg"),
    correctAnswer: 2,
    explanation:
      "The arrow indicates the direction in which to pass hatch markings or double white lines. If you're overtaking, you must return to the left-hand side of the road.",
    id: 108,
    mediaType: "image",
    question: "What does this white arrow on the road mean?",
  },
  {
    answers: [
      "Move out and accelerate hard",
      "Wait until the vehicle starts to turn in",
      "Pull out before the vehicle reaches the junction",
      "Move out slowly",
    ],
    category: 5,
    content: require("./../assets/qimage/BB1239.jpg"),
    correctAnswer: 1,
    explanation:
      "Other road users may give misleading signals. When you’re waiting at a junction, don’t emerge until you’re sure of their intentions.",
    id: 109,
    mediaType: "image",
    question:
      "You're waiting at a T-junction. What should you do if a vehicle is coming from the right, with its left indicator flashing?",
  },
  {
    answers: [
      "Instead of sounding the horn in a built-up area between 11.30 pm and 7.00 am",
      "On a motorway or unrestricted dual carriageway, to warn of a hazard ahead",
      "On rural routes, after a sign warning of animals",
      "On the approach to toucan crossings, where cyclists are waiting to cross",
    ],
    category: 5,
    correctAnswer: 1,
    explanation:
      "When there’s queuing traffic ahead and you have to slow down or even stop, briefly showing your hazard warning lights will help alert the traffic behind to the hazard.",
    id: 110,
    mediaType: "image",
    question: "When may you use hazard warning lights while you're driving?",
  },
  {
    answers: [
      "To avoid flattening the battery",
      "To avoid misleading other road users",
      "To avoid dazzling other road users",
      "To avoid damage to the indicator relay",
    ],
    category: 5,
    correctAnswer: 1,
    explanation:
      "Leaving your indicators on could confuse other road users and may even lead to a crash. Be aware that if you haven’t turned sharply, your indicators may not self-cancel and you'll need to turn them off manually.",
    id: 111,
    mediaType: "image",
    question:
      "Why should you make sure that your indicators are cancelled after turning at a junction?",
  },
  {
    answers: [
      "As you're passing or just after the junction",
      "Just before you reach the junction",
      "Well before you reach the junction",
      "It would be better not to signal at all",
    ],
    category: 5,
    correctAnswer: 0,
    explanation:
      "You need to signal to let other drivers know your intentions. However, if you indicate too early, they may think you're turning left into the junction. Correct timing of the signal is very important to avoid misleading others.",
    id: 112,
    mediaType: "image",
    question:
      "You're driving in busy traffic. You want to pull up just after a junction on the left. When should you signal?",
  },
  {
    answers: [
      "Three years after the date it was issued",
      "10,000 miles",
      "One year after the date it was issued",
      "30,000 miles",
    ],
    category: 3,
    correctAnswer: 2,
    explanation:
      "Some garages will remind you that your vehicle is due for its annual MOT test, but not all do. To ensure continuous cover, you may take your vehicle for its MOT up to one month before its existing MOT certificate expires. The expiry date on the new certificate will be 12 months after the expiry date on the old certificate.",
    id: 1,
    mediaType: "image",
    question: "For how long is an MOT certificate normally valid?",
  },
  {
    answers: [
      "A document issued before you receive your driving licence",
      "A document issued before you receive your insurance certificate",
      "A document issued before you receive your registration document",
      "A document issued before you receive your MOT certificate",
    ],
    category: 3,
    correctAnswer: 1,
    explanation:
      "Sometimes an insurance company will issue a temporary insurance certificate called a cover note. It gives you the same insurance cover as your certificate but lasts for a limited period, usually one month.",
    id: 2,
    mediaType: "image",
    question: "What's a cover note?",
  },
  {
    answers: [
      "Retake only your theory test",
      "Retake your theory and practical tests",
      "Retake only your practical test",
      "Reapply for your full licence immediately",
    ],
    category: 3,
    correctAnswer: 1,
    explanation:
      "If you accumulate six or more penalty points within two years of gaining your first full licence, it will be revoked. The six or more points include any gained due to offences you committed before passing your test. If this happens, you may only drive as a learner until you pass both the theory and practical tests again.",
    id: 3,
    mediaType: "image",
    question:
      "You've just passed your first practical driving test. What will you have to do if you get six penalty points on your licence in the next two years?",
  },
  {
    answers: [
      "Until the vehicle is taxed, sold or scrapped",
      "Until the vehicle is insured and MOT'd",
      "Until the vehicle is repaired or modified",
      "Until the vehicle is used on the road",
    ],
    category: 3,
    correctAnswer: 0,
    explanation:
      "A SORN allows you to keep a vehicle off-road and untaxed. SORN will end when the vehicle is taxed, sold or scrapped.",
    id: 4,
    mediaType: "image",
    question: "For how long is a Statutory Off-Road Notification (SORN) valid?",
  },
  {
    answers: [
      "A notification to tell DVSA that a vehicle doesn't have a current MOT",
      "Information kept by the police about the owner of a vehicle",
      "A notification to tell DVLA that a vehicle isn't being used on the road",
      "Information held by insurance companies to check a vehicle is insured",
    ],
    category: 3,
    correctAnswer: 2,
    explanation:
      "If you want to keep a vehicle untaxed and off the public road, you must make a SORN. It's an offence not to do so. Your SORN is valid until your vehicle is taxed, sold or scrapped.",
    id: 5,
    mediaType: "image",
    question: "What's a Statutory Off-Road Notification (SORN)?",
  },
  {
    answers: ["Unlimited", "£500", "£1000", "£5000"],
    category: 3,
    correctAnswer: 0,
    explanation:
      "Driving or riding without insurance is a serious offence. As well as an unlimited fine, you may be disqualified or incur penalty points.",
    id: 6,
    mediaType: "image",
    question:
      "What's the maximum fine for driving or riding without insurance?",
  },
  {
    answers: [
      "The registered vehicle keeper",
      "The vehicle manufacturer",
      "Your insurance company",
      "The licensing authority",
    ],
    category: 3,
    correctAnswer: 0,
    explanation:
      "It's your legal responsibility to keep the details on your vehicle registration certificate (V5C) up to date. You should tell the licensing authority about any changes. These include your name, address or vehicle details. If you don't do this, you may have problems when you try to sell your vehicle.",
    id: 7,
    mediaType: "image",
    question:
      "Who's legally responsible for ensuring that a vehicle registration certificate (V5C) is updated?",
  },
  {
    answers: [
      "When making a SORN",
      "When buying or selling a vehicle",
      "When a police officer asks you for it",
      "When your vehicle is having an MOT test",
    ],
    category: 3,
    correctAnswer: 2,
    explanation:
      "You must produce a valid insurance certificate when requested by a police officer. If you can’t do this immediately, you may be asked to take it to a police station. Other documents you may be asked to produce are your driving licence and the vehicle's MOT certificate.",
    id: 8,
    mediaType: "image",
    question:
      "Your insurer will issue you with an insurance certificate. When must you produce this document for inspection?",
  },
  {
    answers: [
      "Before you can make a SORN",
      "Before you can sell the vehicle",
      "Before you can scrap the vehicle",
      "Before you can tax the vehicle",
    ],
    category: 3,
    correctAnswer: 3,
    explanation:
      "Your vehicle must have valid insurance cover before you can tax it. If required, it will also need to have a valid MOT certificate. You can tax your vehicle online, by phone or at certain post offices.",
    id: 9,
    mediaType: "image",
    question: "When must your vehicle have valid insurance cover?",
  },
  {
    answers: [
      "An appropriate driving licence",
      "Breakdown cover",
      "Proof of your identity",
      "A vehicle handbook",
    ],
    category: 3,
    correctAnswer: 0,
    explanation:
      "Using a motor vehicle on the road illegally carries a heavy fine and can lead to penalty points on your driving licence. You mustn• hold a valid driving licence for the class of vehicle you're usingn• be insured to drive the vehicle.nIf required, the vehicle must have a current MOT test certificate and be taxed for use on the road.",
    id: 10,
    mediaType: "image",
    question:
      "What do you need before you can legally use a motor vehicle on the road?",
  },
  {
    answers: [
      "Valid insurance",
      "The vehicle's chassis number",
      "The handbook",
      "A valid driving licence",
    ],
    category: 3,
    correctAnswer: 0,
    explanation:
      "You can renew your vehicle tax online, at post offices and by phone using the DVLA vehicle tax service. When applying, make sure you have all the relevant valid documents, including a valid MOT test certificate where applicable.",
    id: 11,
    mediaType: "image",
    question: "What must you have when you apply to renew your vehicle tax?",
  },
  {
    answers: ["5 days", "7 days", "14 days", "21 days"],
    category: 3,
    correctAnswer: 1,
    explanation:
      "You don’t have to carry your vehicle's documents wherever you go. If a police officer asks to see them and you don’t have them with you, you may be asked to produce them at a police station within 7 days.",
    id: 12,
    mediaType: "image",
    question:
      "A police officer asks to see your documents. You don't have them with you. How many days do you have to produce them at a police station?",
  },
  {
    answers: [
      "When you pass your driving test",
      "When you move house",
      "When your vehicle needs an MOT",
      "When you have a collision",
    ],
    category: 3,
    correctAnswer: 1,
    explanation:
      "As the registered keeper of a vehicle, it's up to you to inform DVLA of any changes in your details; for example, your name or address. You do this by completing and sending off the relevant section of the registration certificate.",
    id: 13,
    mediaType: "image",
    question: "When should you update your vehicle registration certificate?",
  },
  {
    answers: [
      "That the vehicle owner has third-party insurance cover",
      "That your own vehicle has insurance cover",
      "That the vehicle is insured for your use",
      "That the insurance documents are in the vehicle",
    ],
    category: 3,
    correctAnswer: 2,
    explanation:
      "Driving a vehicle without insurance cover is illegal, so be sure that, whoever's car you drive, you're insured – whether on their policy or on your own. If you need to take out insurance, it's worth comparing several quotes before you decide which insurance provider best meets your needs.",
    id: 14,
    mediaType: "image",
    question: "What must you check before you drive someone else's vehicle?",
  },
  {
    answers: [
      "The vehicle service record",
      "The vehicle insurance",
      "The vehicle tax",
      "The vehicle registration document",
    ],
    category: 3,
    correctAnswer: 1,
    explanation:
      "If your vehicle requires an MOT certificate, it’s illegal to drive it without one and your insurance may be invalid if you do so. The only exceptions are that you may drive to a pre-arranged MOT test appointment, or to a garage for repairs required for the test.",
    id: 15,
    mediaType: "image",
    question:
      "Your car needs to pass an MOT test. What may be invalidated if you drive the car without a current MOT certificate?",
  },
  {
    answers: [
      "They must display green L plates",
      "They must have a new photograph taken for their full licence",
      "They must be accompanied on their first motorway journey",
      "They must have valid motor insurance",
    ],
    category: 3,
    correctAnswer: 3,
    explanation:
      "It's your responsibility to make sure you're properly insured for the vehicle you're driving. This is the case regardless of whether you're a newly qualified driver or one with more experience.",
    id: 16,
    mediaType: "image",
    question: "What legal requirement must be met by a newly qualified driver?",
  },
  {
    answers: [
      "Damage to your vehicle",
      "Fire damage to your vehicle",
      "Flood damage to your vehicle",
      "Damage to other vehicles",
    ],
    category: 3,
    correctAnswer: 3,
    explanation:
      "Third-party insurance doesn’t cover damage to your own vehicle or injury to yourself. If you have a crash and your vehicle is damaged, you might have to carry out the repairs at your own expense.",
    id: 17,
    mediaType: "image",
    question: "What's covered by third-party insurance?",
  },
  {
    answers: [
      "The driver of the vehicle",
      "The registered keeper of the vehicle",
      "The car dealer",
      "The Driver and Vehicle Licensing Agency (DVLA)",
    ],
    category: 3,
    correctAnswer: 1,
    explanation:
      "The registered keeper of the vehicle is responsible for paying the vehicle tax or making a Statutory Off-Road Notification (SORN) if the vehicle is to be kept untaxed and off the road.",
    id: 18,
    mediaType: "image",
    question: "Who's responsible for paying the vehicle tax?",
  },
  {
    answers: [
      "The registered keeper",
      "The type of insurance cover",
      "The service history details",
      "The date of the MOT",
    ],
    category: 3,
    correctAnswer: 0,
    explanation:
      "Every vehicle used on the road has a registration document. This shows the vehicle's details, including date of first registration, registration number, registered keeper, previous keeper, make of vehicle, engine size, chassis number, year of manufacture and colour.",
    id: 19,
    mediaType: "image",
    question: "What information is found on a vehicle registration document?",
  },
  {
    answers: [
      "When you get a parking ticket",
      "When you change your vehicle",
      "When you use your vehicle for work",
      "When your vehicle's insurance is due",
    ],
    category: 3,
    correctAnswer: 1,
    explanation:
      "DVLA needs to keep its records up to date. It sends out a reminder when a vehicle's tax is due for renewal. To do this, it needs to know the name and address of the registered keeper. Every vehicle in the country is registered, so it’s possible to trace its history.",
    id: 20,
    mediaType: "image",
    question:
      "When must you contact the Driver and Vehicle Licensing Agency (DVLA)?",
  },
  {
    answers: [
      "When your health affects your driving",
      "When you have to work abroad",
      "When you lend your vehicle to someone",
      "When your vehicle needs an MOT certificate",
    ],
    category: 3,
    correctAnswer: 0,
    explanation:
      "DVLA holds the records of all vehicles, drivers and riders in Great Britain and Northern Ireland. They need to know if you have a medical condition that might affect your ability to drive safely. You must tell them if your health deteriorates and you become unfit to drive.",
    id: 21,
    mediaType: "image",
    question:
      "What circumstances require you to notify the Driver and Vehicle Licensing Agency (DVLA)?",
  },
  {
    answers: [
      "When you're under 25 years old",
      "When you don't wear glasses",
      "When you pass the driving test first time",
      "When you complete the Pass Plus scheme",
    ],
    category: 3,
    correctAnswer: 3,
    explanation:
      "The cost of insurance varies with your age and how long you've been driving. Usually, the younger you are, the more expensive it is, especially if you're under 25.nPass Plus provides additional training to newly qualified drivers. The scheme is recognised by many insurance companies, and taking this extra training could give you reduced insurance premiums, as well as improving your skills and experience. ",
    id: 22,
    mediaType: "image",
    question: "When could the cost of your insurance be reduced?",
  },
  {
    answers: [
      "To have a car with dual controls",
      "To be at least 21 years old",
      "To be an approved driving instructor",
      "To hold an advanced driving certificate",
    ],
    category: 3,
    correctAnswer: 1,
    explanation:
      "Learner drivers benefit by combining professional driving lessons with private practice. However, you need to be at least 21 years old and have held your driving licence for at least 3 years before you can supervise a learner driver.",
    id: 23,
    mediaType: "image",
    question:
      "In order to supervise a learner driver you need to have held a full driving licence for the same category of vehicle, for at least three years. What other requirement must you meet?",
  },
  {
    answers: [
      "Up to seven days after the old certificate has run out",
      "When driving to an MOT centre to arrange an appointment",
      "When driving the car with the owner’s permission",
      "When driving to an appointment at an MOT centre",
    ],
    category: 3,
    correctAnswer: 3,
    explanation:
      "When a car is three years old (four years old in Northern Ireland), it must pass an MOT test and have a valid MOT certificate before it can be used on the road. Exceptionally, you may n•  drive to a pre-arranged test appointment or to a garage for repairs required for the testn•  drive vehicles that are more than 40 years old without an MOT test, but they must be in a roadworthy condition before being used on the road. See GOV.UK for more details.",
    id: 24,
    mediaType: "image",
    question:
      "Your car requires an MOT certificate. When is it legal to drive it without an MOT certificate?",
  },
  {
    answers: [
      "When it's one year old",
      "When it's three years old",
      "When it's five years old",
      "When it's seven years old",
    ],
    category: 3,
    correctAnswer: 1,
    explanation:
      "The vehicle you drive must be roadworthy and in good condition. If it's over three years old, it must pass an MOT test to remain in use on the road (unless it's exempt from the MOT test – see GOV.UK).",
    id: 25,
    mediaType: "image",
    question: "When will a new car need its first MOT test?",
  },
  {
    answers: [
      "Damage to your vehicle",
      "Damage to other vehicles",
      "Injury to yourself",
      "All damage and injury",
    ],
    category: 3,
    correctAnswer: 1,
    explanation:
      "Third-party insurance cover is usually cheaper than comprehensive cover. However, it doesn’t cover any damage caused to your own vehicle or property. It only covers damage and injury you cause to others.",
    id: 26,
    mediaType: "image",
    question: "What does third-party insurance cover?",
  },
  {
    answers: [
      "Third party, fire and theft",
      "Comprehensive",
      "Third party only",
      "Personal injury cover",
    ],
    category: 3,
    correctAnswer: 2,
    explanation:
      "The minimum insurance required by law is third-party cover. This covers your liability to others involved in a collision but not damage to your vehicle. Basic third-party insurance also won't cover theft or fire damage. Ask your insurance company for advice on the best cover for you and make sure that you read the policy carefully.",
    id: 27,
    mediaType: "image",
    question:
      "What's the legal minimum insurance cover you must have to drive on public roads?",
  },
  {
    answers: [
      "The insurance company will pay the first £500 of any claim",
      "You'll be paid £500 if you don't claim within one year",
      "Your vehicle is insured for a value of £500 if it's stolen",
      "You'll have to pay the first £500 of the cost of any claim",
    ],
    category: 3,
    correctAnswer: 3,
    explanation:
      "Having an excess on your policy will help to keep the premium down. However, if you make a claim, you'll have to pay the excess yourself – in this case, £500.",
    id: 28,
    mediaType: "image",
    question:
      "What does it mean if your insurance policy has an excess of £500?",
  },
  {
    answers: [
      "When stopped and temporarily obstructing traffic",
      "When travelling during darkness without headlights",
      "When parked on double yellow lines to visit a shop",
      "When travelling slowly because you're lost",
    ],
    category: 6,
    correctAnswer: 0,
    explanation:
      "You mustn't use hazard warning lights while moving, except to warn traffic behind when you slow suddenly on a motorway or unrestricted dual carriageway.nNever use hazard warning lights to excuse dangerous or illegal parking.",
    id: 1,
    mediaType: "image",
    question: "When are you allowed to use hazard warning lights?",
  },
  {
    answers: [
      "Pull up very close to the vehicle in front to save space",
      "Ignore any message signs, as they're never up to date",
      "Keep a safe distance from the vehicle in front",
      "Make a U-turn and find another route",
    ],
    category: 6,
    correctAnswer: 2,
    explanation:
      "It’s important to keep a safe distance from the vehicle in front at all times. This still applies in congested tunnels, even if you're moving very slowly or have stopped. If the vehicle in front breaks down, you may need room to manoeuvre past it.",
    id: 2,
    mediaType: "image",
    question:
      "What should you do if you have to stop while you're going through a congested tunnel?",
  },
  {
    answers: [
      "Walk them around and keep them talking",
      "Dab the wound",
      "Get them a drink",
      "Apply pressure over the wound",
    ],
    category: 6,
    correctAnswer: 3,
    explanation:
      "If possible, lay the casualty down. Protect yourself from exposure to blood and, when you're sure there's nothing in the wound, apply firm pressure using clean material.",
    id: 3,
    mediaType: "image",
    question:
      "You arrive at the scene of a crash where someone is bleeding heavily from a wound in their arm. Nothing is embedded in the wound. What could you do to help?",
  },
  {
    answers: [
      "Take photographs of the scene",
      "Check that they're breathing normally",
      "Move them to somewhere more comfortable",
      "Splash their face with cool water",
    ],
    category: 6,
    correctAnswer: 1,
    explanation:
      "If a casualty is unconscious, you need to check that they're breathing normally. Look for chest movements, look and listen for breathing, and feel for breath on your cheek.",
    id: 4,
    mediaType: "image",
    question:
      "You're at an incident. What could you do to help an unconscious casualty?",
  },
  {
    answers: [
      "10 times per minute",
      "120 times per minute",
      "60 times per minute",
      "240 times per minute",
    ],
    category: 6,
    correctAnswer: 1,
    explanation:
      "If a casualty isn't breathing normally, cardiopulmonary resuscitation (CPR) may be needed to maintain circulation. Place two hands on the centre of the chest and press down hard and fast –  around 5–6 centimetres and about twice a second.",
    id: 5,
    mediaType: "image",
    question:
      "A casualty isn't breathing normally and needs CPR. At what rate should you press down and release on the centre of their chest?",
  },
  {
    answers: [
      "Flushed complexion",
      "Warm dry skin",
      "Slow pulse",
      "Rapid shallow breathing",
    ],
    category: 6,
    correctAnswer: 3,
    explanation:
      "The effects of shock may not be immediately obvious. Warning signs to look for includen•  a rapid pulsen•  sweatingn•  pale grey skinn•  rapid shallow breathing.",
    id: 6,
    mediaType: "image",
    question:
      "Following a collision, a person has been injured. What would be a warning sign for shock?",
  },
  {
    answers: [
      "Press firmly between their shoulders",
      "Place their arms by their side",
      "Give them a hot sweet drink",
      "Check their airway remains open",
    ],
    category: 6,
    correctAnswer: 3,
    explanation:
      "After a casualty has been placed in the recovery position, make sure their airway remains open and monitor their condition until medical help arrives. Where possible, don't move a casualty unless there’s further danger.",
    id: 7,
    mediaType: "image",
    question:
      "An injured person has been placed in the recovery position. They're unconscious but breathing normally. What else should be done?",
  },
  {
    answers: [
      "Remove their safety helmet",
      "Seek medical assistance",
      "Move the person off the road",
      "Remove their leather jacket",
    ],
    category: 6,
    correctAnswer: 1,
    explanation:
      "If someone has been injured, the sooner proper medical attention is given the better. Ask someone to phone for help or do it yourself. An injured person should only be moved if they’re in further danger. An injured motorcyclist’s helmet shouldn't be removed unless it's essential.",
    id: 8,
    mediaType: "image",
    question:
      "An injured motorcyclist is lying unconscious in the road. The traffic has stopped and there's no further danger. What could you do to help?",
  },
  {
    answers: [
      "Go to the next emergency telephone and report the hazard",
      "Catch up with the lorry and try to get the driver's attention",
      "Stop close to the box until the police arrive",
      "Pull over to the hard shoulder, then remove the box",
    ],
    category: 6,
    correctAnswer: 0,
    explanation:
      "Lorry drivers can be unaware of objects falling from their vehicles. If you see something fall onto a motorway, look to see if the driver pulls over. If they don't stop, don't attempt to retrieve the object yourself. Pull onto the hard shoulder near an emergency telephone and report the hazard.",
    id: 9,
    mediaType: "image",
    question:
      "What should you do if you see a large box fall from a lorry onto the motorway?",
  },
  {
    answers: [
      "Hazard warning lines",
      "Other drivers flashing their lights",
      "Variable message signs",
      "Areas with hatch markings",
    ],
    category: 6,
    correctAnswer: 2,
    explanation:
      "Follow the instructions given by the signs or by tunnel officials. In congested tunnels, a minor incident can soon turn into a major one, with serious or even fatal results.",
    id: 10,
    mediaType: "image",
    question:
      "You're going through a long tunnel. What will warn you of congestion or an incident ahead?",
  },
  {
    answers: [
      "1 to 2 centimetres",
      "5 to 6 centimetres",
      "10 to 15 centimetres",
      "15 to 20 centimetres",
    ],
    category: 6,
    correctAnswer: 1,
    explanation:
      "An adult casualty isn't breathing normally. To maintain circulation, place two hands on the centre of the chest. Then press down hard and fast – around 5–6 centimetres and about twice a second.",
    id: 11,
    mediaType: "image",
    question:
      "An adult casualty isn't breathing. To maintain circulation, CPR should be given. What's the correct depth to press down on their chest?",
  },
  {
    answers: [
      "Make sure that an ambulance has been called",
      "Stop other cars and ask the drivers for help",
      "Try and get people who are injured to drink something",
      "Move the people who are injured clear of their vehicles",
    ],
    category: 6,
    correctAnswer: 0,
    explanation:
      "If you’re the first to arrive at a crash scene, the first concerns are the risk of further collision and fire. Ensuring that vehicle engines are switched off will reduce the risk of fire. Use hazard warning lights so that other traffic knows there’s a need for caution. Make sure the emergency services are contacted; don’t assume it's already been done.",
    id: 12,
    mediaType: "image",
    question:
      "You're the first person to arrive at an incident where people are badly injured. You’ve switched on your hazard warning lights and checked all engines are stopped. What else should you do?",
  },
  {
    answers: [
      "Only when it's essential",
      "Always straight away",
      "Only when the motorcyclist asks",
      "Always, unless they're in shock",
    ],
    category: 6,
    correctAnswer: 0,
    explanation:
      "Don't remove a motorcyclist's helmet unless it's essential. Remember they may be suffering from shock. Don't give them anything to eat or drink, but do reassure them confidently.",
    id: 13,
    mediaType: "image",
    question:
      "You arrive at the scene of a motorcycle crash. The rider is injured. When should their helmet be removed?",
  },
  {
    answers: [
      "Check whether they're breathing normally",
      "Check whether they're bleeding",
      "Check whether they have any broken bones",
      "Check whether they have any bruising",
    ],
    category: 6,
    correctAnswer: 0,
    explanation:
      "At the scene of an incident, always be aware of danger from further collisions or fire. The first priority when dealing with an unconscious person is to ensure they can breathe. This may involve clearing their airway if you can see an obstruction or if they’re having difficulty breathing.",
    id: 14,
    mediaType: "image",
    question:
      "You arrive at an incident. There's no danger from fire or further collisions and the emergency services have been called. What's your first priority when attending to an unconscious motorcyclist?",
  },
  {
    answers: [
      "Whether their vehicle is insured",
      "Whether they have any allergies",
      "Whether they're comfortable",
      "Whether their airway is open",
    ],
    category: 6,
    correctAnswer: 3,
    explanation:
      "Remember this procedure by saying DR ABC. This stands for Danger, Response, Airway, Breathing, Circulation. Give whatever first aid you can and stay with the injured person until a medical professional takes over.",
    id: 15,
    mediaType: "image",
    question:
      "At an incident, someone is unconscious and you want to help. What would be the first thing to check?",
  },
  {
    answers: [
      "Keep them warm and comfortable",
      "Give them something to eat",
      "Keep them on the move by walking them around",
      "Give them a warm drink",
    ],
    category: 6,
    correctAnswer: 0,
    explanation:
      "There are a number of things you can do to help, even without expert training. Be aware of further danger from other traffic and fire; make sure the area is safe. People may be in shock. Don’t give them anything to eat or drink. Keep them warm and comfortable and reassure them. Don’t move injured people unless there’s a risk of further danger.",
    id: 16,
    mediaType: "image",
    question: "What could you do to help injured people at an incident?",
  },
  {
    answers: [
      "Give them a drink",
      "Reassure them confidently",
      "Ask who caused the incident",
      "Offer them a cigarette",
    ],
    category: 6,
    correctAnswer: 1,
    explanation:
      "A casualty suffering from shock may have injuries that aren't immediately obvious. Call the emergency services, then stay with the person in shock, offering reassurance until the experts arrive.",
    id: 17,
    mediaType: "image",
    question:
      "There's been a collision. How can you help a driver who's suffering from shock?",
  },
  {
    answers: [
      "Move the rider out of the road",
      "Warn other traffic",
      "Clear the road of debris",
      "Give the rider reassurance",
    ],
    category: 6,
    correctAnswer: 1,
    explanation:
      "The motorcyclist is in an extremely vulnerable position, exposed to further danger from traffic. Approaching vehicles need advance warning in order to slow down and safely take avoiding action or stop. Don't put yourself or anyone else at risk. Use the hazard warning lights on your vehicle to alert other road users to the danger.",
    id: 18,
    mediaType: "image",
    question:
      "You arrive at the scene of a motorcycle crash. No other vehicle is involved. The rider is unconscious and lying in the middle of the road. What's the first thing you should do at the scene?",
  },
  {
    answers: [
      "Find their parents and explain what's happening",
      "Open their airway and begin CPR",
      "Put them in the recovery position and slap their back",
      "Talk to them confidently until an ambulance arrives",
    ],
    category: 6,
    correctAnswer: 1,
    explanation:
      "If a young child has stopped breathing, first check that their airway is open and then begin CPR. With a young child, you may only need to use one hand and you shouldn’t press down as far as you would with an adult. Continue the procedure until the child is breathing again or until a medical professional takes over.",
    id: 19,
    mediaType: "image",
    question:
      "At an incident, how could you help a small child who isn't breathing?",
  },
  {
    answers: [
      "Put their arms across their chest",
      "Shake them firmly",
      "Roll them onto their side",
      "Open their airway",
    ],
    category: 6,
    correctAnswer: 3,
    explanation:
      "It’s important to ensure that the airway is open before you start CPR. To open the casualty’s airway, place your fingers under their chin and lift it forward.",
    id: 20,
    mediaType: "image",
    question:
      "At an incident, a casualty isn't breathing. What should you do while helping them to start breathing again?",
  },
  {
    answers: [
      "Apply lotions to the injury",
      "Burst any blisters",
      "Remove anything sticking to the burns",
      "Douse the burns with clean, cool water",
    ],
    category: 6,
    correctAnswer: 3,
    explanation:
      "Your priority is to cool the burns with clean, cool water. Its coolness will help take the heat out of the burns and relieve the pain. Keep the wound doused for at least 20 minutes. If blisters appear, don’t attempt to burst them, as this could lead to infection.",
    id: 21,
    mediaType: "image",
    question:
      "At an incident, someone is suffering from severe burns. How could you help them?",
  },
  {
    answers: [
      "Dab the wound to stop the bleeding",
      "Keep the casualty's legs flat on the ground",
      "Give them a warm drink",
      "Apply firm pressure over the wound",
    ],
    category: 6,
    correctAnswer: 3,
    explanation:
      "You should protect yourself from exposure to blood, and then apply firm pressure over the wound to stem the flow of blood. As soon as practical, fasten a pad to the wound with a bandage or length of cloth. Use the cleanest material available.",
    id: 22,
    mediaType: "image",
    question:
      "You arrive at an incident. A pedestrian is bleeding heavily from a leg wound. The leg isn't broken and there's nothing in the wound. How could you help?",
  },
  {
    answers: [
      "When an ambulance is on its way",
      "When bystanders tell you to move them",
      "When there's a risk of further danger",
      "When bystanders offer to help you",
    ],
    category: 6,
    correctAnswer: 2,
    explanation:
      "Don't move a casualty unless there's further danger; for example, from other traffic or fire. They may have unseen or internal injuries. Moving them unnecessarily could cause further injury. Don't remove a motorcyclist’s helmet unless it’s essential.",
    id: 23,
    mediaType: "image",
    question:
      "At an incident, a casualty is unconscious but breathing. When should you move them?",
  },
  {
    answers: [
      "Move them away from the vehicles",
      "Ask them how it happened",
      "Give them something to eat",
      "Keep them where they are",
    ],
    category: 6,
    correctAnswer: 3,
    explanation:
      "When the area is safe and there's no danger from other traffic or fire, it's better not to move casualties. Moving them may cause further injury.",
    id: 24,
    mediaType: "image",
    question:
      "At an incident, it's important to look after any casualties. What should you do with them when the area is safe?",
  },
  {
    answers: [
      "Your vehicle registration document",
      "Your driving licence",
      "Your theory test certificate",
      "Your vehicle service record",
    ],
    category: 6,
    correctAnswer: 1,
    explanation:
      "You must stop if you've been involved in a collision that results in injury or damage. The police may ask to see your driving licence and insurance details at the time or later at a police station.",
    id: 25,
    mediaType: "image",
    question:
      "Which document may the police ask you to produce after you've been involved in a collision?",
  },
  {
    answers: [
      "Only as a last resort",
      "As soon as possible",
      "After you've woken them up",
      "After checking for broken bones",
    ],
    category: 6,
    correctAnswer: 1,
    explanation:
      "It's important to make sure that the emergency services arrive as soon as possible. When a person is unconscious, they could have serious injuries that aren't immediately obvious. ",
    id: 26,
    mediaType: "image",
    question:
      "After a collision, someone is unconscious in their vehicle. When should you call the emergency services?",
  },
  {
    answers: [
      "Treat the person for shock",
      "Warn other traffic",
      "Place them in the recovery position",
      "Make sure the injured person is kept warm",
    ],
    category: 6,
    correctAnswer: 1,
    explanation:
      "The most immediate danger is further collisions and fire. You could warn other traffic by switching on hazard warning lights, displaying an advance warning triangle or sign (but not on a motorway), or by any other means that doesn’t put you or others at risk.",
    id: 27,
    mediaType: "image",
    question:
      "A collision has just happened. An injured person is lying in a busy road. What’s the first thing you should do?",
  },
  {
    answers: [
      "Keep their head tilted forwards as far as possible",
      "Follow the DR ABC code",
      "Raise their legs to help with circulation",
      "Try to give them something to drink",
    ],
    category: 6,
    correctAnswer: 1,
    explanation:
      "The DR ABC code has been devised by medical experts to give the best outcome until the emergency services arrive and take care of casualties.",
    id: 28,
    mediaType: "image",
    question:
      "At an incident, how could you help a casualty who has stopped breathing?",
  },
  {
    answers: [
      "Reassure them confidently",
      "Offer them a cigarette",
      "Give them a warm drink",
      "Offer them some food",
    ],
    category: 6,
    correctAnswer: 0,
    explanation:
      "If someone is suffering from shock, try to keep them warm and as comfortable as you can. Don’t give them anything to eat or drink but reassure them confidently and try not to leave them alone.",
    id: 29,
    mediaType: "image",
    question:
      "You’re at the scene of an incident. How could you help someone who's suffering from shock?",
  },
  {
    answers: [
      "They might not want you to remove it",
      "Removing it could make any injuries worse",
      "Removing it could let them get cold",
      "You could scratch the helmet as you remove it",
    ],
    category: 6,
    correctAnswer: 1,
    explanation:
      "When someone is injured, any movement that isn't absolutely necessary should be avoided, since it could make the injuries worse. Unless it's essential to remove a motorcyclist's helmet, it’s generally safer to leave it in place. ",
    id: 30,
    mediaType: "image",
    question:
      "There's been a collision. A motorcyclist is lying injured and unconscious. Why should you only remove their helmet if it’s essential?",
  },
  {
    answers: [
      "When a vehicle is following too closely",
      "When you slow down quickly because of danger ahead",
      "When you're being towed by another vehicle",
      "When you're using the hard shoulder as a running lane",
    ],
    category: 6,
    correctAnswer: 1,
    explanation:
      "Briefly using your hazard warning lights will warn the traffic behind you that there's a hazard ahead. Turn them off again when following drivers have seen and responded to your signal.",
    id: 31,
    mediaType: "image",
    question: "You're on a motorway. When can you use hazard warning lights?",
  },
  {
    answers: [
      "5 metres (16 feet)",
      "25 metres (82 feet)",
      "45 metres (147 feet)",
      "100 metres (328 feet)",
    ],
    category: 6,
    content: require("./../assets/qimage/BB1252n1.jpg"),
    correctAnswer: 2,
    explanation:
      "Advance warning triangles fold flat and don’t take up much room. Use one to warn other road users if your vehicle has broken down or if there has been an incident. Place it at least 45 metres (147 feet) behind your vehicle (or the incident), on the same side of the road or verge. Place it further back if the scene is hidden by, for example, a bend, hill or dip in the road. Don’t use warning triangles on motorways.",
    id: 32,
    mediaType: "image",
    question:
      "You've broken down on a two-way road. You have a warning triangle. At least how far from your vehicle should you place the warning triangle?",
  },
  {
    answers: [
      "Tell drivers behind what's happened",
      "Leave your vehicle and get everyone clear",
      "Walk down the track and signal the next train",
      "Stay in your car until you're told to move",
    ],
    category: 6,
    correctAnswer: 1,
    explanation:
      "If your vehicle breaks down on a level crossing, your first priority is to get everyone out of the vehicle and clear of the crossing. Then use the railway telephone, if there is one, to tell the signal operator. If you have time before the train arrives, move the vehicle clear of the crossing, but only do this if the alarm signals aren't activated.",
    id: 33,
    mediaType: "image",
    question:
      "Your car breaks down on a level crossing. What's the first thing you should do?",
  },
  {
    answers: [
      "Pull on the parking brake",
      "Brake as quickly as possible",
      "Pull up slowly at the side of the road",
      "Continue on at a normal speed",
    ],
    category: 6,
    correctAnswer: 2,
    explanation:
      "A tyre bursting can lead to a loss of control, especially if you’re travelling at high speed. Using the correct procedure should help you to stop the vehicle safely.",
    id: 34,
    mediaType: "image",
    question: "What should you do if a tyre bursts while you’re driving?",
  },
  {
    answers: [
      "Drive slowly to the next service area to get assistance",
      "Pull up on the hard shoulder or in an emergency refuge area. Change the wheel as quickly as possible",
      "Pull up on the hard shoulder or in an emergency refuge area and call for assistance",
      "Switch on your hazard warning lights. Stop in your lane",
    ],
    category: 6,
    correctAnswer: 2,
    explanation:
      "Pull up on the hard shoulder or in an emergency refuge area and call for assistance. nDon't attempt to repair your vehicle while it's on the hard shoulder, because of the risk posed by traffic passing at high speeds.",
    id: 35,
    mediaType: "image",
    question:
      "What should you do if your vehicle has a puncture on a motorway?",
  },
  {
    answers: [
      "Get out of the car and clear of the crossing",
      "Run down the track to warn the signal operator",
      "Carry on trying to restart the engine",
      "Push the vehicle clear of the crossing",
    ],
    category: 6,
    correctAnswer: 0,
    explanation:
      "If the warning bells ring, leave the vehicle and get any passengers well clear of the crossing immediately.",
    id: 36,
    mediaType: "image",
    question:
      "Your vehicle has stalled in the middle of a level crossing. What should you do if the warning bells start to ring while you're trying to restart the engine?",
  },
  {
    answers: [
      "Switch off your radio",
      "Take off your sunglasses",
      "Close your sunroof",
      "Switch on your windscreen wipers",
    ],
    category: 6,
    correctAnswer: 1,
    explanation:
      "If you're wearing sunglasses, you should remove them before driving into a tunnel. If you don’t, your vision will be restricted, even in tunnels that appear to be well lit.",
    id: 37,
    mediaType: "image",
    question: "What should you do before driving into a tunnel?",
  },
  {
    answers: [
      "Sidelights",
      "Front spotlights",
      "Dipped headlights",
      "Rear fog lights",
    ],
    category: 6,
    correctAnswer: 2,
    explanation:
      "Before entering a tunnel, you should switch on your dipped headlights, as this will allow you to see and be seen. In many tunnels, it's a legal requirement. nDon’t wear sunglasses while you're driving in a tunnel.",
    id: 38,
    mediaType: "image",
    question: "Which lights should you use when you're driving in a tunnel?",
  },
  {
    answers: [
      "Keep water levels above maximum",
      "Check out any strong smell of fuel",
      "Avoid driving with a full tank of fuel",
      "Use fuel additives",
    ],
    category: 6,
    correctAnswer: 1,
    explanation:
      "The fuel in your vehicle can be a dangerous fire hazard. If you smell fuel, check out where it's coming from. Nevern• use a naked flame near the vehicle if you can smell fueln• smoke when refuelling your vehicle.",
    id: 39,
    mediaType: "image",
    question:
      "What should you do to reduce the risk of your vehicle catching fire?",
  },
  {
    answers: [
      "Stop at the next emergency telephone and report the incident",
      "Stop on the motorway and switch on hazard warning lights while you pick it up",
      "Walk back up the motorway to pick it up",
      "Pull up on the hard shoulder and wave traffic down",
    ],
    category: 6,
    correctAnswer: 0,
    explanation:
      "If any object falls onto the motorway carriageway from your vehicle, pull onto the hard shoulder near an emergency telephone and call for assistance. Don’t stop on the carriageway or attempt to retrieve anything.",
    id: 40,
    mediaType: "image",
    question:
      "You're driving on the motorway. What should you do if luggage falls from your vehicle?",
  },
  {
    answers: [
      "Continue if the engine sounds all right",
      "Hope that it's just a temporary electrical fault",
      "Deal with the problem when there's more time",
      "Check out the problem quickly and safely",
    ],
    category: 6,
    correctAnswer: 3,
    explanation:
      "Make sure you know what the different warning lights mean. An illuminated warning light could mean that your car is unsafe to drive.  If you aren’t sure about the problem, get a qualified mechanic to check it.",
    id: 41,
    mediaType: "image",
    question:
      "What should you do if an instrument panel warning light comes on while you're driving?",
  },
  {
    answers: [
      "Stay in your vehicle and wait for the police",
      "Stand in the lane behind your vehicle to warn others",
      "Stand in front of your vehicle to warn oncoming drivers",
      "Switch on hazard warning lights, then go and call for help",
    ],
    category: 6,
    correctAnswer: 3,
    explanation:
      "A broken-down vehicle in a tunnel can cause serious congestion and danger to other road users. If your vehicle breaks down, get help without delay. Switch on your hazard warning lights, then go to an emergency telephone to call for help. ",
    id: 42,
    mediaType: "image",
    question: "What should you do if your vehicle breaks down in a tunnel?",
  },
  {
    answers: [
      "Leave it where it is, with the engine running",
      "Pull up, then walk to an emergency telephone",
      "Park it away from the carriageway",
      "Drive it out of the tunnel if it's safe to do so",
    ],
    category: 6,
    correctAnswer: 3,
    explanation:
      "If it’s possible, and you can do so without causing further danger, it may be safer to drive a vehicle that's on fire out of a tunnel. The greatest danger in a tunnel fire is smoke and suffocation.",
    id: 43,
    mediaType: "image",
    question:
      "What should you do if your vehicle catches fire while you're driving through a tunnel?",
  },
  {
    answers: [
      "Get everyone out of the vehicle and clear of the crossing",
      "Telephone your vehicle recovery service to move it",
      "Walk along the track to give warning to any approaching trains",
      "Try to push the vehicle clear of the crossing as soon as possible",
    ],
    category: 6,
    correctAnswer: 0,
    explanation:
      "First, get yourself and anyone else well away from the crossing. If there’s a railway telephone, use that to get instructions from the signal operator. Then, if there’s time, move the vehicle clear of the crossing.",
    id: 44,
    mediaType: "image",
    question:
      "What should you do first if your vehicle has broken down on an automatic railway level crossing?",
  },
  {
    answers: [
      "Stop only if someone waves at you",
      "Call the emergency services",
      "Stop at the scene of the incident",
      "Call your insurance company",
    ],
    category: 6,
    correctAnswer: 2,
    explanation:
      "If you're in a collision that causes damage or injury to any other person, vehicle, animal or property, by law you must stop. Give your name, the vehicle owner’s name and address, and the vehicle’s registration number to anyone who has reasonable grounds for requesting them.",
    id: 45,
    mediaType: "image",
    question:
      "What's the first thing you must do if you have a collision while you're driving your car?",
  },
  {
    answers: [
      "Your occupation and reason for your journey",
      "Your name, address and vehicle registration number",
      "Your national insurance number",
      "Your internet service provider",
    ],
    category: 6,
    correctAnswer: 1,
    explanation:
      "Try to keep calm and don’t rush. Make sure that you've shared all the relevant details with the other driver before you leave the scene. If possible, take pictures and note the positions of all the vehicles involved.",
    id: 46,
    mediaType: "image",
    question:
      "What information should you share if you’re involved in a collision that causes damage to another vehicle?",
  },
  {
    answers: [
      "Report the incident to the police within 24 hours",
      "Go back to tell the house owner the next day",
      "Report the incident to your insurance company when you get home",
      "Find someone in the area to tell them about it immediately",
    ],
    category: 6,
    correctAnswer: 0,
    explanation:
      "If the property owner isn't available at the time, you must inform the police about the incident. This should be done as soon as possible, and in any case within 24 hours.",
    id: 47,
    mediaType: "image",
    question:
      "You lose control of your car and damage a garden wall. What must you do if the property owner isn't available?",
  },
  {
    answers: [
      "You must not exceed 50 mph",
      "You must not overtake",
      "You must have a stabiliser fitted",
      "You must not use the right-hand lane",
    ],
    category: 14,
    correctAnswer: 3,
    explanation:
      "The motorway regulations for towing a trailer state that you must notn•  use the right-hand lane of a three-lane motorway unless directed to do so (for example, at roadworks or due to a lane closure)n•  exceed 60 mph.",
    id: 1,
    mediaType: "image",
    question:
      "What restrictions apply if you're towing a trailer on a three-lane motorway?",
  },
  {
    answers: [
      "Ease off the accelerator to reduce your speed",
      "Let go of the steering wheel and let it correct itself",
      "Brake hard and hold the pedal down",
      "Accelerate until it stabilises",
    ],
    category: 14,
    correctAnswer: 0,
    explanation:
      "Strong winds or buffeting from large vehicles can cause a trailer or caravan to swing from side to side ('snake'). If this happens, ease off the accelerator. Don’t brake harshly, steer sharply or increase your speed.",
    id: 2,
    mediaType: "image",
    question:
      "What should you do if you're towing a trailer and it starts to swing from side to side?",
  },
  {
    answers: [
      "When the roads are slippery",
      "When the vehicle is fitted with anti-lock brakes",
      "When the tyre tread is worn below 2 mm",
      "When carrying a heavy load",
    ],
    category: 14,
    correctAnswer: 3,
    explanation:
      "Check the vehicle handbook. This should give you guidance on the correct tyre pressures for your vehicle and when you may need to adjust them. If you’re carrying a heavy load, you may need to adjust the headlights as well. Most cars have a switch on the dashboard to do this.",
    id: 3,
    mediaType: "image",
    question:
      "When would you increase the pressure in your tyres so that it's above the normal value?",
  },
  {
    answers: [
      "It will improve the road holding",
      "It will reduce the stopping distance",
      "It will make the steering lighter",
      "It will reduce stability",
    ],
    category: 14,
    correctAnswer: 3,
    explanation:
      "A heavy load on your roof rack will reduce the stability of the vehicle because it moves the centre of gravity away from that designed by the manufacturer. Be aware of this when you drive round bends and corners. If you change direction at speed, your vehicle and/or load could become unstable and you could lose control.",
    id: 4,
    mediaType: "image",
    question:
      "How will a heavy load on your roof rack affect your vehicle's handling?",
  },
  {
    answers: [
      "The vehicle's gearbox",
      "The vehicle's ventilation",
      "The vehicle's handling",
      "The vehicle's battery",
    ],
    category: 14,
    correctAnswer: 2,
    explanation:
      "Any load will have an effect on the handling of your vehicle, and this becomes worse as you increase the load. You need to be aware of this when carrying passengers or heavy loads, fitting a roof rack or towing a trailer.",
    id: 5,
    mediaType: "image",
    question:
      "What would be affected if you carry a very heavy load on your vehicle?",
  },
  {
    answers: [
      "The driver of the vehicle",
      "The owner of the items being carried",
      "The person who loaded the vehicle",
      "The licensing authority",
    ],
    category: 14,
    correctAnswer: 0,
    explanation:
      "Carrying heavy loads will affect control and the vehicle's handling characteristics. If the vehicle you're driving is overloaded, you'll be held responsible.",
    id: 6,
    mediaType: "image",
    question:
      "Who's responsible for making sure that a vehicle isn't overloaded?",
  },
  {
    answers: [
      "A jockey wheel fitted to the tow bar",
      "Power steering fitted to the towing vehicle",
      "Anti-lock brakes fitted to the towing vehicle",
      "A stabiliser fitted to the tow bar",
    ],
    category: 14,
    correctAnswer: 3,
    explanation:
      "Towing a caravan or trailer affects the way the towing vehicle handles. A stabiliser device isn't designed to overcome instability caused by incorrect loading but it can give added security in side winds and from buffeting caused by large vehicles.",
    id: 7,
    mediaType: "image",
    question:
      "You're planning to tow a caravan. What will help the handling of the combination?",
  },
  {
    answers: [
      "Yes, if they're over 14",
      "No, not at any time",
      "Only if all the seats in the towing vehicle are full",
      "Only if a stabiliser is fitted",
    ],
    category: 14,
    correctAnswer: 1,
    explanation:
      "Riding in a towed caravan is highly dangerous. The safety of the entire unit is dependent on the stability of the trailer. Moving passengers would make the caravan unstable and could cause loss of control.",
    id: 8,
    mediaType: "image",
    question: "Are passengers allowed to ride in a caravan that's being towed?",
  },
  {
    answers: [
      "Stabiliser",
      "Jockey wheel",
      "Corner steadies",
      "Breakaway cable",
    ],
    category: 14,
    correctAnswer: 3,
    explanation:
      "In the event that the trailer becomes detached from the towing vehicle, the breakaway cable activates the trailer brakes before snapping. This allows the towing vehicle to get free of the trailer and out of danger.",
    id: 9,
    mediaType: "image",
    question: "What safety device must be fitted to a trailer braking system?",
  },
  {
    answers: [
      "In the vehicle handbook",
      "In The Highway Code",
      "In your vehicle registration certificate",
      "In your licence documents",
    ],
    category: 14,
    correctAnswer: 0,
    explanation:
      "You must know how to load your trailer or caravan so that the hitch exerts an appropriate downward force on the tow ball. Information about the maximum permitted noseweight can be found in your vehicle handbook or obtained from your vehicle manufacturer’s agent.",
    id: 10,
    mediaType: "image",
    question:
      "You wish to tow a trailer. Where would you find the maximum noseweight for your vehicle’s tow hitch?",
  },
  {
    answers: [
      "Securely fastened with suitable restraints",
      "Loaded towards the rear of the vehicle ",
      "Visible in your exterior mirror",
      "Covered with plastic sheeting",
    ],
    category: 14,
    correctAnswer: 0,
    explanation:
      "Any load must be securely fastened to the vehicle. The safest way to carry items on the roof is in a specially designed roof box. This will help to keep your luggage secure and dry, and it also has less wind resistance than loads carried exposed on a roof rack.",
    id: 11,
    mediaType: "image",
    question: "How should a load be carried on your roof rack?",
  },
  {
    answers: [
      "A child seat",
      "An adult holding a child",
      "An adult seat belt",
      "An adult lap belt",
    ],
    category: 14,
    correctAnswer: 0,
    explanation:
      "It’s your responsibility to ensure that all children in your car are secure. Suitable restraints include a child seat, baby seat, booster seat or booster cushion. It’s essential that any restraint used is suitable for the child’s size and weight, and fitted according to the manufacturer’s instructions.",
    id: 12,
    mediaType: "image",
    question:
      "You're carrying a child under three years old in your car. Which restraint is suitable for a child of this age?",
  },
  {
    answers: ["6,500 kg", "5,500 kg", "4,500 kg", "3,500 kg"],
    category: 14,
    correctAnswer: 3,
    explanation:
      "When you pass your driving test, you're allowed to tow a trailer up to 3,500 kg MAM without taking an extra test. nIf you want to tow a heavier trailer, you'll have to pass either a CE or DE category test, dependent on the towing vehicle.",
    id: 13,
    mediaType: "image",
    question:
      "You’ve just passed your driving test. What’s the maximum authorised mass (MAM) of any trailer that you can tow?",
  },
  {
    answers: [
      "Ask DVLA to update your licencen",
      "Fit P plates to your trailern",
      "Take professional training n",
      "Pass a special driving testn",
    ],
    category: 14,
    correctAnswer: 2,
    explanation:
      "You need to know how to tow a trailer safely. This includes hitching the trailer to your vehicle, checking the trailer for defects, reversing with a trailer and how to deal with any problems. There are accredited trainers who can teach you these skills. Professional training will also give you confidence in your ability to tow a trailer safely.",
    id: 14,
    mediaType: "image",
    question: "What should you do before you tow a trailer for the first time?",
  },
  {
    answers: [
      "Exterior towing mirrorsn",
      "Projection markersn",
      "Parking sensors",
      "Rear-view camera",
    ],
    category: 14,
    correctAnswer: 0,
    explanation:
      "You must fit exterior towing mirrors to your vehicle ifn•  your vehicle is narrower than your trailer or loadn•  your trailer or load obstructs the view behind you.",
    id: 15,
    mediaType: "image",
    question:
      "You're going to tow a trailer that’s wider than your car. What must you fit to your car before you start towing it?",
  },
  {
    answers: [
      "Fit a secondary coupling device",
      "Grease the tow ball and hitch",
      "Switch off the reversing sensor on the towing vehicle",
      "Make sure you can see the trailer in the mirrors",
    ],
    category: 14,
    correctAnswer: 0,
    explanation:
      "If a tow hitch fails, the trailer must stay connected to the towing vehicle. This is achieved by using a secondary coupling device, such as a safety chain.",
    id: 16,
    mediaType: "image",
    question: "What must you do when you hitch a trailer to a towing vehicle?",
  },
  {
    answers: ["1 mmn", "1.6 mm", "2 mm", "2.2 mm"],
    category: 14,
    correctAnswer: 1,
    explanation:
      "Your car or small van must have a minimum tread depth of 1.6 mm across the centre of the tread and around the entire circumference. This also applies to the tyres on your trailer.",
    id: 17,
    mediaType: "image",
    question: "What’s the minimum depth of tread on the tyres of a trailer?",
  },
  {
    answers: [
      "Continue with your journey because the lights on your car are working",
      "Disconnect the trailer electrical coupling before continuing with your journey",
      "Repair the fault before continuing with your journey",
      "Book the trailer in for repair before continuing with your journey",
    ],
    category: 14,
    correctAnswer: 2,
    explanation:
      "You must make sure that your vehicle and trailer are roadworthy. Check that your tyres are legal, and the brakes and lights are working properly. nIf any of these things are not working, you must not drive or tow your trailer until the fault is repaired.",
    id: 18,
    mediaType: "image",
    question:
      "You’re about to start a journey towing a trailer. What should you do if you notice that a light on your trailer is not working?",
  },
  {
    answers: [
      "Your trailer can carry a load of 3,500 kg",
      "Your empty trailer weighs 3,500 kg ",
      "Your trailer and towing vehicle combined cannot weigh more than 3,500 kg",
      "Your trailer and load combined cannot weigh more than 3,500 kg",
    ],
    category: 14,
    correctAnswer: 3,
    explanation:
      "The MAM of the trailer is stamped on the plate fitted to the chassis. It is the maximum weight of the trailer and load that the manufacturer has designed it to carry. Do not load your trailer so that it exceeds this maximum weight.",
    id: 19,
    mediaType: "image",
    question:
      "What does it mean if your trailer has a maximum authorised mass (MAM) of 3,500 kg?",
  },
  {
    answers: [
      "Reduce speed gently",
      "Brake firmly",
      "Increase speed",
      "Steer sharply",
    ],
    category: 14,
    correctAnswer: 0,
    explanation:
      "If your trailer starts to swerve or snake, reduce speed gently to regain control. Do not accelerate or brake harshly.",
    id: 20,
    mediaType: "image",
    question: "What should you do if your trailer starts to swerve or snake?",
  },
  {
    answers: [
      "Put heavy items at the front",
      "Put heavy items at the back",
      "Put heavy items over the axle(s)",
      "Put heavy items in the corners",
    ],
    category: 14,
    correctAnswer: 2,
    explanation:
      "When loading your trailer, you should spread the weight evenly with heavy items over the axle(s). This should reduce the risk of it swerving or snaking.",
    id: 21,
    mediaType: "image",
    question: "How should you load your trailer?",
  },
];

export default questions;
