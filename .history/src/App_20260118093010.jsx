import React, { useState } from "react";
import { ChevronLeft, ChevronRight, BookOpen } from "lucide-react";

const App = () => {
  // Load Quran-style Arabic fonts
  React.useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Amiri+Quran&family=Scheherazade+New:wght@400;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);
  // Arabic prayers and phrases stored in JavaScript object
  const prayersData = {
    prayers: [
      {
        id: 1,
        arabic: `اللَّهُمَّ إِنِّي أَقِفُ بَيْنَ يَدَيْكَ ذَلِيلًا مُنْكَسِرًا، أَعْتَرِفُ بِضَعْفِي وَتَقْصِيرِي. أَنْتَ الَّذِي خَلَقْتَنِي، وَتَعْلَمُ سِرِّي وَعَلَانِيَتِي، وَتَعْلَمُ مَا فِي قَلْبِي مِمَّا لَا أُحْسِنُ التَّعْبِيرَ عَنْهُ بِلِسَانِي.

اللَّهُمَّ أُقِرُّ بِأَنِّي قَصَّرْتُ فِي دِرَاسَتِي، وَتَأَخَّرْتُ كَثِيرًا، وَضَيَّعْتُ أَوْقَاتِي، وَغَلَبَتْنِي نَفْسِي وَشَوَاغِلِي. فَاغْفِرْ لِي ذُنُوبِي، وَتُبْ عَلَيَّ تَوْبَةً نَصُوحًا، فَإِنِّي قَدْ ظَلَمْتُ نَفْسِي، وَلَا مَلْجَأَ وَلَا مَنْجَا مِنْكَ إِلَّا إِلَيْكَ.

اللَّهُمَّ أَنْتَ الْعَلِيمُ الْحَكِيمُ، فَارْزُقْنِي عِلْمًا نَافِعًا، وَفَهْمًا صَادِقًا، وَفَتْحًا مِنْ عِنْدِكَ. نَوِّرْ عَقْلِي، وَقَوِّ ذَاكِرَتِي، وَاشْرَحْ صَدْرِي لِلتَّعَلُّمِ، وَاصْرِفْ عَنِّي التَّشْتِيتَ وَالْكِسَلَ، وَارْزُقْنِي التَّرْكِيزَ وَالثَّبَاتَ.

اللَّهُمَّ أَعِنِّي عَلَى تَدَارُكِ مَا فَاتَنِي، وَيَسِّرْ لِي مَا اسْتَصْعَبْتُهُ، وَخَفِّفْ عَنِّي مَا أَثْقَلَنِي. بَارِكْ لِي فِي وَقْتِي، وَوَفِّقْنِي لِحُسْنِ اسْتِغْلَالِهِ، وَارْزُقْنِي الِانْضِبَاطَ وَالِاجْتِهَادَ وَالْمُوَاظَبَةَ.

اللَّهُمَّ لَا تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ. كُنْ لِي عَوْنًا إِذَا ضَعُفْتُ، وَمُثَبِّتًا إِذَا فَتَرْتُ، وَمُوَجِّهًا إِذَا ضَلَلْتُ. اجْعَلْ سَعْيِي مَبْرُورًا، وَتَقَدُّمِي مُتَوَاصِلًا وَلَوْ كَانَ قَلِيلًا.

اللَّهُمَّ إِنِّي أُفَوِّضُ أَمْرِي إِلَيْكَ، وَأَسْأَلُكَ فَضْلَكَ وَرَحْمَتَكَ، أَنْ تَجْبُرَ نَقْصِي، وَتُعِينَنِي عَلَى نَفْسِي، وَلَا تَحْرِمْنِي التَّوْفِيقَ بِسَبَبِ تَقْصِيرِي. إِنَّكَ أَنْتَ الرَّحْمَنُ الرَّحِيمُ، وَإِنِّي إِلَيْكَ فَقِيرٌ فِي كُلِّ أَمْرٍ. آمِينَ.
`,
        translation: `O Allah, my Lord, I come before You in humility and need. You are the One who created me, who knows what is hidden in my heart and what my tongue cannot fully express. I acknowledge my shortcomings, my weaknesses, my lack of discipline, and my many failures in my studies. I admit that I have fallen behind, not because You withheld Your mercy, but because of my own negligence, distractions, and poor choices.

O Allah, forgive me for wasting time, for delaying what was required of me, and for not striving as I should have. Forgive me for moments of laziness, lack of focus, and loss of motivation. I have wronged myself, and I have no one to turn to but You.

O Allah, You are Al-‘Alīm, the All-Knowing. Grant me beneficial knowledge that settles in my heart and increases me in understanding. Open my mind to learn, strengthen my memory, and grant me clarity and focus. Remove confusion from my thoughts and replace it with calmness and purpose.

O Allah, help me catch up where I have fallen behind. Make what feels difficult easy for me, and what feels overwhelming manageable by Your mercy. Grant me discipline, consistency, and sincere effort. Bless my time and allow me to use it wisely.

O Allah, do not leave me to myself even for a moment. Support me when I feel weak, motivate me when I feel discouraged, and remind me of my goals when I feel lost. Make my efforts fruitful and my progress steady, even if it is small.

O Allah, I place my trust in You. I ask You to guide me, help me, and not deprive me of success because of my shortcomings. Indeed, You are the Most Merciful, and I am in need of Your help in every matter. Ameen.
`,
        category: "Help With School",
      },

      {
        id: 2,
        arabic: `اللَّهُمَّ يَا رَحْمٰنُ يَا عَلِيمُ،

أَتَقَدَّمُ إِلَيْكَ بِقَلْبٍ خَاشِعٍ، مُقِرًّا بِضَعْفِي وَتَقْصِيرِي، مُعْتَرِفًا بِذُنُوبِي وَعُيُوبِي. ظَلَمْتُ نَفْسِي، وَلَوْلَا رَحْمَتُكَ مَا كَانَ لِي مِنْ نَجَاةٍ.

اللَّهُمَّ إِنَّكَ تَرَى مَا أُخْفِي، وَتَعْلَمُ مَا فِي صَدْرِي. أُقِرُّ بَيْنَ يَدَيْكَ بِضَعْفِي دُونَ عُذْرٍ وَلَا كِبْرٍ. فَاغْفِرْ لِي ذُنُوبِي كُلَّهَا، مَا ظَهَرَ مِنْهَا وَمَا بَطَنَ، وَطَهِّرْ قَلْبِي وَزَكِّ نِيَّتِي.

اللَّهُمَّ قَوِّنِي حَيْثُ أَضْعُفُ، وَاهْدِنِي حَيْثُ أَضِلُّ، وَامْنَحْنِي ضَبْطَ النَّفْسِ عِنْدَ غَلَبَةِ الشَّهْوَةِ. أَعِنِّي عَلَى غَضِّ بَصَرِي، وَحِفْظِ فِكْرِي، وَصَوْنِ جَوَارِحِي. وَأَبْدِلْ شَهَوَاتٍ تُؤْذِينِي بِسَكِينَةٍ وَعِفَّةٍ وَرِضًا بِمَا أَحْلَلْتَ.

اللَّهُمَّ لَا تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ. وَإِذَا زَلَلْتُ فُخُذْ بِي إِلَيْكَ أَخْذًا جَمِيلًا، وَارْزُقْنِي تَوْبَةً صَادِقَةً وَعَزِيمَةً مُتَجَدِّدَةً. ثَبِّتْ قَلْبِي عَلَى طَاعَتِكَ، وَاصْرِفْ عَنِّي كُلَّ مَا يُبْعِدُنِي عَنْكَ.

اللَّهُمَّ إِنِّي أَرْجُو رَحْمَتَكَ أَكْثَرَ مِمَّا أَخَافُ ذُنُوبِي. فَاقْبَلْ تَوْبَتِي، وَقَوِّ إِرَادَتِي، وَارْزُقْنِي طَهَارَةَ الْقَلْبِ وَالْبَدَنِ. إِنَّكَ أَنْتَ الْغَفُورُ الرَّحِيمُ.

آمِينَ.
`,
        translation: `O Allah, the Most Merciful, the All-Knowing,

I come before You in humility, fully aware of my weakness and my many shortcomings. I acknowledge that I have wronged myself and fallen short of the standard You love. If not for Your mercy, I would have no hope.

O Allah, You see what I struggle to hide, and You know what is within my heart. I admit my weakness before You without excuse or pride. I ask You to forgive me for my sins, both what I have done openly and what I have done in private. Cleanse my heart and purify my intentions.

O Allah, grant me strength where I am weak, clarity where I am confused, and restraint where my desires overpower me. Help me lower my gaze, guard my thoughts, and protect my actions. Replace harmful urges with peace, self-control, and contentment with what is lawful and pleasing to You.

O Allah, do not leave me to myself even for a moment. Guide me back to You whenever I slip, and give me the courage to repent sincerely and to keep trying, even when I fall again. Make my heart firm upon obedience and distance me from anything that pulls me away from You.

O Allah, I trust in Your mercy more than I fear my sins. Accept my repentance, strengthen my resolve, and grant me purity of heart and body. Indeed, You are the Most Forgiving, the Most Compassionate.

Ameen.
`,
        category: "For more Concentration",
      },
      {
        id: 3,
        arabic: `اللَّهُمَّ إِنِّي أَقِفُ بَيْنَ يَدَيْكَ خَاشِعًا مُتَذَلِّلًا، مُقِرًّا بِضَعْفِي وَفَقْرِي إِلَيْكَ. أَعْتَرِفُ بِتَقْصِيرِي وَتَشَتُّتِ فِكْرِي، وَقِلَّةِ تَرْكِيزِي، وَأَنَّ نَفْسِي تَضْعُفُ وَتَسْهُو، وَلَا قُوَّةَ لِي عَلَى إِصْلَاحِ ذَلِكَ إِلَّا بِعَوْنِكَ.

اللَّهُمَّ اغْفِرْ لِي غَفْلَتِي وَإِهْمَالِي، وَطَهِّرْ قَلْبِي مِنَ التَّشْتِيتِ وَالْقَلَقِ وَقَسَاوَةِ الذِّهْنِ. اللَّهُمَّ ارْزُقْنِي صَفَاءَ الْعَقْلِ، وَثَبَاتَ الْقَلْبِ، وَحُسْنَ التَّرْكِيزِ فِيمَا يُرْضِيكَ وَيَنْفَعُنِي فِي دِينِي وَدُنْيَايَ.

اللَّهُمَّ اجْعَلْ فِي قَلْبِي نُورًا، وَفِي عَقْلِي سَكِينَةً، وَفِي نَفْسِي صَبْرًا. وَأَعِنِّي عَلَى إِدَارَةِ وَقْتِي، وَاسْتِعْمَالِ نِعَمِكَ فِيمَا يُقَرِّبُنِي إِلَيْكَ. وَلَا تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ، فَإِنِّي ضَعِيفٌ بِدُونِكَ.

اللَّهُمَّ تَقَبَّلْ دُعَائِي عَلَى قِلَّتِي وَنَقْصِي، وَأَصْلِحْنِي بِرَحْمَتِكَ، وَاهْدِنِي سُبُلَ التَّحَسُّنِ وَالثَّبَاتِ. إِنَّكَ أَنْتَ الْجَبَّارُ الَّذِي يُصْلِحُ الْكَسْرَ، وَيَهَبُ التَّوْفِيقَ لِمَنْ يَشَاءُ. آمِينَ.
`,
        translation: `O Allah, Most Merciful and Most Kind, I come before You in humility, fully aware of my weakness and need for You. I acknowledge my shortcomings, my scattered thoughts, and my inability to focus as I should. I admit that my heart often wanders and my attention is easily lost, and I have no power to correct this except through Your help.

O Allah, forgive me for my negligence and for every moment I fail to be mindful. Purify my heart from distractions, restlessness, and heedlessness. Grant me clarity of mind, steadiness of heart, and discipline in my thoughts. Strengthen my ability to focus on what benefits me in my faith, my responsibilities, and my growth.

O Allah, place light in my heart, calmness in my mind, and patience in my soul. Help me manage my time wisely and use my abilities in ways that please You. Do not leave me to myself, even for the blink of an eye, for I am weak without You.

O Allah, accept this plea from me despite my imperfections, and guide me gently toward improvement. Indeed, You are the One who mends what is broken and grants success to whom You will. Ameen.
`,
        category: "Salawat",
      },
      {
        id: 4,
        arabic: "سُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ وَلَا إِلَهَ إِلَّا اللَّهُ وَاللَّهُ أَكْبَرُ",
        translation: "Glory be to Allah, and praise be to Allah, and there is no god but Allah, and Allah is the Greatest",
        category: "Dhikr",
      },
      {
        id: 5,
        arabic: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
        translation: "Our Lord, give us good in this world and good in the Hereafter, and protect us from the punishment of the Fire",
        category: "Dua",
      },
      {
        id: 6,
        arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْهُدَى وَالتُّقَى وَالْعَفَافَ وَالْغِنَى",
        translation: "O Allah, I ask You for guidance, piety, chastity, and self-sufficiency",
        category: "Dua",
      },
      {
        id: 7,
        arabic: "رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي",
        translation: "My Lord, expand my chest and make my task easy for me",
        category: "Dua",
      },
      {
        id: 8,
        arabic: "لَا إِلَهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ",
        translation: "There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers",
        category: "Dua",
      },
      {
        id: 9,
        arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ",
        translation: "O Allah, I seek refuge in You from anxiety and grief",
        category: "Protection",
      },
      {
        id: 10,
        arabic: "حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ",
        translation: "Allah is sufficient for us, and He is the best Disposer of affairs",
        category: "Trust in Allah",
      },
    ],
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentPrayer = prayersData.prayers[currentIndex];

  const goToNext = () => {
    setCurrentIndex((prev) => (prev < prayersData.prayers.length - 1 ? prev + 1 : prev));
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 flex items-center justify-center p-4">
      <div className="max-w-3xl w-full pb-36">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-3">
            <BookOpen className="w-8 h-8 text-emerald-600" />
            <h1 className="text-3xl font-bold text-gray-800">Islamic Prayers & Duas</h1>
          </div>
          <p className="text-gray-600">Learn authentic prayers in Arabic</p>
        </div>

        {/* Prayer Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          {/* Category Badge */}
          <div className="text-center mb-6">
            <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 text-sm font-semibold rounded-full">{currentPrayer.category}</span>
          </div>

          {/* Arabic Text - Quran Style */}
          <div className="mb-8 px-4 py-8 bg-gradient-to-b from-amber-50 to-transparent rounded-xl border-t-4 border-b-4 border-amber-200" dir="rtl">
            <p
              className="text-4xl md:text-5xl text-gray-900 leading-loose text-center"
              style={{
                fontFamily: "'Amiri Quran', 'Scheherazade New', 'Traditional Arabic', serif",
                lineHeight: "2.5",
                textShadow: "0 1px 2px rgba(0,0,0,0.1)",
              }}>
              {currentPrayer.arabic}
            </p>
          </div>

          {/* Translation */}
          <div className="border-t-2 border-emerald-100 pt-6">
            <p className="text-xl md:text-2xl text-gray-700 text-center italic leading-relaxed">{currentPrayer.translation}</p>
          </div>
        </div>

        <div className="fixed bottom-0 left-0 right-0">
          {/* Progress Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {prayersData.prayers.map((_, index) => (
              <button key={index} onClick={() => setCurrentIndex(index)} className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? "bg-emerald-600 w-8" : "bg-gray-300 hover:bg-gray-400"}`} />
            ))}
          </div>
          {/* Navigation Controls */}
          <div className="flex items-center justify-between bg-white rounded-xl shadow-lg p-4 mt-4">
            <button onClick={goToPrevious} disabled={currentIndex === 0} className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${currentIndex === 0 ? "bg-gray-100 text-gray-400 cursor-not-allowed" : "bg-emerald-600 text-white hover:bg-emerald-700 shadow-md"}`}>
              <ChevronLeft className="w-5 h-5" />
              Previous
            </button>

            <div className="text-center">
              <p className="text-sm text-gray-500 mb-1">Prayer</p>
              <p className="text-2xl font-bold text-emerald-600">
                {currentIndex + 1} / {prayersData.prayers.length}
              </p>
            </div>

            <button onClick={goToNext} disabled={currentIndex === prayersData.prayers.length - 1} className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${currentIndex === prayersData.prayers.length - 1 ? "bg-gray-100 text-gray-400 cursor-not-allowed" : "bg-emerald-600 text-white hover:bg-emerald-700 shadow-md"}`}>
              Next
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
