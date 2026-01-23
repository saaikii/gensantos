import React, { useState } from 'react';
import { MapPin, Star, Users, X, Check, Search, Cloud, Sun, Utensils, Mountain, Landmark, Factory, Trophy, Thermometer } from 'lucide-react';
import { TouristSpot } from '../types';

const allSpots: TouristSpot[] = [
  {
    id: '1',
    name: "General Santos Fish Port Complex",
    category: "Industrial",
    description: "Witness the 'Tuna Capital' in action at the Philippines' second-largest fish port. Best visited early morning (5 AM) to see the massive tuna catch.",
    location: "Brgy. Tambler",
    image: "https://picsum.photos/id/400/800/600", // Plant/Nature vibe
    price: "₱50 Entrance",
    rating: 4.8
  },
  {
    id: '2',
    name: "Sanchez Peak",
    category: "Nature",
    description: "The highest point in the city offering a breathtaking 360-degree view of GenSan, Mt. Matutum, and Sarangani Bay. Perfect for trekkers.",
    location: "Brgy. Olympog",
    image: "https://picsum.photos/id/1036/800/600", // Mountain/Snow
    price: "Free",
    rating: 4.7
  },
  {
    id: '3',
    name: "Plaza Heneral Santos",
    category: "Heritage",
    description: "The historical heart of the city featuring the statue of General Paulino Santos. A lush green space perfect for afternoon walks.",
    location: "City Center",
    image: "https://picsum.photos/id/1047/800/600", // Park/Urban
    price: "Free",
    rating: 4.5
  },
  {
    id: '4',
    name: "Sarangani Highlands",
    category: "Dining",
    description: "A garden restaurant perched on a hilltop. Experience fine dining with a majestic view of Sarangani Bay and cool mountain breeze.",
    location: "Purok Wal, Tambler",
    image: "https://picsum.photos/id/437/800/600", // Park/View
    price: "Consumable",
    rating: 4.6
  },
  {
    id: '5',
    name: "Queen Tuna Park",
    category: "Nature",
    description: "Formerly known as Lion's Beach, this improved coastal park offers fresh sea breeze and is a favorite spot for family picnics.",
    location: "Brgy. Dadiangas South",
    image: "https://picsum.photos/id/1000/800/600", // Mountain/Snow (Coastal vibe)
    price: "Free",
    rating: 4.3
  },
  {
    id: '6',
    name: "Pacman Wildcard Gym",
    category: "Sports",
    description: "Visit the training ground of the legendary Manny Pacquiao. See where the champ trains and maybe catch a glimpse of upcoming boxers.",
    location: "San Miguel St.",
    image: "https://picsum.photos/id/338/800/600", // Indoors/Gym vibe
    price: "₱100 Tour",
    rating: 4.9
  },
  // New Restaurants / Dining Entries
  {
    id: '7',
    name: "Tiongson Arcade",
    category: "Dining",
    description: "The ultimate seafood night market experience. Choose fresh seafood and have it cooked to your liking (sugba, tuwa, kilaw).",
    location: "Tiongson St., Lagao",
    image: "https://picsum.photos/id/493/800/600", // Food
    price: "₱250-500/pax",
    rating: 4.7
  },
  {
    id: '8',
    name: "Red Trellis Seafood Garden",
    category: "Dining",
    description: "Famous for its native ambiance and delicious seafood platters. A perfect place for family gatherings and tasting local flavors.",
    location: "National Highway",
    image: "https://picsum.photos/id/292/800/600", // Food/Ingredients
    price: "₱300-600/pax",
    rating: 4.5
  },
  {
    id: '9',
    name: "Aweng's Balbacuahan",
    category: "Dining",
    description: "A legendary local spot known for its 'Balbacua' - a savory slow-cooked beef stew that melts in your mouth. A must-try comfort food.",
    location: "Calumpang",
    image: "https://picsum.photos/id/225/800/600", // Pot/Cooking
    price: "₱150/meal",
    rating: 4.8
  }
];

const categories = [
  { id: 'All', label: 'All Spots', icon: <MapPin size={16} /> },
  { id: 'Nature', label: 'Nature', icon: <Mountain size={16} /> },
  { id: 'Dining', label: 'Food & Dining', icon: <Utensils size={16} /> },
  { id: 'Heritage', label: 'Heritage', icon: <Landmark size={16} /> },
  { id: 'Industrial', label: 'Industrial', icon: <Factory size={16} /> },
  { id: 'Sports', label: 'Sports', icon: <Trophy size={16} /> },
];

const Tourism: React.FC = () => {
  const [selectedSpot, setSelectedSpot] = useState<TouristSpot | null>(null);
  const [isBookingSuccess, setIsBookingSuccess] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    guests: '1'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Filter Logic
  const filteredSpots = allSpots.filter(spot => {
    const matchesCategory = activeCategory === 'All' || spot.category === activeCategory;
    const matchesSearch = spot.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         spot.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleBookClick = (spot: TouristSpot) => {
    setSelectedSpot(spot);
    setIsBookingSuccess(false);
    setFormData({ name: '', email: '', date: '', guests: '1' });
  };

  const handleClose = () => {
    setSelectedSpot(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsBookingSuccess(true);
    }, 1500);
  };

  return (
    <div className="pt-36 bg-gray-50 min-h-screen pb-20">
      {/* Page Header with Weather Widget */}
      <div className="bg-blue-900 text-white py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        <img 
          src="https://picsum.photos/id/1015/2000/600" 
          alt="GenSan Tourism" 
          className="absolute inset-0 w-full h-full object-cover -z-10 opacity-60"
        />
        
        <div className="relative z-10 container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left max-w-2xl">
              <span className="inline-block bg-yellow-400 text-blue-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
                Travel & Leisure
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Explore GenSan</h1>
              <p className="text-xl text-blue-100">
                Discover the beauty, culture, and flavors of the Tuna Capital.
              </p>
            </div>

            {/* Weather Widget */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-white min-w-[200px] shadow-lg">
              <div className="flex items-center gap-2 text-blue-200 text-sm mb-2 font-medium uppercase tracking-wide">
                <MapPin size={14} /> Current Weather
              </div>
              <div className="flex items-center gap-4">
                <Sun className="text-yellow-400 w-12 h-12" />
                <div>
                  <div className="text-4xl font-bold">32°C</div>
                  <div className="text-blue-100">Sunny</div>
                </div>
              </div>
              <div className="mt-4 flex justify-between text-sm text-blue-200 border-t border-white/10 pt-2">
                <div className="flex items-center gap-1"><Thermometer size={14}/> High: 34°</div>
                <div className="flex items-center gap-1"><Cloud size={14}/> Low: 26°</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter / Search Bar */}
      <div className="container mx-auto px-6 -mt-8 relative z-20 mb-12">
        <div className="bg-white p-4 rounded-xl shadow-xl flex flex-col gap-4 max-w-5xl mx-auto border border-gray-100">
          
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search spots, food, or location..." 
                className="w-full pl-10 pr-4 py-3 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-3 rounded-lg font-medium whitespace-nowrap transition-all duration-200 ${
                  activeCategory === cat.id 
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20 scale-105' 
                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                }`}
              >
                {cat.icon}
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Spots Grid */}
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-6">
           <h2 className="text-2xl font-bold text-gray-800">
             {activeCategory === 'All' ? 'Popular Destinations' : `${activeCategory} Spots`}
           </h2>
           <span className="text-gray-500 text-sm">{filteredSpots.length} results found</span>
        </div>

        {filteredSpots.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSpots.map((spot) => (
              <div key={spot.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col h-full hover:-translate-y-1">
                <div className="relative h-64 overflow-hidden bg-gray-200">
                  <img 
                    src={spot.image} 
                    alt={spot.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-bold flex items-center gap-1 shadow-sm">
                    <Star size={12} className="text-yellow-500 fill-current" />
                    {spot.rating}
                  </div>
                  <div className="absolute bottom-4 left-4 bg-blue-900/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                    {spot.category}
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900 line-clamp-1">{spot.name}</h3>
                  </div>
                  
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                    <MapPin size={16} className="text-blue-500 shrink-0" />
                    <span className="truncate">{spot.location}</span>
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
                    {spot.description}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-50 mt-auto">
                    <div className="text-blue-900 font-bold text-sm">
                      {spot.price}
                    </div>
                    <button 
                      onClick={() => handleBookClick(spot)}
                      className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold px-6 py-2 rounded-full transition-colors text-sm shadow-sm hover:shadow-md"
                    >
                      {spot.category === 'Dining' ? 'Reserve Table' : 'Book Visit'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border border-gray-100">
            <div className="inline-block p-4 rounded-full bg-gray-50 text-gray-400 mb-4">
              <Search size={40} />
            </div>
            <h3 className="text-lg font-bold text-gray-900">No places found</h3>
            <p className="text-gray-500">Try adjusting your search or category filter.</p>
            <button 
              onClick={() => {setActiveCategory('All'); setSearchQuery('');}}
              className="mt-4 text-blue-600 font-medium hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>

      {/* Booking Modal */}
      {selectedSpot && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-blue-900/60 backdrop-blur-sm" onClick={handleClose}></div>
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg relative z-10 overflow-hidden animate-fade-in-up">
            
            {/* Modal Header */}
            <div className="relative h-40 bg-gray-200">
              <img 
                src={selectedSpot.image} 
                alt={selectedSpot.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-white font-bold text-2xl leading-tight">{selectedSpot.name}</h3>
                  <p className="text-white/80 text-sm flex items-center gap-1 mt-1">
                    <MapPin size={14} /> {selectedSpot.location}
                  </p>
                </div>
              </div>
              <button 
                onClick={handleClose}
                className="absolute top-4 right-4 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full backdrop-blur-sm transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              {!isBookingSuccess ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="bg-blue-50 border border-blue-100 p-3 rounded-lg text-blue-800 text-sm mb-4">
                     {selectedSpot.category === 'Dining' 
                       ? "Reserve a table for your dining experience. We will confirm availability via email." 
                       : "Fill out the form below to schedule your visit. Our tourism office will coordinate with you shortly."}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input 
                      required
                      type="text" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                      placeholder="Juan Dela Cruz"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                     <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {selectedSpot.category === 'Dining' ? 'Date & Time' : 'Date of Visit'}
                      </label>
                      <input 
                        required
                        type="date" 
                        value={formData.date}
                        onChange={(e) => setFormData({...formData, date: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                      />
                    </div>
                     <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Guests</label>
                      <div className="relative">
                        <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <select 
                          value={formData.guests}
                          onChange={(e) => setFormData({...formData, guests: e.target.value})}
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white transition-all"
                        >
                          {[1,2,3,4,5,6,7,8,9,10].map(n => (
                            <option key={n} value={n}>{n} Pax</option>
                          ))}
                          <option value="11+">11+ Pax</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input 
                      required
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                      placeholder="juan@example.com"
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 mt-6 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Processing...' : (selectedSpot.category === 'Dining' ? 'Confirm Reservation' : 'Confirm Booking')}
                  </button>
                </form>
              ) : (
                <div className="text-center py-10 animate-fade-in">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check size={32} />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">Request Sent!</h4>
                  <p className="text-gray-500 mb-8">
                    We have received your {selectedSpot.category === 'Dining' ? 'reservation' : 'booking'} request for <strong>{selectedSpot.name}</strong>. A confirmation email has been sent to <strong>{formData.email}</strong>.
                  </p>
                  <button 
                    onClick={handleClose}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold py-3 px-8 rounded-xl transition-colors"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tourism;