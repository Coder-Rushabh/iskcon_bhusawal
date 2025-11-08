import React, { useState } from "react";
import d3 from "../assets/d3.png";
import d2 from "../assets/d2.png";

function Donation() {
  const [selectedDonation, setSelectedDonation] = useState(null);
  const [customAmount, setCustomAmount] = useState("");

  // Donation data extracted from the image
  const donationCategories = [
    {
      category: "PATRONS",
      items: [
        { name: "DIAMOND PATRON", amount: "1 CRORE" },
        { name: "GOLD PATRON", amount: "51 LAKH" },
        { name: "SILVER PREMIUM PATRON", amount: "25 LAKH" },
        { name: "SILVER PLUS PATRON", amount: "15 LAKH" },
        { name: "SILVER PATRON", amount: "7 LAKH" }
      ]
    },
    {
      category: "BRICKS",
      items: [
        { name: "RADHA-KRISHNA BRICK", amount: "2 LAKH" },
        { name: "GAUR-NITAI BRICK", amount: "1 LAKH" },
        { name: "SRILA PRABHUPADA BRICK", amount: "75,000" },
        { name: "ALTAR BRICK", amount: "50,000" }
      ]
    },
    {
      category: "TEMPLE COMPONENTS",
      items: [
        { name: "TEMPLE HALL", amount: "99 LAKH" },
        { name: "MAIN ALTAR", amount: "40 LAKH" },
        { name: "DIORAMA", amount: "31 LAKH" },
        { name: "DEVOTEE ROOM", amount: "11 LAKH" },
        { name: "TEMPLE PILLAR", amount: "10 LAKH" }
      ]
    }
  ];

  // Function to convert amount string to numeric value
  const convertAmountToNumber = (amountStr) => {
    const cleanStr = amountStr.replace(/,/g, '');
    if (cleanStr.includes('CRORE')) {
      return parseInt(cleanStr.replace('CRORE', '').trim()) * 10000000;
    } else if (cleanStr.includes('LAKH')) {
      return parseInt(cleanStr.replace('LAKH', '').trim()) * 100000;
    } else {
      return parseInt(cleanStr);
    }
  };

  // Generate UPI payment link for bank transfer
  const generateBankTransferLink = (amount, description) => {
    const baseUpi = "upi://pay";
    const params = new URLSearchParams({
      pa: "037322010400054@axisbank",
      pn: "INTERNATIONAL SOCIETY FOR KRISHNA CONSCIOUSNESS",
      am: amount.toString(),
      tn: description,
      cu: "INR"
    });
    
    return `${baseUpi}?${params.toString()}`;
  };

  const handleDonationClick = (donationItem) => {
    setSelectedDonation(donationItem);
    
    const amount = convertAmountToNumber(donationItem.amount);
    const description = `${donationItem.name} Donation - ISKCON Bhusawal Temple`;
    
    const upiLink = generateBankTransferLink(amount, description);
    window.open(upiLink, '_blank');
  };

  const handleCustomDonation = () => {
    if (customAmount && customAmount > 0) {
      const description = "Voluntary Donation - ISKCON Bhusawal Temple";
      const upiLink = generateBankTransferLink(customAmount, description);
      window.open(upiLink, '_blank');
    } else {
      alert('कृपया वैध राशि दर्ज करें');
    }
  };

  const handleManualTransfer = () => {
    const bankDetails = `बैंक: AXIS BANK
खाता संख्या: 037322010400054
खाता धारक: INTERNATIONAL SOCIETY FOR KRISHNA CONSCIOUSNESS
IFSC: UTIB0001040
शाखा: BHUSAWAL
UPI ID: 037322010400054@axisbank`;
    
    navigator.clipboard.writeText(bankDetails);
    alert('बैंक विवरण कॉपी किए गए! 🙏');
  };

  return (
    <section className="bg-gradient-to-b from-khaki-50 to-khaki-100 min-h-screen py-6 px-4 sm:py-8 sm:px-6 lg:py-12 lg:px-8 relative overflow-hidden">
      {/* Spiritual Background Elements */}
      <div className="absolute inset-0 opacity-5 sm:opacity-10">
        <div className="absolute top-4 left-4 text-4xl sm:text-6xl">🕉️</div>
        <div className="absolute top-8 right-4 text-3xl sm:text-4xl sm:top-20 sm:right-20">🙏</div>
        <div className="absolute bottom-16 left-4 text-4xl sm:text-5xl sm:bottom-20 sm:left-20">🪷</div>
        <div className="absolute bottom-4 right-4 text-4xl sm:text-6xl">☸️</div>
      </div>

      {/* Header with Spiritual Design */}
      <div className="text-center mb-8 sm:mb-12 relative">
        <div className="inline-block bg-khaki-200 rounded-full p-3 sm:p-4 mb-3 sm:mb-4 shadow-lg">
          <span className="text-3xl sm:text-4xl">🛕</span>
        </div>
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-serif text-khaki-900 mb-3 sm:mb-4 relative">
          <span className="border-b-2 sm:border-b-4 border-khaki-600 pb-1 sm:pb-2 inline-block">
            मंदिर निर्माण में योगदान करें
          </span>
        </h1>
      </div>

      {/* Donation Brochure Images */}
      <div className="flex flex-col items-center space-y-4 sm:space-y-8 mb-8 sm:mb-16 relative">
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl p-1 sm:p-2 border border-khaki-300 sm:border-2">
          <img
            src={d3}
            alt="Donation Brochure Page 1"
            className="rounded-lg sm:rounded-xl w-full"
          />
        </div>
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl p-1 sm:p-2 border border-khaki-300 sm:border-2">
          <img
            src={d2}
            alt="Donation Brochure Page 2"
            className="rounded-lg sm:rounded-xl w-full"
          />
        </div>
      </div>

      {/* Donation Tables */}
      <div className="mt-8 sm:mt-16 max-w-6xl mx-auto relative">
        {/* Decorative Divider */}
        <div className="flex items-center justify-center mb-8 sm:mb-12">
          <div className="h-1 bg-khaki-300 flex-1"></div>
          <div className="mx-2 sm:mx-4">
            <span className="text-2xl sm:text-3xl">🪷</span>
          </div>
          <div className="h-1 bg-khaki-300 flex-1"></div>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-khaki-900 text-center mb-8 sm:mb-12">
          <span className="bg-khaki-200 px-4 py-2 sm:px-6 sm:py-3 rounded-full shadow-inner text-sm sm:text-base lg:text-lg">
            दान विकल्प
          </span>
        </h2>
        
        {donationCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-8 sm:mb-16">
            <div className="text-center mb-6 sm:mb-8">
              <span className="text-xl sm:text-2xl">✨</span>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif text-khaki-800 inline-block mx-2 sm:mx-4 bg-khaki-200 px-3 py-1 sm:px-6 sm:py-2 rounded-lg shadow">
                {category.category}
              </h3>
              <span className="text-xl sm:text-2xl">✨</span>
            </div>
            
            <div className="overflow-x-auto -mx-2 sm:mx-0">
              <div className="min-w-full bg-khaki-50 rounded-xl sm:rounded-2xl shadow-lg overflow-hidden border border-khaki-300 sm:border-2">
                <table className="min-w-full">
                  <thead className="bg-khaki-700 text-khaki-50">
                    <tr>
                      <th className="py-3 px-3 sm:py-4 sm:px-4 lg:py-5 lg:px-6 text-left font-serif text-sm sm:text-base lg:text-lg">
                        <span className="flex items-center">
                          <span className="mr-1 sm:mr-2">📜</span>
                          <span className="hidden sm:inline">दान का प्रकार</span>
                          <span className="sm:hidden">प्रकार</span>
                        </span>
                      </th>
                      <th className="py-3 px-3 sm:py-4 sm:px-4 lg:py-5 lg:px-6 text-left font-serif text-sm sm:text-base lg:text-lg">
                        <span className="flex items-center">
                          <span className="mr-1 sm:mr-2">💰</span>
                          राशि
                        </span>
                      </th>
                      <th className="py-3 px-3 sm:py-4 sm:px-4 lg:py-5 lg:px-6 text-center font-serif text-sm sm:text-base lg:text-lg">
                        <span className="flex items-center justify-center">
                          <span className="mr-1 sm:mr-2">🔄</span>
                          <span className="hidden sm:inline">कार्यवाही</span>
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-khaki-200">
                    {category.items.map((item, index) => (
                      <tr 
                        key={index} 
                        className={`hover:bg-khaki-100 transition-all duration-300 ${
                          index % 2 === 0 ? 'bg-khaki-50' : 'bg-khaki-75'
                        }`}
                      >
                        <td className="py-3 px-3 sm:py-4 sm:px-4 lg:py-5 lg:px-6 font-medium text-khaki-900 text-sm sm:text-base lg:text-lg">
                          <div className="flex items-center">
                            <span className="text-lg sm:text-xl lg:text-2xl mr-2 sm:mr-3"></span>
                            <span className="break-words">{item.name}</span>
                          </div>
                        </td>
                        <td className="py-3 px-3 sm:py-4 sm:px-4 lg:py-5 lg:px-6 font-bold text-green-700 text-sm sm:text-base lg:text-xl whitespace-nowrap">
                          <div className="flex items-center">
                            <span className="text-lg sm:text-xl lg:text-2xl mr-1 sm:mr-2"></span>
                            ₹ {item.amount}
                          </div>
                        </td>
                        <td className="py-3 px-3 sm:py-4 sm:px-4 lg:py-5 lg:px-6 text-center">
                          <button
                            onClick={() => handleDonationClick(item)}
                            className="bg-khaki-600 hover:bg-khaki-700 text-khaki-50 font-semibold px-3 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-3 rounded-lg sm:rounded-xl shadow transition-all transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-1 sm:space-x-2 lg:space-x-3 border border-khaki-500 sm:border-2 text-xs sm:text-sm lg:text-base w-full sm:w-auto"
                          >
                            <span>UPI से दान करें</span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ))}

        {/* Custom Amount Donation - Spiritual Card */}
        <div className="bg-gradient-to-br from-khaki-200 to-khaki-300 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl p-6 sm:p-8 lg:p-10 mt-8 sm:mt-12 border-2 sm:border-4 border-khaki-400 relative overflow-hidden">
          {/* Decorative corner elements */}
          <div className="absolute top-2 left-2 text-lg sm:text-xl lg:text-2xl text-khaki-600">🪷</div>
          <div className="absolute top-2 right-2 text-lg sm:text-xl lg:text-2xl text-khaki-600">🪷</div>
          <div className="absolute bottom-2 left-2 text-lg sm:text-xl lg:text-2xl text-khaki-600">🪷</div>
          <div className="absolute bottom-2 right-2 text-lg sm:text-xl lg:text-2xl text-khaki-600">🪷</div>
          
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif text-khaki-900 mb-4 sm:mb-6 text-center">
            <span className="bg-khaki-100 px-4 py-2 sm:px-6 sm:py-3 rounded-full shadow-inner text-sm sm:text-base">
              स्वैच्छिक दान 🙏
            </span>
          </h3>
          <p className="text-khaki-700 text-center mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg font-light">
            आप अपनी इच्छानुसार कोई भी राशि दान कर सकते हैं
          </p>
          
          <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row items-center justify-center sm:space-x-4 lg:space-x-6">
            <div className="w-full sm:flex-1 max-w-md">
              <div className="relative">
                <input
                  type="number"
                  placeholder="दान राशि दर्ज करें (₹)"
                  className="w-full px-4 py-3 sm:px-6 sm:py-4 border-2 sm:border-4 border-khaki-400 rounded-xl sm:rounded-2xl focus:outline-none focus:border-khaki-600 text-base sm:text-xl bg-khaki-100 text-khaki-900 placeholder-khaki-500 shadow-inner"
                  min="1"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                />
                <span className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 text-xl sm:text-2xl">💰</span>
              </div>
            </div>
            <button
              onClick={handleCustomDonation}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-4 rounded-xl sm:rounded-2xl shadow-lg transition-all transform hover:scale-105 hover:shadow-xl flex items-center space-x-2 sm:space-x-3 lg:space-x-4 border-2 sm:border-4 border-green-500 w-full sm:w-auto justify-center"
            >
              <span className="text-xl sm:text-2xl">🌺</span>
              <span className="text-sm sm:text-base lg:text-xl">स्वैच्छिक दान करें</span>
              <span className="text-xl sm:text-2xl">🕉️</span>
            </button>
          </div>
        </div>

        {/* Bank Transfer Section - Spiritual Design */}
        <div className="mt-8 sm:mt-12 bg-khaki-200 border-2 sm:border-4 border-khaki-400 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg sm:shadow-2xl">
          <h4 className="text-lg sm:text-xl lg:text-2xl font-serif text-khaki-900 mb-4 sm:mb-6 text-center">
            <span className="flex items-center justify-center space-x-2 sm:space-x-3">
              <span className="text-2xl sm:text-3xl">🏛️</span>
              <span className="bg-khaki-300 px-3 py-1 sm:px-4 sm:py-2 lg:px-6 lg:py-2 rounded-full text-sm sm:text-base">
                सीधे बैंक खाते में स्थानांतरण
              </span>
              <span className="text-2xl sm:text-3xl">💒</span>
            </span>
          </h4>
          
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
            <div className="bg-khaki-100 p-4 sm:p-6 rounded-lg sm:rounded-xl border border-khaki-300 sm:border-2 shadow-inner">
              <h5 className="font-serif text-khaki-800 text-lg sm:text-xl mb-3 sm:mb-4 flex items-center">
                <span className="mr-2">📋</span>
                बैंक विवरण:
              </h5>
              <div className="space-y-2 sm:space-y-3 text-khaki-700 text-sm sm:text-base">
                <p className="flex items-center"><span className="mr-2">🏦</span><strong>बैंक:</strong> AXIS BANK</p>
                <p className="flex items-center"><span className="mr-2">🔢</span><strong>खाता संख्या:</strong> 037322010400054</p>
                <p className="flex items-center"><span className="mr-2">👤</span><strong>खाता धारक:</strong> INTERNATIONAL SOCIETY FOR KRISHNA CONSCIOUSNESS</p>
                <p className="flex items-center"><span className="mr-2">🏷️</span><strong>IFSC कोड:</strong> UTIB0001040</p>
                <p className="flex items-center"><span className="mr-2">📍</span><strong>शाखा:</strong> BHUSAWAL</p>
                <p className="flex items-center"><span className="mr-2">📱</span><strong>UPI ID:</strong> 037322010400054@axisbank</p>
              </div>
            </div>
            
            <div className="flex flex-col justify-center space-y-4 sm:space-y-6">
              <button
                onClick={handleManualTransfer}
                className="bg-khaki-600 hover:bg-khaki-700 text-khaki-50 font-semibold px-4 py-3 sm:px-6 sm:py-4 lg:px-8 lg:py-4 rounded-lg sm:rounded-xl shadow-lg transition-all transform hover:scale-105 flex items-center justify-center space-x-2 sm:space-x-3 border border-khaki-500 sm:border-2 text-sm sm:text-base lg:text-lg"
              >
                <span className="text-xl sm:text-2xl">📑</span>
                <span>बैंक विवरण कॉपी करें</span>
              </button>
              <p className="text-khaki-600 text-center text-xs sm:text-sm font-light">
                उपरोक्त विवरण का उपयोग करके किसी भी UPI ऐप या नेट बैंकिंग के माध्यम से सीधे खाते में स्थानांतरण करें
              </p>
            </div>
          </div>
        </div>

        {/* Spiritual Instructions */}
        <div className="mt-8 sm:mt-12 bg-khaki-100 border-2 sm:border-4 border-khaki-300 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8">
          <h4 className="text-lg sm:text-xl font-serif text-khaki-800 mb-4 sm:mb-6 text-center flex items-center justify-center">
            <span className="text-xl sm:text-2xl mr-2 sm:mr-3">📿</span>
            दान करने के लिए निर्देश
            <span className="text-xl sm:text-2xl ml-2 sm:ml-3">🪬</span>
          </h4>
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 text-khaki-700 text-sm sm:text-base">
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start"><span className="text-lg sm:text-xl mr-2 sm:mr-3 mt-0.5">📱</span>किसी भी UPI ऐप का उपयोग करें</li>
              <li className="flex items-start"><span className="text-lg sm:text-xl mr-2 sm:mr-3 mt-0.5">🔄</span>बटन क्लिक करने के बाद UPI ऐप खुलेगा</li>
              <li className="flex items-start"><span className="text-lg sm:text-xl mr-2 sm:mr-3 mt-0.5">💫</span>दान राशि स्वचालित रूप से भर जाएगी</li>
            </ul>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start"><span className="text-lg sm:text-xl mr-2 sm:mr-3 mt-0.5">🏦</span>भुगतान सीधे मंदिर के खाते में जाएगा</li>
              <li className="flex items-start"><span className="text-lg sm:text-xl mr-2 sm:mr-3 mt-0.5">🙌</span>आपका दान पुण्य का कारण बनेगा</li>
              <li className="flex items-start"><span className="text-lg sm:text-xl mr-2 sm:mr-3 mt-0.5">🕉️</span>हरे कृष्ण</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Contact Information - Spiritual Footer */}
      <div className="mt-8 sm:mt-12 text-center bg-khaki-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto border-2 sm:border-4 border-khaki-300 shadow-lg">
        <h3 className="text-lg sm:text-xl lg:text-2xl font-serif text-khaki-900 mb-4 sm:mb-6 flex items-center justify-center">
          <span className="text-xl sm:text-2xl lg:text-3xl mr-2 sm:mr-3">📞</span>
          संपर्क करें
          <span className="text-xl sm:text-2xl lg:text-3xl ml-2 sm:ml-3">✉️</span>
        </h3>
        <div className="grid gap-3 sm:gap-4 md:grid-cols-1 lg:grid-cols-3 text-khaki-700 text-sm sm:text-base">
          <p className="flex items-center justify-center">
            <span className="text-lg sm:text-xl mr-1 sm:mr-2">📱</span>
            <strong>फोन:</strong> 9011295877, 776703798
          </p>
          <p className="flex items-center justify-center">
            <span className="text-lg sm:text-xl mr-1 sm:mr-2">📧</span>
            <strong>ईमेल:</strong> infoiskcon.bhusawal@gmail.com
          </p>
          <p className="flex items-center justify-center font-semibold">
            <span className="text-lg sm:text-xl mr-1 sm:mr-2">💳</span>
            <strong>UPI ID:</strong> 037322010400054@axisbank
          </p>
        </div>
      </div>

      {/* Final Spiritual Blessing */}
      <div className="text-center mt-8 sm:mt-12 mb-6 sm:mb-8">
        <p className="text-khaki-700 text-sm sm:text-base lg:text-lg font-light">
          🌺 हरे कृष्ण हरे कृष्ण, कृष्ण कृष्ण हरे हरे 🌺<br/>
          🌸 हरे राम हरे राम, राम राम हरे हरे 🌸
        </p>
      </div>
    </section>
  );
}

export default Donation;