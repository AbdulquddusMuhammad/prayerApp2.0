import React, { useState } from "react";
import { ChevronLeft, ChevronRight, BookOpen } from "lucide-react";

const App = () => {
  // Arabic prayers and phrases stored in JavaScript object
  const prayersData = {
    prayers: [
      {
        id: 1,
        arabic: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ",
        translation: "In the name of Allah, the Most Gracious, the Most Merciful",
        category: "Opening",
      },
      {
        id: 2,
        arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
        translation: "All praise is due to Allah, Lord of all the worlds",
        category: "Praise",
      },
      {
        id: 3,
        arabic: "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ",
        translation: "O Allah, send blessings upon Muhammad and the family of Muhammad",
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
      <div className="max-w-3xl w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-3">
            <BookOpen className="w-8 h-8 text-emerald-600" />
            <h1 className="text-3xl font-bold text-gray-800">Islamic Prayers & Duas</h1>
          </div>
          <p className="text-gray-600">Learn authentic prayers in Arabic</p>
        </div>

        {/* Prayer Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 mb-6">
          {/* Category Badge */}
          <div className="text-center mb-6">
            <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 text-sm font-semibold rounded-full">{currentPrayer.category}</span>
          </div>

          {/* Arabic Text */}
          <div className="mb-8 text-center" dir="rtl">
            <p className="text-3xl md:text-4xl font-bold text-gray-800 leading-loose">{currentPrayer.arabic}</p>
          </div>

          {/* Translation */}
          <div className="border-t-2 border-emerald-100 pt-6">
            <p className="text-xl md:text-2xl text-gray-700 text-center italic leading-relaxed">{currentPrayer.translation}</p>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="_navigation_ fixed">
          <div className="flex items-center justify-between bg-white rounded-xl shadow-lg p-4">
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

        {/* Progress Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {prayersData.prayers.map((_, index) => (
            <button key={index} onClick={() => setCurrentIndex(index)} className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? "bg-emerald-600 w-8" : "bg-gray-300 hover:bg-gray-400"}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
