import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, ExternalLink, Github, Play, Pause, SkipForward, SkipBack, 
  Volume2, VolumeX, Sun, CloudRain, Wind, Droplets, Compass, CheckCircle2, 
  Calculator, ChevronRight, GraduationCap, Award, BookOpen 
} from 'lucide-react';
import { Project } from '../types';
import { PERSONAL_INFO } from '../data';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  // Interactivity for Music Player
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);
  const [trackProgress, setTrackProgress] = useState(32); // percentage
  const [currentTrack, setCurrentTrack] = useState(0);
  const audioIntervalRef = useRef<any>(null);

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => setToastMessage(null), 3200);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  const playlist = [
    { title: "Kathmandu Sunrise Loops", artist: "Aaryan", duration: "1:45" },
    { title: "Himalayan Breeze Ambient", artist: "IT Student Beats", duration: "2:10" },
    { title: "Midnight Coding Sprints", artist: "Figma Synth", duration: "1:30" }
  ];

  useEffect(() => {
    if (isPlaying) {
      audioIntervalRef.current = setInterval(() => {
        setTrackProgress((p) => {
          if (p >= 100) {
            handleNextTrack();
            return 0;
          }
          return p + 1;
        });
      }, 1000);
    } else {
      if (audioIntervalRef.current) clearInterval(audioIntervalRef.current);
    }
    return () => {
      if (audioIntervalRef.current) clearInterval(audioIntervalRef.current);
    };
  }, [isPlaying]);

  const handleNextTrack = () => {
    setCurrentTrack((prev) => (prev + 1) % playlist.length);
    setTrackProgress(0);
  };
  const handlePrevTrack = () => {
    setCurrentTrack((prev) => (prev - 1 + playlist.length) % playlist.length);
    setTrackProgress(0);
  };

  // Interactivity for Weather App UI
  const [tempUnit, setTempUnit] = useState<'C' | 'F'>('C');
  const [activeWeatherDay, setActiveWeatherDay] = useState(0);
  const localWeatherForecast = [
    { day: "Today", tempC: 24, tempF: 75, status: "Partly Sunny", icon: Sun, humidity: 45, wind: "12 km/h" },
    { day: "Sunday", tempC: 22, tempF: 71, status: "Rain Showers", icon: CloudRain, humidity: 82, wind: "18 km/h" },
    { day: "Monday", tempC: 25, tempF: 77, status: "Clear Skies", icon: Sun, humidity: 38, wind: "8 km/h" },
    { day: "Tuesday", tempC: 23, tempF: 73, status: "Mild Breeze", icon: Wind, humidity: 50, wind: "14 km/h" }
  ];

  // Interactivity for Commercial Websites Cost Estimator
  const [pagesCount, setPagesCount] = useState(5);
  const [hasCMS, setHasCMS] = useState(true);
  const [hasContactForm, setHasContactForm] = useState(true);
  const [hasSEO, setHasSEO] = useState(true);

  const calculateEstimate = () => {
    let price = pagesCount * 120;
    if (hasCMS) price += 400;
    if (hasContactForm) price += 150;
    if (hasSEO) price += 250;
    return price;
  };

  // Interactivity for EduNest LMS App
  const [lmsCompletedLessons, setLmsCompletedLessons] = useState<string[]>(['lesson-1', 'lesson-2']);
  const [quizScore, setQuizScore] = useState<number | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const lmsSyllabus = [
    { id: 'lesson-1', title: 'Intro to Mobile React components', duration: '12 mins' },
    { id: 'lesson-2', title: 'Managing Hooks & State arrays', duration: '22 mins' },
    { id: 'lesson-3', title: 'Consuming REST endpoints safely', duration: '35 mins' },
    { id: 'lesson-4', title: 'Building production Android APK bundles', duration: '40 mins' }
  ];

  const toggleLesson = (id: string) => {
    setLmsCompletedLessons(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleQuitQuiz = () => {
    setQuizScore(null);
    setSelectedAnswer(null);
  };

  const handleAnswerSubmit = () => {
    if (selectedAnswer === 1) { // option 1 is correct
      setQuizScore(100);
    } else {
      setQuizScore(0);
    }
  };

  return (
    <AnimatePresence>
      <div 
        id="project-modal-overlay" 
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-900/60 backdrop-blur-sm overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 30 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-neutral-100 flex flex-col max-h-[85vh]"
          onClick={(e) => e.stopPropagation()}
          id="project-modal-container"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between p-6 bg-neutral-50 border-b border-neutral-100 sticky top-0 z-10">
            <div>
              <span className="text-[10px] uppercase tracking-widest font-mono font-bold text-blue-600 block mb-1">Featured Build Showcase</span>
              <h3 className="font-display font-bold text-2xl text-neutral-900">{project.title}</h3>
            </div>
            
            <button 
              onClick={onClose}
              id="modal-close-btn"
              className="p-2 text-neutral-400 hover:text-neutral-800 rounded-full hover:bg-neutral-200/50 transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body Scroll Container */}
          <div className="p-6 md:p-8 space-y-8 overflow-y-auto flex-grow" id="modal-content-scroller">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Product Info Description Left side */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <h4 className="text-xs font-semibold uppercase text-neutral-400 mb-2 tracking-wide">Project Scope</h4>
                  <p className="font-sans text-neutral-600 text-sm leading-relaxed font-light">{project.longDescription}</p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 bg-neutral-100 text-neutral-700 font-mono text-[11px] rounded-md border border-neutral-250">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Simulated Repo actions */}
                <div className="flex items-center gap-3 pt-4 border-t border-neutral-100">
                  <a 
                    href={project.title === 'Figma' ? '#' : PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-neutral-900 text-white rounded-xl text-xs font-semibold hover:bg-neutral-800 transition cursor-pointer"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Repository</span>
                  </a>
                  <button 
                    onClick={() => setToastMessage(`Success: Aaryan's live deployment for ${project.title} has launched securely in your sandbox!`)}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 border border-neutral-250 hover:bg-neutral-50 rounded-xl text-xs font-semibold text-neutral-700 transition cursor-pointer"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Launch Sandbox</span>
                  </button>
                </div>
              </div>

              {/* Interactive Module Workshop Right side */}
              <div className="lg:col-span-7 bg-neutral-50/50 p-6 md:p-8 rounded-2xl border border-neutral-200 flex flex-col justify-between" id="modal-widget-panel">
                <div className="mb-4">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50/60 border border-blue-100 text-blue-700 text-[10px] font-mono rounded-full font-bold uppercase tracking-wider mb-4">
                    <span>⚡ Sandbox Mode: Click elements to test live state</span>
                  </div>
                </div>

                {/* Dynamic Workspace based on project */}
                {project.demoType === 'music' && (
                  <div className="bg-neutral-900 text-white rounded-2xl p-6 shadow-xl border border-neutral-800 text-left space-y-6" id="demo-music-box">
                    <div className="flex items-center gap-4">
                      {/* Skeuomorphic Cover */}
                      <div className="w-16 h-16 bg-gradient-to-tr from-blue-600 to-indigo-800 rounded-xl flex items-center justify-center text-white font-display font-medium text-xs text-center shadow-lg relative overflow-hidden group">
                        <div className="absolute inset-0 bg-black/10 transition-transform group-hover:scale-110"></div>
                        <span>LOOP</span>
                        {isPlaying && (
                          <div className="absolute bottom-1 right-1 flex items-end gap-1 px-1 py-0.5 rounded bg-black/30 backdrop-blur-sm z-10">
                            <span className="w-1.5 h-3 bg-blue-400 rounded-full animate-pulse"></span>
                            <span className="w-1.5 h-4 bg-emerald-400 rounded-full animate-bounce"></span>
                          </div>
                        )}
                      </div>
                      <div className="flex-grow min-w-0">
                        <h5 className="font-display font-bold text-sm text-white truncate">{playlist[currentTrack].title}</h5>
                        <p className="font-sans text-[11px] text-gray-400 truncate">{playlist[currentTrack].artist}</p>
                      </div>
                    </div>

                    {/* Progress Slider */}
                    <div className="space-y-1.5">
                      <div className="w-full h-1 bg-gray-800 rounded-full relative cursor-pointer group" onClick={(e) => {
                        const bounds = e.currentTarget.getBoundingClientRect();
                        const percent = ((e.clientX - bounds.left) / bounds.width) * 100;
                        setTrackProgress(Math.round(percent));
                      }}>
                        <div 
                          className="absolute h-full bg-blue-500 rounded-full group-hover:bg-blue-400" 
                          style={{ width: `${trackProgress}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-[10px] font-mono text-gray-500">
                        <span>0:{(Math.floor((trackProgress / 100) * 80)).toString().padStart(2, '0')}</span>
                        <span>{playlist[currentTrack].duration}</span>
                      </div>
                    </div>

                    {/* Controls Row */}
                    <div className="flex items-center justify-between">
                      <button onClick={handlePrevTrack} className="p-2 hover:bg-white/10 rounded-full transition text-gray-400 hover:text-white cursor-pointer"><SkipBack className="w-4 h-4" /></button>
                      <button 
                        onClick={() => setIsPlaying(!isPlaying)} 
                        className={`p-3.5 rounded-full transition cursor-pointer ${isPlaying ? 'bg-white text-black hover:bg-neutral-200' : 'bg-blue-600 text-white hover:bg-blue-500'}`}
                        id="demo-music-play-toggle"
                      >
                        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                      </button>
                      <button onClick={handleNextTrack} className="p-2 hover:bg-white/10 rounded-full transition text-gray-400 hover:text-white cursor-pointer"><SkipForward className="w-4 h-4" /></button>

                      {/* Mute toggle and Volume */}
                      <div className="flex items-center gap-1.5">
                        <button onClick={() => setIsMuted(!isMuted)} className="text-gray-400 hover:text-white transition cursor-pointer">
                          {isMuted || volume === 0 ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                        </button>
                        <input 
                          type="range" 
                          min="0" 
                          max="1" 
                          step="0.1" 
                          value={isMuted ? 0 : volume}
                          onChange={(e) => {
                            setVolume(parseFloat(e.target.value));
                            if (isMuted) setIsMuted(false);
                          }}
                          className="w-16 accent-blue-500 bg-gray-800"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {project.demoType === 'weather' && (
                  <div className="bg-neutral-950 text-white rounded-2xl p-6 shadow-xl border border-blue-950/40 text-left space-y-6" id="demo-weather-box">
                    <div className="flex items-center justify-between">
                      <div>
                        <h5 className="font-display font-medium text-sm text-gray-400">Atmospheric Data Center</h5>
                        <h4 className="font-display font-bold text-lg text-white">Kathmandu, NP</h4>
                      </div>
                      {/* Unit switcher */}
                      <button 
                        onClick={() => setTempUnit(tempUnit === 'C' ? 'F' : 'C')}
                        className="px-3 py-1 border border-neutral-800 rounded-full hover:bg-neutral-900 hover:text-white text-[11px] font-mono text-gray-400 transition font-bold uppercase cursor-pointer"
                        id="demo-weather-unit-toggle"
                      >
                        Display Mode: °{tempUnit}
                      </button>
                    </div>

                    {/* Big Current Info */}
                    <div className="grid grid-cols-2 gap-4 items-center bg-blue-950/20 p-4 rounded-xl border border-blue-900/10">
                      <div>
                        <div className="flex items-baseline">
                          <span className="font-display font-bold text-5xl tracking-tighter">
                            {tempUnit === 'C' ? localWeatherForecast[activeWeatherDay].tempC : localWeatherForecast[activeWeatherDay].tempF}
                          </span>
                          <span className="font-display font-medium text-2xl text-blue-400">°</span>
                        </div>
                        <p className="font-sans text-xs text-neutral-400 mt-1">{localWeatherForecast[activeWeatherDay].status}</p>
                      </div>

                      <div className="space-y-2 text-xs text-neutral-400 font-sans border-l border-neutral-800/80 pl-4">
                        <div className="flex items-center gap-1.5">
                          <Droplets className="w-3.5 h-3.5 text-blue-400" />
                          <span>Humidity: {localWeatherForecast[activeWeatherDay].humidity}%</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Wind className="w-3.5 h-3.5 text-blue-400" />
                          <span>Wind: {localWeatherForecast[activeWeatherDay].wind}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Compass className="w-3.5 h-3.5 text-blue-400" />
                          <span>Air Quality: Optimal</span>
                        </div>
                      </div>
                    </div>

                    {/* Forecast days */}
                    <div className="grid grid-cols-4 gap-2">
                      {localWeatherForecast.map((fc, i) => {
                        const Icon = fc.icon;
                        const isActive = activeWeatherDay === i;
                        return (
                          <div 
                            key={fc.day}
                            onClick={() => setActiveWeatherDay(i)}
                            className={`p-2.5 rounded-xl text-center cursor-pointer border transition-all ${
                              isActive 
                                ? 'bg-blue-600/90 border-blue-500 text-white' 
                                : 'bg-neutral-900 border-neutral-800 hover:border-neutral-700 text-gray-400'
                            }`}
                          >
                            <span className="block text-[10px] font-sans font-medium mb-1.5">{fc.day}</span>
                            <Icon className={`w-5 h-5 mx-auto mb-1 text-center ${isActive ? 'text-white' : 'text-blue-400'}`} />
                            <span className={`block text-[11px] font-serif font-bold ${isActive ? 'text-white' : 'text-neutral-200'}`}>
                              {tempUnit === 'C' ? fc.tempC : fc.tempF}°
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {project.demoType === 'commercial' && (
                  <div className="bg-white text-neutral-950 rounded-2xl p-6 shadow-md border border-neutral-200 text-left space-y-6" id="demo-commercial-box">
                    <div className="flex items-center gap-2 mb-2">
                      <Calculator className="w-5 h-5 text-blue-600" />
                      <h4 className="font-display font-bold text-base text-neutral-900">Custom Project Cost Estimator</h4>
                    </div>

                    {/* Interactive inputs */}
                    <div className="space-y-4 text-xs font-sans text-neutral-600">
                      <div className="space-y-1.5">
                        <div className="flex justify-between font-medium">
                          <span>Number of custom web pages:</span>
                          <span className="font-mono text-blue-600 font-bold">{pagesCount} pages</span>
                        </div>
                        <input 
                          type="range" 
                          min="1" 
                          max="15" 
                          value={pagesCount}
                          onChange={(e) => setPagesCount(parseInt(e.target.value))}
                          className="w-full accent-blue-600 inline-block bg-neutral-200 h-1 rounded"
                        />
                      </div>

                      {/* Check options */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                        <label className="flex items-center gap-2 p-2.5 rounded-lg border border-neutral-100 hover:bg-neutral-50 cursor-pointer select-none">
                          <input 
                            type="checkbox" 
                            checked={hasCMS} 
                            onChange={(e) => setHasCMS(e.target.checked)}
                            className="accent-blue-600 h-4 w-4"
                          />
                          <div>
                            <span className="block font-medium text-neutral-800">Has CMS</span>
                            <span className="block text-[9px] text-neutral-400">Self edit blogs</span>
                          </div>
                        </label>

                        <label className="flex items-center gap-2 p-2.5 rounded-lg border border-neutral-100 hover:bg-neutral-50 cursor-pointer select-none">
                          <input 
                            type="checkbox" 
                            checked={hasContactForm} 
                            onChange={(e) => setHasContactForm(e.target.checked)}
                            className="accent-blue-600 h-4 w-4"
                          />
                          <div>
                            <span className="block font-medium text-neutral-800">Secure DB</span>
                            <span className="block text-[9px] text-neutral-400">Leads storage</span>
                          </div>
                        </label>

                        <label className="flex items-center gap-2 p-2.5 rounded-lg border border-neutral-100 hover:bg-neutral-50 cursor-pointer select-none">
                          <input 
                            type="checkbox" 
                            checked={hasSEO} 
                            onChange={(e) => setHasSEO(e.target.checked)}
                            className="accent-blue-600 h-4 w-4"
                          />
                          <div>
                            <span className="block font-medium text-neutral-800">Figma Proto</span>
                            <span className="block text-[9px] text-neutral-400">High-Fid design</span>
                          </div>
                        </label>
                      </div>
                    </div>

                    {/* Result Estimate */}
                    <div className="flex flex-col sm:flex-row items-center justify-between p-4 bg-neutral-50 rounded-xl border border-neutral-100 gap-4 mt-2">
                      <div>
                        <span className="text-[10px] uppercase font-mono tracking-wider text-neutral-400 block mb-0.5">Budgetary Calculation</span>
                        <div className="flex items-baseline gap-1">
                          <span className="text-3xl font-display font-extrabold text-neutral-900">${calculateEstimate()}</span>
                          <span className="text-[11px] font-sans text-neutral-400">USD estimate</span>
                        </div>
                      </div>
                      <button 
                        onClick={() => {
                          setToastMessage("Drafting custom project inquiry in your system email client...");
                          setTimeout(() => {
                            window.location.href = `mailto:${PERSONAL_INFO.email}?subject=Inquiry: Web development estimation for $${calculateEstimate()}`;
                          }, 1000);
                        }}
                        className="w-full sm:w-auto px-4 py-2.5 bg-blue-600 text-white rounded-lg text-xs font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-1 leading-normal cursor-pointer"
                      >
                        <span>Rent developer</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}

                {project.demoType === 'lms' && (
                  <div className="bg-white text-neutral-950 rounded-2xl p-5 shadow-md border border-neutral-200 text-left space-y-5" id="demo-lms-box">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <GraduationCap className="w-5 h-5 text-emerald-600" />
                        <h4 className="font-display font-bold text-base text-neutral-900">EduNest Syllabus & Study Logs</h4>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 bg-emerald-50 text-emerald-700 rounded-full border border-emerald-100 font-bold">
                        Progress: {Math.round((lmsCompletedLessons.length / lmsSyllabus.length) * 100)}%
                      </span>
                    </div>

                    {/* Syllabus selector lists */}
                    <div className="space-y-2 max-h-40 overflow-y-auto pr-1">
                      {lmsSyllabus.map(lesson => {
                        const isDone = lmsCompletedLessons.includes(lesson.id);
                        return (
                          <div 
                            key={lesson.id}
                            onClick={() => toggleLesson(lesson.id)}
                            className={`flex items-center justify-between p-2.5 rounded-xl border text-xs cursor-pointer select-none transition-colors ${
                              isDone 
                                ? 'bg-emerald-50/50 border-emerald-100 text-emerald-900 font-medium' 
                                : 'bg-neutral-50/50 border-neutral-100 hover:bg-white text-neutral-600'
                            }`}
                          >
                            <div className="flex items-center gap-2.5">
                              <CheckCircle2 className={`w-4 h-4 transition-colors ${isDone ? 'text-emerald-500 fill-emerald-100' : 'text-neutral-300'}`} />
                              <span>{lesson.title}</span>
                            </div>
                            <span className="text-[10px] text-neutral-400 font-mono">{lesson.duration}</span>
                          </div>
                        );
                      })}
                    </div>

                    {/* Quick interactive test block */}
                    <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-200/50">
                      {quizScore === null ? (
                        <div className="space-y-3" id="lms-quiz-start">
                          <div className="flex items-center gap-1.5 text-xs text-neutral-500">
                            <BookOpen className="w-3.5 h-3.5 text-emerald-500" />
                            <span className="font-semibold">Take dynamic micro-quiz:</span>
                          </div>
                          <p className="font-sans text-[11px] text-neutral-700">Which hook manages state variables across React loops, forcing UI re-mounts?</p>
                          <div className="grid grid-cols-2 gap-2 text-[10px]">
                            {[
                              "useCallback()",
                              "useState()",
                              "useMemo()",
                              "useRef()"
                            ].map((opt, i) => (
                              <button 
                                key={opt}
                                onClick={() => setSelectedAnswer(i)}
                                className={`p-2 rounded-lg text-left border transition ${
                                  selectedAnswer === i 
                                    ? 'border-emerald-500 bg-emerald-50 text-emerald-800 font-bold' 
                                    : 'border-neutral-200 hover:border-neutral-400 text-neutral-600'
                                }`}
                              >
                                {opt}
                              </button>
                            ))}
                          </div>
                          {selectedAnswer !== null && (
                            <button 
                              onClick={handleAnswerSubmit}
                              className="w-full py-1.5 bg-emerald-600 text-white rounded-lg text-[11px] font-semibold hover:bg-emerald-700 cursor-pointer"
                            >
                              Submit Answer
                            </button>
                          )}
                        </div>
                      ) : (
                        <div className="text-center py-2 space-y-2" id="lms-quiz-result">
                          <Award className={`w-8 h-8 mx-auto ${quizScore === 100 ? 'text-yellow-500 animate-bounce' : 'text-gray-400'}`} />
                          <p className="font-display font-semibold text-xs text-neutral-800">
                            {quizScore === 100 ? "Superb! Correct Answer 🎯" : "Oops! Syntactic error."}
                          </p>
                          <p className="text-[10px] text-neutral-400 max-w-xs mx-auto">
                            {quizScore === 100 
                              ? "You clearly understand component rendering lifecycles! Good job." 
                              : "The useState() hook manages basic variables, triggering structural refreshes on updating state."}
                          </p>
                          <button 
                            onClick={handleQuitQuiz} 
                            className="px-3 py-1 bg-neutral-200 text-neutral-700 rounded-full text-[10px] hover:bg-neutral-300 font-medium cursor-pointer"
                          >
                            Retake Quiz
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Custom Floating Toast Alert */}
          <AnimatePresence>
            {toastMessage && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95, x: "-50%" }}
                animate={{ opacity: 1, y: 0, scale: 1, x: "-50%" }}
                exit={{ opacity: 0, y: 15, scale: 0.95, x: "-50%" }}
                transition={{ duration: 0.25 }}
                className="absolute bottom-6 left-1/2 bg-neutral-900 border border-neutral-800 text-white text-xs font-medium px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2.5 z-50 max-w-[90%] sm:max-w-md pointer-events-auto"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
                <span className="leading-snug text-left">{toastMessage}</span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
