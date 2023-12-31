const videoQuestions = [
  {
    answers: [
      "When you are going straight on",
      "When you are turning left",
      "When you are turning right",
      "Never",
    ],
    category: "Video",
    // content: "http://appsbreaking.com/video_1.mp4",
    content: require("./../assets/video/video_1.mp4"),
    correctAnswer: 2,
    explanation:
      "The yellow grid markings are a box junction. They're used where stationary traffic is likely to block the junction. You must not enter a box junction unless your exit road is clear. You can enter the box and wait when you want to turn right but oncoming trafﬁc is preventing you turning. The right-turn exit must be clear.",
    id: 1,
    mediaType: "video",
    question: "When are you allowed to wait on the yellow grid markings?",
  },
  {
    answers: [
      "Because the lorry needs the room to turn",
      "Because the driver was late checking their right mirror",
      "Because the driver was making room for the cyclist",
      "Because the lorry set off too fast",
    ],
    category: "Video",
    // content: "http://appsbreaking.com/video_1.mp4",
    content: require("./../assets/video/video_1.mp4"),
    correctAnswer: 0,
    explanation:
      "Large vehicles need more room than small vehicles to turn at a junction. Their position may seem wrong to you. But they often need more space to swing out to the right when turning left, and to the left when they're turning right.At  junctions allow more room for large vehicles.",
    id: 2,
    mediaType: "video",
    question: "Why did the lorry driver start turning so late?",
  },
  {
    answers: [
      "When you've checked your mirrors for cyclists",
      "When there are no cycles in the marked area",
      "When you've turned on your hazard warning lights",
      "When the traffic lights change to amber after you've passed the first line",
    ],
    category: "Video",
    // content: "http://appsbreaking.com/video_1.mp4",
    content: require("./../assets/video/video_1.mp4"),
    correctAnswer: 3,
    explanation:
      "At some trafﬁc lights there are advance stop lines, where cyclists can position themselves ahead of other trafﬁc.When the lights change to amber or red you should stop at the first white line. Stay out of the marked area, as this is for cyclists only. However, if you've crossed the first white line when the signal changes to red, you must stop at the second white line even if you're in the marked area. Allow cyclists plenty of time and space to move off when the lights change to green.",
    id: 3,
    mediaType: "video",
    question: "When may you wait in the area marked with a cycle?",
  },
  {
    answers: [
      "Pedestrians walking in the road",
      "Overhanging tree branches",
      "A narrowing of the road",
      "The height of the bridge",
    ],
    category: "Video",
    // content: "http://appsbreaking.com/video_2.mp4",
    content: require("./../assets/video/video_2.mp4"),
    correctAnswer: 0,
    explanation:
      "Look out for warning signs as you’re driving. They'll tell you what hazards you may find ahead. For example, pedestrians, wild animals or cattle. To deal safely with any hazards in the road, be prepared to slow down or stop.",
    id: 4,
    mediaType: "video",
    question:
      "What hazard do you need to look out for as you drive under the bridge?",
  },
  {
    answers: ["30 mph", "40 mph", "50 mph", "60 mph"],
    category: "Video",
    // content: "http://appsbreaking.com/video_2.mp4",
    content: require("./../assets/video/video_2.mp4"),
    correctAnswer: 0,
    explanation:
      "If you're driving in a built-up area, the speed limit will be low. Apart from the speed limit signs where you enter the limit, look out for repeater signs reminding you of the speed limit. A speed limit isn’t a target - you don’t have to drive as fast as the limit says you can. Keep within the limit and adapt your driving to the road situation.",
    id: 5,
    mediaType: "video",
    question: "What's the speed limit on this road?",
  },
  {
    answers: [
      "Waiting restrictions apply at certain times",
      "It marks the edge of the road",
      "No stopping at any time",
      "No waiting at any time",
    ],
    category: "Video",
    // content: "http://appsbreaking.com/video_2.mp4",
    content: require("./../assets/video/video_2.mp4"),
    correctAnswer: 0,
    explanation:
      "Yellow lines along the side of the road tell you that waiting restrictions apply here. If there's just one line, it means that the waiting restrictions are at certain times. There may be a yellow plate on a wall or lamppost nearby telling you what these times are.If the yellow lines are double, it means that you cannot wait there at any time.",
    id: 6,
    mediaType: "video",
    question:
      "What does the single yellow line along the side of the road mean?",
  },
  {
    answers: ["60 mph", "70 mph", "50 mph", "40 mph"],
    category: "Video",
    // content: "http://appsbreaking.com/video_3.mp4",
    content: require("./../assets/video/video_3.mp4"),
    correctAnswer: 0,
    explanation:
      "The speed limit when you're towing a caravan or trailer is lower than the limit for a car that's not towing. This is mainly because the increased length and weight of the combination make it more difficult to control.When you're towing a caravan or trailer, you should take your time with any manoeuvres. You should also allow more time for slowing and stopping.",
    id: 7,
    mediaType: "video",
    question:
      "What's the speed limit for the car towing the caravan on this road?",
  },
  {
    answers: [
      "Brake firmly until the swinging stops",
      "Steer sharply in the opposite direction to the caravan's swing",
      "Ease off the accelerator to slow down",
      "Accelerate until the swinging stops",
    ],
    category: "Video",
    // content: "http://appsbreaking.com/video_3.mp4",
    content: require("./../assets/video/video_3.mp4"),
    correctAnswer: 2,
    explanation:
      "When you're towing a caravan and it begins to 'snake', you need to bring it back under control.Don't steer sharply or brake hard. Instead, you should ease off the accelerator and gradually reduce your speed until the caravan stops snaking.",
    id: 8,
    mediaType: "video",
    question:
      "The caravan starts to swing from side to side. What should the driver do to bring it back under control? ",
  },
  {
    answers: [
      "Because the other cars are passing too close to it",
      "Because there are traffic cones on the road",
      "Because it's in the wrong lane",
      "Because of side winds",
    ],
    category: "Video",
    // content: "http://appsbreaking.com/video_3.mp4",
    content: require("./../assets/video/video_3.mp4"),
    correctAnswer: 3,
    explanation:
      "When a caravan moves about like this, it's called 'snaking'. It happens when the caravan is unstable.There are several reasons why a caravan could snake while you're towing it. They include • uneven weight distribution• being buffeted by wind from passing high-sided vehicles • strong side winds You should always be aware of the weather conditions while you're driving, but especially when you're towing a caravan.",
    id: 9,
    mediaType: "video",
    question: "Why is the caravan unstable and swinging from side to side?",
  },
  {
    answers: [
      "When the pedestrians have cleared your side of the road",
      "When the pedestrians have completely crossed",
      "When the oncoming car moves off",
      "When the driver behind you sounds their horn",
    ],
    category: "Video",
    // content: "http://appsbreaking.com/video_4.mp4",
    content: require("./../assets/video/video_4.mp4"),
    correctAnswer: 1,
    explanation:
      "When a pedestrian uses a crossing, you must wait until they've safely crossed before you can continue driving.nWhen the pedestrian is on the crossing, do not try to hurry them by edging forward or sounding your horn. Be patient and only move off when they've safely reached the other pavement.n",
    id: 10,
    mediaType: "video",
    question: "You've stopped at the zebra crossing. When may you move off?",
  },
  {
    answers: [
      "Be ready to slow down or stop to allow pedestrians to cross",
      "Slow down and wave the pedestrians across",
      "Speed up to get past the crossing",
      "Sound your horn to warn the pedestrians",
    ],
    category: "Video",
    // content: "http://appsbreaking.com/video_4.mp4",
    content: require("./../assets/video/video_4.mp4"),
    correctAnswer: 0,
    explanation:
      "You should always drive slowly where there are pedestrians; for example, in a town centre or on a housing estate. nAs you approach a crossing, you should look out for pedestrians who are ready to cross. Slow down and be ready to stop. You should also look out for people who are approaching the crossing. They may suddenly decide to use it so you must be ready to stop.",
    id: 11,
    mediaType: "video",
    question: "How should you approach the zebra crossing?",
  },
  {
    answers: [
      "He's deaf",
      "He's blind",
      "He's deaf and blind",
      "He's physically disabled",
    ],
    category: "Video",
    // content: "http://appsbreaking.com/video_4.mp4",
    content: require("./../assets/video/video_4.mp4"),
    correctAnswer: 2,
    explanation:
      "It's not always possible to spot a pedestrian with a disability. But when a person is using a white cane, they're probably visually impaired. nThere are two types of white canen• A plain white cane means the person is blind or visually impairedn• A white cane with a red band means the person is blind and deaf or hearing impairednYou should always drive carefully where there are pedestrians, but take extra care when you see someone who is disabled. Be patient as they may not be able to see or hear you and they may be slow crossing the road. ",
    id: 12,
    mediaType: "video",
    question: "Why should you take care driving past the man with the cane?",
  },
  {
    answers: [
      "Speed up and overtake before you get to the bend",
      "Stay behind and wait until you have a clear view",
      "Overtake straight after the oncoming car passes",
      "Sound your horn and make the tractor pull over",
    ],
    category: "Video",
    // content: "http://appsbreaking.com/video_5.mp4",
    content: require("./../assets/video/video_5.mp4"),
    correctAnswer: 1,
    explanation:
      "You need to be patient when you're waiting to pass a slow-moving vehicle like a tractor.nSometimes the driver will pull over to the left to allow you to pass more easily, but they may not always be able to do this.nTo pass safely, you need a good view of the road ahead. So, stay far enough behind the tractor to allow this view.  When you can see that the road ahead is clear, you should check your mirrors and only overtake if it's safe to do so. nNever overtake when you're approaching a bend, the brow of a hill or where there's a dip in the road. ",
    id: 13,
    mediaType: "video",
    question: "You want to overtake the tractor. What should you do?",
  },
  {
    answers: [
      "To warn you it's a slow-moving vehicle",
      "To warn you it has a wide load ",
      "To tell you not to overtake",
      "To warn you it's breaking down",
    ],
    category: "Video",
    // content: "http://appsbreaking.com/video_5.mp4",
    content: require("./../assets/video/video_5.mp4"),
    correctAnswer: 0,
    explanation:
      "Many vehicles have coloured flashing lights that tell you the vehicle's function or how it will behave.nSlow-moving vehicles use flashing amber beacons to warn other road users of their slow speed; for example, tractors, roadwork vehicles and bin lorries.nYou should be patient when trying to overtake slow-moving vehicles.",
    id: 14,
    mediaType: "video",
    question: "Why has the tractor got flashing amber lights?",
  },
  {
    answers: [
      "No stopping",
      "No overtaking",
      "They mark the centre of the road",
      "There's a hazard ahead",
    ],
    category: "Video",
    // content: "http://appsbreaking.com/video_5.mp4",
    content: require("./../assets/video/video_5.mp4"),
    correctAnswer: 3,
    explanation:
      "White lines painted on the road give you information about where you may drive and when. nA line that lengthens, with shortened gaps, means there's a hazard ahead. For example, it may mean there's a sharp bend coming up.nIf you need to overtake another vehicle or turn, you must make sure that the road ahead is clear before you cross the lines.n",
    id: 15,
    mediaType: "video",
    question: "What do the lines along the centre of the road mean?",
  },
  {
    answers: [
      "Traffic is merging from the left",
      "There's a T-junction ahead",
      "There's a crossroads and a double bend ahead",
      "There's a staggered junction ahead",
    ],
    category: "Video",
    // content: "http://appsbreaking.com/video_6.mp4",
    content: require("./../assets/video/video_6.mp4"),
    correctAnswer: 2,
    explanation:
      "You'll see a sign warning you to slow down when you're approaching a part of the road where you need to be especially careful. For example, as you approach a roundabout, a crossroads or a bend.nIf you're travelling on a major road and coming up to a junction with a minor road, you should slow down – even if you don't want to turn. This is because another driver at the junction may not be able to see clearly and they could pull out in front of you.nCheck your speed as you approach a junction or a bend and be prepared to slow down or stop.",
    id: 16,
    mediaType: "video",
    question: "Why is there a warning 'Reduce speed now'?",
  },
  {
    answers: [
      "To warn you the speed limit has changed",
      "To warn of hazards ahead",
      "To warn you there's a speed camera ahead",
      "To warn you not to change lanes",
    ],
    category: "Video",
    // content: "http://appsbreaking.com/video_6.mp4",
    content: require("./../assets/video/video_6.mp4"),
    correctAnswer: 1,
    explanation:
      "White lines painted on the road give you information about where you may drive and when. nThe broken white line marks the boundary between lanes on your side of the dual carriageway. But when the lines start to lengthen, with shorter gaps, this warns you of a hazard coming up – like a sharp bend. nWatch out for changes in the road markings so you can prepare for the hazard ahead.",
    id: 17,
    mediaType: "video",
    question: "Why has the line in the centre of the road changed?",
  },
  {
    answers: [
      "Move partly into the central reservation and wait until it's safe to turn",
      "Move out when an approaching driver flashes their headlights",
      "Turn left and find a suitable place to turn around.",
      "Wait until the road is clear in both directions before turning",
    ],
    category: "Video",
    // content: "http://appsbreaking.com/video_6.mp4",
    content: require("./../assets/video/video_6.mp4"),
    correctAnswer: 3,
    explanation:
      "Before turning right onto a dual carriageway, you must assess whether the central reservation is deep enough to contain your vehicle. If so, you can cross into the central reservation when it's clear, and wait there until it's safe to join the carriageway.nIf you're towing a trailer or a caravan, the combined length of your vehicles will probably be too long to sit safely in the central reservation. So, you must wait until it's clear in both directions before joining the dual carriageway.",
    id: 18,
    mediaType: "video",
    question:
      "The driver towing the caravan wants to turn right onto the dual carriageway. What should they do?",
  },
  {
    answers: [
      "There are chevrons on the roundabout",
      "The roundabout is 50 yards ahead ",
      "The roundabout is 100 yards ahead ",
      "Give way at the roundabout",
    ],
    category: "Video",
    // content: "http://appsbreaking.com/video_7.mp4",
    content: require("./../assets/video/video_7.mp4"),
    correctAnswer: 2,
    explanation:
      "As you approach a roundabout or a junction, you'll often see signs displaying white bars. These are called countdown markers and they tell you how far it is to the junction.nEach bar represents 100 yards, son• three white bars represent 300 yardsn• two white bars represent 200 yardsn• one white bar represents 100 yards nThe background colour will depend on what kind of road you're driving along. For example, it's blue for motorways and green for primary routes.",
    id: 19,
    mediaType: "video",
    question:
      "As you approach the roundabout, there's a sign showing a single white bar on a green background. What does this sign tell you?",
  },
  {
    answers: [
      "Mirrors, signal, manoeuvre ",
      "Signal, mirrors, manoeuvre",
      "Manoeuvre, signal, mirrors",
      "Manoeuvre, mirrors, signal",
    ],
    category: "Video",
    // content: "http://appsbreaking.com/video_7.mp4",
    content: require("./../assets/video/video_7.mp4"),
    correctAnswer: 0,
    explanation:
      "Before you change lanes, you should think about how your action will affect other drivers.nUse your mirrors to check what's behind you, as well as keeping an eye on what's ahead of you. Give a signal to let other road users know the direction you intend to move in. And, when it's safe, you can change lanes.",
    id: 20,
    mediaType: "video",
    question:
      "As you approach the roundabout, you want to change lanes. What routine should you follow?",
  },
  {
    answers: [
      "Only the left lane",
      "Either the left lane or middle lane",
      "Only the middle lane",
      "Either the middle lane or right lane",
    ],
    category: "Video",
    // content: "http://appsbreaking.com/video_7.mp4",
    content: require("./../assets/video/video_7.mp4"),
    correctAnswer: 1,
    explanation:
      "As you approach a large or complex roundabout, you'll see a sign telling you the layout of the roundabout and route directions. Use this to choose the lane you need.nIf there are multiple lanes, there'll often be route numbers marked on the road to help you select the right lane.nGet into the lane you need in plenty of time. Don't straddle lanes and avoid changing lanes at the last moment.",
    id: 21,
    mediaType: "video",
    question:
      "You want to travel on the A61. Which lane should you use at the roundabout?",
  },
  {
    answers: [
      "In case the pedestrian wants to get on the bus",
      "The bus needs extra room to get around the roundabout",
      "The sign on the roundabout is directing traffic to 'keep left'",
      "To get a better view of the roundabout",
    ],
    category: "Video",
    // content: "http://appsbreaking.com/video_8.mp4",
    content: require("./../assets/video/video_8.mp4"),
    correctAnswer: 1,
    explanation:
      "A long vehicle at a roundabout may need to use the left-hand lane, even if it's signalling to go right. This is because it needs extra room to travel around a roundabout. For the same reason, it may also straddle lanes.nWatch out for a long vehicle's signals and allow it plenty of room on a roundabout.",
    id: 22,
    mediaType: "video",
    question: "Why has the bus driver positioned the bus on the left?",
  },
  {
    answers: [
      "The cyclist is riding into a one-way street",
      "It's easier to give arm signals while you're on the left",
      "Cyclists may keep to the left for safety",
      "To avoid being dazzled by the sun",
    ],
    category: "Video",
    // content: "http://appsbreaking.com/video_8.mp4",
    content: require("./../assets/video/video_8.mp4"),
    correctAnswer: 2,
    explanation:
      "Roundabouts can be dangerous places for cyclists. To stay safe, they may keep to the outside of a roundabout. They may cycle in the left lane, even if they intend to turn right. nWatch out for a cyclist's arm signals, as they'll tell you the direction they intend to take. Always give cyclists plenty of room.",
    id: 23,
    mediaType: "video",
    question:
      "Why does the cyclist take the longer route around the roundabout?",
  },
  {
    answers: [
      "They are rumble strips",
      "They mark the edge of the road",
      "Pedestrians shouldn't cross where there are yellow lines",
      "No waiting",
    ],
    category: "Video",
    // content: "http://appsbreaking.com/video_8.mp4",
    content: require("./../assets/video/video_8.mp4"),
    correctAnswer: 3,
    explanation:
      "A double yellow line at the edge of the road means no waiting at any time. nThis means that you can't wait or park. However, you may stop on double yellow lines to drop off or pick up people. You may also stop to load or unload, provided there are no loading restrictions.",
    id: 24,
    mediaType: "video",
    question: "What do the yellow lines along the edge of the road mean?",
  },
  {
    answers: [
      "The road surface will be slippery",
      "A driver waiting to emerge might not see you",
      "You'll be in the blind spot of the driver waiting to emerge",
      "Your signal would be hard to see",
    ],
    category: "Video",
    // content: "http://appsbreaking.com/video_9.mp4",
    content: require("./../assets/video/video_9.mp4"),
    correctAnswer: 1,
    explanation:
      "It can be difficult for a driver emerging from a junction to see other road users. A vehicle that's overtaking might be hidden from the emerging driver's view, especially if the vehicle being overtaken is large, such as a lorry or coach.nWhen you overtake, choose your time and place carefully.",
    id: 25,
    mediaType: "video",
    question: "Why is it dangerous to overtake near a junction?",
  },
  {
    answers: ["60 mph", "30 mph", "40 mph", "50 mph"],
    category: "Video",
    // content: "http://appsbreaking.com/video_9.mp4",
    content: require("./../assets/video/video_9.mp4"),
    correctAnswer: 3,
    explanation:
      "You need to learn different driving techniques for towing a caravan. And, due to your vehicle's increased weight and length, you must plan your manoeuvres well in advance. nThe speed limit for towing a caravan is lower than for a vehicle that's not towing. This allows for the extra time it takes to slow down and stop.",
    id: 26,
    mediaType: "video",
    question:
      "What is the speed limit on this road for the car towing the caravan?",
  },
  {
    answers: [
      "No overtaking",
      "You must not enter the area unless it's an emergency",
      "You should not enter the area unless it's necessary and you can see it's safe",
      "It's an overtaking area for motorcyclists",
    ],
    category: "Video",
    // content: "http://appsbreaking.com/video_9.mp4",
    content: require("./../assets/video/video_9.mp4"),
    correctAnswer: 2,
    explanation:
      "Diagonal white stripes edged by broken lines are used in the centre of the road to separate traffic going in opposite directions. They're called hatched markings and are often used at junctions.nYou should only enter a hatched area bordered by a broken white line, if it's necessary and safe to do so.",
    id: 27,
    mediaType: "video",
    question:
      "What do the white diagonal stripe markings in the middle of the road mean?",
  },
];

export default videoQuestions;
