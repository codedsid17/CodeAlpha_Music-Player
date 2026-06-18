const NOTE_FREQ = {
  'REST': 0,
  'A2': 110.00, 'B2': 123.47, 'C3': 130.81, 'D3': 146.83, 'E3': 164.81, 'F3': 174.61, 'G3': 196.00,
  'A3': 220.00, 'B3': 246.94, 'C4': 261.63, 'D4': 293.66, 'E4': 329.63, 'F4': 349.23, 'G4': 392.00,
  'A4': 440.00, 'B4': 493.88, 'C5': 523.25, 'D5': 587.33, 'E5': 659.25, 'F5': 698.46, 'G5': 783.99,
  'A5': 880.00, 'B5': 987.77, 'C6': 1046.50
};
NOTE_FREQ['Eb5'] = 622.25;
NOTE_FREQ['Bb5'] = 932.33;
NOTE_FREQ['Bb4'] = 466.16;
NOTE_FREQ['Eb3'] = 155.56;
NOTE_FREQ['F#5'] = 739.99;
NOTE_FREQ['F#4'] = 369.99;
NOTE_FREQ['G#3'] = 207.65;
NOTE_FREQ['F#3'] = 185.00;
NOTE_FREQ['G#2'] = 103.83;
NOTE_FREQ['C#4'] = 277.18;
NOTE_FREQ['D#4'] = 311.13;
NOTE_FREQ['G#4'] = 415.30;
NOTE_FREQ['A#3'] = 233.08;
NOTE_FREQ['D#3'] = 155.56;
NOTE_FREQ['G#5'] = 830.61;
NOTE_FREQ['Bb2'] = 116.54;
NOTE_FREQ['Ab4'] = 415.30;
NOTE_FREQ['G2'] = 98.00;
NOTE_FREQ['F2'] = 87.31;
NOTE_FREQ['E2'] = 82.41;
NOTE_FREQ['D2'] = 73.42;
NOTE_FREQ['Eb4'] = 311.13;

const tracks = [
  {
    id: 1,
    title: "The Suffering",
    artist: "Emily Bryan",
    genre: "Classic",
    duration: 215,
    likes: 392,
    cover: "assets/daily_chaos.png",
    tempo: 115,
    synthType: 'triangle',
    melody: [
      'A4', 'C5', 'E5', 'C5', 'G4', 'B4', 'D5', 'B4',
      'F4', 'A4', 'C5', 'A4', 'E4', 'G4', 'B4', 'G4',
      'A4', 'C5', 'E5', 'C5', 'G4', 'B4', 'D5', 'B4',
      'F4', 'A4', 'C5', 'A4', 'E5', 'D5', 'C5', 'B4'
    ],
    bass: ['A2', 'A2', 'G2', 'G2', 'F2', 'F2', 'E2', 'E2'],
    drums: [1, 0, 2, 0, 1, 1, 2, 0]
  },
  {
    id: 2,
    title: "Daily Chaos",
    artist: "Emily Bryan",
    genre: "Classic",
    duration: 180,
    likes: 254,
    cover: "assets/daily_chaos.png",
    tempo: 135,
    synthType: 'square',
    melody: [
      'C5', 'Eb5', 'G5', 'F5', 'G5', 'Bb5', 'G5', 'F5',
      'Eb5', 'D5', 'C5', 'D5', 'G4', 'C5', 'Eb5', 'G5',
      'Bb5', 'A5', 'G5', 'F5', 'Eb5', 'D5', 'C5', 'Bb4',
      'C5', 'D5', 'Eb5', 'F5', 'G5', 'Bb5', 'C6', 'REST'
    ],
    bass: ['C3', 'Eb3', 'G3', 'F3', 'Eb3', 'D3', 'C3', 'G2'],
    drums: [1, 1, 2, 1, 1, 1, 2, 2]
  },
  {
    id: 3,
    title: "Simple Things",
    artist: "Ryan Poppin",
    genre: "90s",
    duration: 245,
    likes: 480,
    cover: "assets/simple_things.png",
    tempo: 90,
    synthType: 'triangle',
    melody: [
      'C4', 'E4', 'G4', 'B4', 'C5', 'B4', 'G4', 'E4',
      'F4', 'A4', 'C5', 'E5', 'F5', 'E5', 'C5', 'A4',
      'G4', 'B4', 'D5', 'F#5', 'G5', 'F#5', 'D5', 'B4',
      'C4', 'F4', 'A4', 'C5', 'E5', 'D5', 'B4', 'G4'
    ],
    bass: ['C3', 'C3', 'F3', 'F3', 'G3', 'G3', 'C3', 'F3'],
    drums: [1, 0, 2, 0, 1, 0, 2, 0]
  },
  {
    id: 4,
    title: "Not so good",
    artist: "Bryan Thomas",
    genre: "New",
    duration: 198,
    likes: 120,
    cover: "assets/not_so_good.png",
    tempo: 80,
    synthType: 'sawtooth',
    melody: [
      'A3', 'REST', 'C4', 'E4', 'D4', 'REST', 'F4', 'A4',
      'E4', 'REST', 'G4', 'B4', 'A4', 'E4', 'C4', 'REST',
      'F3', 'A3', 'C4', 'A3', 'G3', 'B3', 'D4', 'B3',
      'E3', 'G#3', 'B3', 'G#3', 'A3', 'REST', 'REST', 'REST'
    ],
    bass: ['A2', 'D2', 'E2', 'A2', 'F2', 'G2', 'E2', 'A2'],
    drums: [1, 0, 2, 1, 0, 1, 2, 0]
  },
  {
    id: 5,
    title: "Best of Eren",
    artist: "Eren J.",
    genre: "Instrumental",
    duration: 232,
    likes: 999,
    cover: "assets/playlist_eren.png",
    tempo: 105,
    synthType: 'sine',
    melody: [
      'E4', 'G4', 'B4', 'E5', 'D5', 'B4', 'G4', 'F#4',
      'D4', 'F#4', 'A4', 'D5', 'C5', 'A4', 'F#4', 'E4',
      'C4', 'E4', 'G4', 'C5', 'B4', 'G4', 'E4', 'D4',
      'B3', 'D4', 'F#4', 'B4', 'A4', 'F#4', 'D4', 'B3'
    ],
    bass: ['E3', 'D3', 'C3', 'B2', 'A2', 'D3', 'G2', 'B2'],
    drums: [1, 0, 2, 0, 1, 0, 2, 0]
  },
  {
    id: 6,
    title: "Say So",
    artist: "Doja Cat",
    genre: "Pop",
    duration: 197,
    likes: 1820,
    cover: "assets/daily_chaos.png",
    tempo: 111,
    synthType: 'triangle',
    melody: [
      'F4', 'A4', 'C5', 'A4', 'F4', 'G4', 'A4', 'C5',
      'D5', 'C5', 'A4', 'F4', 'G4', 'A4', 'REST', 'REST',
      'A4', 'C5', 'D5', 'C5', 'A4', 'Bb4', 'C5', 'D5',
      'Eb5', 'D5', 'C5', 'A4', 'Bb4', 'C5', 'F4', 'REST'
    ],
    bass: ['F2', 'F2', 'C3', 'C3', 'Bb2', 'Bb2', 'F2', 'F2'],
    drums: [1, 0, 2, 0, 1, 0, 2, 0]
  },
  {
    id: 7,
    title: "Woman",
    artist: "Doja Cat",
    genre: "Pop",
    duration: 172,
    likes: 1543,
    cover: "assets/simple_things.png",
    tempo: 108,
    synthType: 'sawtooth',
    melody: [
      'G4', 'Bb4', 'D5', 'Bb4', 'G4', 'A4', 'Bb4', 'D5',
      'Eb5', 'D5', 'Bb4', 'G4', 'A4', 'Bb4', 'REST', 'REST',
      'Bb4', 'D5', 'Eb5', 'D5', 'Bb4', 'C5', 'D5', 'Eb5',
      'F5', 'Eb5', 'D5', 'Bb4', 'C5', 'D5', 'G4', 'REST'
    ],
    bass: ['G2', 'G2', 'D3', 'D3', 'C3', 'C3', 'G2', 'Bb2'],
    drums: [1, 1, 2, 0, 1, 1, 2, 1]
  },
  {
    id: 8,
    title: "Need to Know",
    artist: "Doja Cat",
    genre: "Pop",
    duration: 213,
    likes: 1367,
    cover: "assets/not_so_good.png",
    tempo: 130,
    synthType: 'square',
    melody: [
      'C5', 'D5', 'Eb5', 'D5', 'C5', 'Bb4', 'C5', 'D5',
      'F5', 'Eb5', 'D5', 'C5', 'Bb4', 'C5', 'D5', 'Eb5',
      'D5', 'C5', 'Bb4', 'G4', 'A4', 'Bb4', 'C5', 'D5',
      'Eb5', 'D5', 'C5', 'Bb4', 'G4', 'A4', 'Bb4', 'REST'
    ],
    bass: ['C3', 'C3', 'G2', 'G2', 'F2', 'F2', 'C3', 'G2'],
    drums: [1, 0, 2, 1, 1, 0, 2, 1]
  },
  {
    id: 9,
    title: "Kiss Me More",
    artist: "Doja Cat",
    genre: "Pop",
    duration: 208,
    likes: 2480,
    cover: "assets/playlist_eren.png",
    tempo: 85,
    synthType: 'triangle',
    melody: [
      'A4', 'C5', 'E5', 'C5', 'A4', 'G4', 'A4', 'C5',
      'D5', 'C5', 'A4', 'G4', 'A4', 'B4', 'C5', 'REST',
      'C5', 'E5', 'G5', 'E5', 'C5', 'B4', 'C5', 'E5',
      'G5', 'E5', 'C5', 'B4', 'A4', 'G4', 'A4', 'REST'
    ],
    bass: ['A2', 'A2', 'E3', 'E3', 'D3', 'D3', 'A2', 'G2'],
    drums: [1, 0, 2, 0, 1, 1, 2, 0]
  },
  {
    id: 10,
    title: "Streets",
    artist: "Doja Cat",
    genre: "R&B",
    duration: 226,
    likes: 1955,
    cover: "assets/daily_chaos.png",
    tempo: 90,
    synthType: 'sine',
    melody: [
      'F4', 'A4', 'C5', 'A4', 'F4', 'G4', 'A4', 'Bb4',
      'C5', 'Bb4', 'A4', 'F4', 'G4', 'A4', 'C5', 'REST',
      'A4', 'C5', 'Eb5', 'C5', 'A4', 'Bb4', 'C5', 'Eb5',
      'F5', 'Eb5', 'C5', 'A4', 'Bb4', 'C5', 'F4', 'REST'
    ],
    bass: ['F2', 'F2', 'C3', 'C3', 'Bb2', 'Bb2', 'F2', 'Eb3'],
    drums: [1, 0, 2, 0, 1, 0, 2, 0]
  },
  {
    id: 11,
    title: "Paint The Town Red",
    artist: "Doja Cat",
    genre: "Hip-Hop",
    duration: 230,
    likes: 2210,
    cover: "assets/simple_things.png",
    tempo: 100,
    synthType: 'sawtooth',
    melody: [
      'G4', 'Bb4', 'C5', 'Bb4', 'G4', 'F4', 'G4', 'Bb4',
      'C5', 'D5', 'C5', 'Bb4', 'G4', 'F4', 'G4', 'REST',
      'Bb4', 'C5', 'D5', 'C5', 'Bb4', 'A4', 'Bb4', 'C5',
      'D5', 'C5', 'Bb4', 'A4', 'G4', 'F4', 'G4', 'REST'
    ],
    bass: ['G2', 'G2', 'D3', 'D3', 'C3', 'C3', 'G2', 'F2'],
    drums: [3, 0, 2, 1, 3, 0, 2, 1]
  },
  {
    id: 12,
    title: "Get Into It (Yuh)",
    artist: "Doja Cat",
    genre: "Hip-Hop",
    duration: 175,
    likes: 1180,
    cover: "assets/not_so_good.png",
    tempo: 92,
    synthType: 'square',
    melody: [
      'D4', 'F4', 'A4', 'F4', 'D4', 'E4', 'F4', 'A4',
      'Bb4', 'A4', 'F4', 'D4', 'E4', 'F4', 'A4', 'REST',
      'F4', 'A4', 'C5', 'A4', 'F4', 'G4', 'A4', 'C5',
      'D5', 'C5', 'A4', 'F4', 'G4', 'A4', 'D4', 'REST'
    ],
    bass: ['D3', 'D3', 'A2', 'A2', 'G2', 'G2', 'D3', 'A2'],
    drums: [1, 1, 2, 0, 1, 1, 2, 0]
  },
  {
    id: 13,
    title: "Juicy",
    artist: "Doja Cat",
    genre: "R&B",
    duration: 200,
    likes: 990,
    cover: "assets/playlist_eren.png",
    tempo: 85,
    synthType: 'triangle',
    melody: [
      'C4', 'Eb4', 'G4', 'Eb4', 'C4', 'D4', 'Eb4', 'G4',
      'Ab4', 'G4', 'Eb4', 'C4', 'D4', 'Eb4', 'G4', 'REST',
      'Eb4', 'G4', 'Bb4', 'G4', 'Eb4', 'F4', 'G4', 'Bb4',
      'C5', 'Bb4', 'G4', 'Eb4', 'F4', 'G4', 'C4', 'REST'
    ],
    bass: ['C3', 'C3', 'G2', 'G2', 'F2', 'F2', 'C3', 'G2'],
    drums: [1, 0, 2, 0, 1, 0, 2, 0]
  }
];

let currentTrackIndex = 0;
let currentTrack = tracks[currentTrackIndex];
let isPlaying = false;
let currentTime = 114;
let playTimer = null;
let currentStep = 0;

let likedTrackIds = new Set();

let activeSidebarTab = 'home';
let activeSearchQuery = '';
let activeCategory = 'modern';

let audioCtx = null;
let synthTimer = null;
let nextNoteTime = 0.0;
const lookahead = 25.0;
const scheduleAheadTime = 0.1;
let isShuffled = false;
let pitchMultiplier = 1.0;

const playlists = [
  { id: 'pl-1', title: 'Best of Eren', cover: 'assets/playlist_eren.png', trackIds: [5] },
  { id: 'pl-2', title: 'Best of Eren', cover: 'assets/playlist_eren.png', trackIds: [5] },
  { id: 'pl-doja', title: 'Best of Doja Cat', cover: 'assets/daily_chaos.png', trackIds: [6, 7, 8, 9, 10, 11, 12, 13] },
];

let activePlaylistId = null;
let playlistQueue = null;
let playlistQueuePos = 0;

function getFirstAlbumTrackIds() {
  const seen = new Set();
  const firsts = new Set();
  tracks.forEach(t => {
    if (!seen.has(t.cover)) {
      seen.add(t.cover);
      firsts.add(t.id);
    }
  });
  return firsts;
}

function formatSongCount(n) {
  return `${n} song${n === 1 ? '' : 's'}`;
}

function getPlaylistById(id) {
  return playlists.find(p => p.id === id) || null;
}

function getPlaylistTracks(playlist) {
  if (!playlist) return [];
  const map = new Map(tracks.map(t => [t.id, t]));
  const resolved = [];
  playlist.trackIds.forEach(id => {
    const t = map.get(id);
    if (t) resolved.push(t);
  });
  return resolved;
}

const waveformHeights = [
  30, 45, 20, 60, 45, 80, 50, 70, 40, 90, 85, 60, 40, 70, 75, 50,
  60, 80, 75, 45, 65, 85, 70, 50, 95, 80, 40, 65, 75, 50, 30, 60,
  45, 30, 55, 70, 50, 40, 25, 45, 60, 50, 35, 20, 15
];

const appContainer = document.getElementById('app-container');
const vinylRecord = document.getElementById('vinyl-record');
const tonearm = document.getElementById('tonearm');
const currentTitle = document.getElementById('current-title');
const currentGenre = document.getElementById('current-genre');
const timeCurrent = document.getElementById('time-current');
const timeTotal = document.getElementById('time-total');
const waveformScrub = document.getElementById('waveform-scrub');
const playPauseBtn = document.getElementById('play-pause-btn');
const playIcon = document.getElementById('play-icon');
const pauseIcon = document.getElementById('pause-icon');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const shuffleBtn = document.getElementById('shuffle-btn');
const minimizeBtn = document.getElementById('minimize-btn');
const searchInput = document.getElementById('search-input');
const likesBadge = document.getElementById('likes-badge');
const likesCount = document.getElementById('likes-count');
const deckPower = document.getElementById('deck-power');
const pitchHandle = document.getElementById('pitch-handle');
const playlistRows = document.querySelectorAll('.playlist-row');
const discoveryPanel = document.getElementById('discovery-panel');
const playlistDetailView = document.getElementById('playlist-detail-view');
const playlistBackBtn = document.getElementById('playlist-back-btn');
const playlistDetailCover = document.getElementById('playlist-detail-cover');
const playlistDetailTitle = document.getElementById('playlist-detail-title');
const playlistDetailSubtitle = document.getElementById('playlist-detail-subtitle');
const playlistSongList = document.getElementById('playlist-song-list');
const playlistPlayAllBtn = document.getElementById('playlist-play-all-btn');
const playlistShuffleBtn = document.getElementById('playlist-shuffle-btn');

function init() {
  loadTrack(currentTrackIndex);
  setupWaveform();
  setupEventListeners();
  updateUIPlaybackState();
  syncPlaylistRowSubtitles();
  renderCards();
}

function syncPlaylistRowSubtitles() {
  document.querySelectorAll('.playlist-row').forEach(row => {
    const playlist = getPlaylistById(row.getAttribute('data-playlist-id'));
    const subtitle = row.querySelector('.playlist-subtitle');
    if (!playlist || !subtitle) return;
    subtitle.textContent = `${formatSongCount(playlist.trackIds.length)} in this list`;
  });
}

function loadTrack(index) {
  currentTrackIndex = index;
  currentTrack = tracks[index];

  currentTitle.textContent = currentTrack.title;
  currentGenre.textContent = currentTrack.genre;
  likesCount.textContent = currentTrack.likes;

  if (likedTrackIds.has(currentTrack.id)) {
    likesBadge.classList.add('liked');
  } else {
    likesBadge.classList.remove('liked');
  }

  timeTotal.textContent = formatTime(currentTrack.duration);
  timeCurrent.textContent = formatTime(currentTime);

  updateWaveformProgress();

  const cards = document.querySelectorAll('.song-card');
  cards.forEach(card => {
    const cardId = parseInt(card.getAttribute('data-song-id'));
    if (cardId === currentTrack.id) {
      card.style.borderColor = 'black';
      card.style.transform = 'translateY(-3px)';
    } else {
      card.style.borderColor = 'transparent';
      card.style.transform = 'none';
    }
  });

  syncPlaylistDetailHighlight();

  const stepDuration = (60.0 / currentTrack.tempo) / 4;
  currentStep = Math.floor(currentTime / stepDuration) % 32;
}

function formatTime(secs) {
  const m = Math.floor(secs / 60);
  const s = Math.floor(secs % 60);
  return `${m}:${s < 10 ? '0' : ''}${s}`;
}

function setupWaveform() {
  waveformScrub.innerHTML = '';
  const numBars = 45;

  for (let i = 0; i < numBars; i++) {
    const bar = document.createElement('div');
    bar.className = 'waveform-bar';
    const baseHeight = waveformHeights[i % waveformHeights.length];
    bar.style.height = `${baseHeight}%`;
    waveformScrub.appendChild(bar);
  }
}

function updateWaveformProgress() {
  const bars = document.querySelectorAll('.waveform-bar');
  const ratio = currentTime / currentTrack.duration;
  const activeCount = Math.floor(ratio * bars.length);

  bars.forEach((bar, index) => {
    if (index <= activeCount) {
      bar.classList.add('active');
    } else {
      bar.classList.remove('active');
    }
  });
}

function updateUIPlaybackState() {
  if (isPlaying) {
    playIcon.style.display = 'none';
    pauseIcon.style.display = 'block';

    vinylRecord.classList.add('playing');
    tonearm.classList.add('playing');

    deckPower.querySelector('.indicator-dot').classList.add('active');
  } else {
    playIcon.style.display = 'block';
    pauseIcon.style.display = 'none';

    vinylRecord.classList.remove('playing');
    tonearm.classList.remove('playing');

    deckPower.querySelector('.indicator-dot').classList.remove('active');
  }
}

function initAudio() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
}

function startSequencer() {
  initAudio();
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }

  nextNoteTime = audioCtx.currentTime;
  schedulerLoop();
}

function schedulerLoop() {
  if (!isPlaying) return;

  while (nextNoteTime < audioCtx.currentTime + scheduleAheadTime) {
    scheduleNote(currentStep, nextNoteTime);

    const secondsPerBeat = 60.0 / (currentTrack.tempo * pitchMultiplier);
    const stepDuration = secondsPerBeat / 4;
    nextNoteTime += stepDuration;

    currentStep = (currentStep + 1) % 32;
  }

  synthTimer = setTimeout(schedulerLoop, lookahead);
}

function scheduleNote(step, time) {
  const noteName = currentTrack.melody[step];
  if (noteName && noteName !== 'REST') {
    const freq = NOTE_FREQ[noteName];
    if (freq) {
      const osc = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();

      osc.type = currentTrack.synthType || 'triangle';
      osc.frequency.setValueAtTime(freq * pitchMultiplier, time);

      gainNode.gain.setValueAtTime(0, time);
      gainNode.gain.linearRampToValueAtTime(0.12, time + 0.02);
      gainNode.gain.exponentialRampToValueAtTime(0.001, time + 0.18);

      osc.connect(gainNode);
      gainNode.connect(audioCtx.destination);

      osc.start(time);
      osc.stop(time + 0.2);
    }
  }

  if (step % 4 === 0) {
    const bassIndex = (step / 4) % currentTrack.bass.length;
    const bassNote = currentTrack.bass[bassIndex];
    if (bassNote && bassNote !== 'REST') {
      const freq = NOTE_FREQ[bassNote];
      if (freq) {
        const bassOsc = audioCtx.createOscillator();
        const bassGain = audioCtx.createGain();

        bassOsc.type = 'sawtooth';
        bassOsc.frequency.setValueAtTime(freq * pitchMultiplier * 0.5, time);

        const filter = audioCtx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(320, time);

        bassGain.gain.setValueAtTime(0, time);
        bassGain.gain.linearRampToValueAtTime(0.15, time + 0.05);
        bassGain.gain.exponentialRampToValueAtTime(0.001, time + 0.35);

        bassOsc.connect(filter);
        filter.connect(bassGain);
        bassGain.connect(audioCtx.destination);

        bassOsc.start(time);
        bassOsc.stop(time + 0.4);
      }
    }
  }

  const drumTrigger = currentTrack.drums[step % currentTrack.drums.length];
  if (drumTrigger === 1 || drumTrigger === 3) {
    const kickOsc = audioCtx.createOscillator();
    const kickGain = audioCtx.createGain();

    kickOsc.frequency.setValueAtTime(140, time);
    kickOsc.frequency.exponentialRampToValueAtTime(0.01, time + 0.09);

    kickGain.gain.setValueAtTime(0.3, time);
    kickGain.gain.exponentialRampToValueAtTime(0.001, time + 0.1);

    kickOsc.connect(kickGain);
    kickGain.connect(audioCtx.destination);

    kickOsc.start(time);
    kickOsc.stop(time + 0.1);
  }

  if (drumTrigger === 2 || drumTrigger === 3) {
    const bufferSize = audioCtx.sampleRate * 0.12;
    const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noiseNode = audioCtx.createBufferSource();
    noiseNode.buffer = buffer;

    const noiseFilter = audioCtx.createBiquadFilter();
    noiseFilter.type = 'bandpass';
    noiseFilter.frequency.setValueAtTime(1100, time);

    const noiseGain = audioCtx.createGain();
    noiseGain.gain.setValueAtTime(0.12, time);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, time + 0.11);

    noiseNode.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(audioCtx.destination);

    noiseNode.start(time);
    noiseNode.stop(time + 0.12);
  }
}

function play() {
  if (isPlaying) return;
  isPlaying = true;
  updateUIPlaybackState();
  startSequencer();

  playTimer = setInterval(() => {
    currentTime++;
    if (currentTime >= currentTrack.duration) {
      nextTrack();
    } else {
      timeCurrent.textContent = formatTime(currentTime);
      updateWaveformProgress();
    }
  }, 1000);
}

function pause() {
  if (!isPlaying) return;
  isPlaying = false;
  updateUIPlaybackState();

  clearTimeout(synthTimer);
  clearInterval(playTimer);
}

function togglePlay() {
  if (isPlaying) {
    pause();
  } else {
    play();
  }
}

function nextTrack() {
  const wasPlaying = isPlaying;
  pause();
  currentTime = 0;
  currentStep = 0;

  if (playlistQueue && playlistQueue.length > 0) {
    const nextPos = playlistQueuePos + 1;
    if (nextPos >= playlistQueue.length) {
      playlistQueue = null;
      playlistQueuePos = 0;
    } else {
      playlistQueuePos = nextPos;
      const nextTrackId = playlistQueue[nextPos];
      const idx = tracks.findIndex(t => t.id === nextTrackId);
      if (idx !== -1) {
        loadTrack(idx);
        if (wasPlaying) play();
        return;
      }
    }
  }

  if (isShuffled) {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * tracks.length);
    } while (newIndex === currentTrackIndex && tracks.length > 1);
    loadTrack(newIndex);
  } else {
    loadTrack((currentTrackIndex + 1) % tracks.length);
  }

  if (wasPlaying) play();
}

function prevTrack() {
  const wasPlaying = isPlaying;
  pause();
  currentTime = 0;
  currentStep = 0;

  if (currentTrackIndex === 0) {
    loadTrack(tracks.length - 1);
  } else {
    loadTrack(currentTrackIndex - 1);
  }

  if (wasPlaying) play();
}

function setupEventListeners() {
  playPauseBtn.addEventListener('click', togglePlay);

  vinylRecord.addEventListener('click', togglePlay);

  prevBtn.addEventListener('click', prevTrack);
  nextBtn.addEventListener('click', nextTrack);

  shuffleBtn.addEventListener('click', () => {
    isShuffled = !isShuffled;
    shuffleBtn.classList.toggle('active', isShuffled);
  });

  deckPower.addEventListener('click', () => {
    togglePlay();
  });

  minimizeBtn.addEventListener('click', () => {
    appContainer.classList.toggle('minimized');
  });

  waveformScrub.addEventListener('click', (e) => {
    const rect = waveformScrub.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const clickRatio = clickX / width;

    currentTime = Math.floor(clickRatio * currentTrack.duration);
    timeCurrent.textContent = formatTime(currentTime);
    updateWaveformProgress();

    const stepDuration = (60.0 / currentTrack.tempo) / 4;
    currentStep = Math.floor(currentTime / stepDuration) % 32;

    if (isPlaying) {
      clearTimeout(synthTimer);
      nextNoteTime = audioCtx.currentTime;
      schedulerLoop();
    }
  });

  waveformScrub.addEventListener('mousemove', (e) => {
    const rect = waveformScrub.getBoundingClientRect();
    const hoverX = e.clientX - rect.left;
    const width = rect.width;
    const hoverRatio = hoverX / width;
    const bars = document.querySelectorAll('.waveform-bar');
    const hoverLimit = Math.floor(hoverRatio * bars.length);

    bars.forEach((bar, index) => {
      if (index <= hoverLimit) {
        bar.style.opacity = '1';
        bar.style.filter = 'brightness(1.15)';
      } else {
        bar.style.opacity = '0.45';
        bar.style.filter = 'none';
      }
    });
  });

  waveformScrub.addEventListener('mouseleave', () => {
    const bars = document.querySelectorAll('.waveform-bar');
    bars.forEach(bar => {
      bar.style.opacity = '';
      bar.style.filter = '';
    });
  });

  likesBadge.addEventListener('click', () => {
    const isLiked = likedTrackIds.has(currentTrack.id);

    if (isLiked) {
      likedTrackIds.delete(currentTrack.id);
      currentTrack.likes--;
      likesBadge.classList.remove('liked');
    } else {
      likedTrackIds.add(currentTrack.id);
      currentTrack.likes++;
      likesBadge.classList.add('liked');
    }

    likesCount.textContent = currentTrack.likes;

    likesBadge.style.transform = 'scale(1.15) translate(1.5px, 1.5px)';
    setTimeout(() => {
      likesBadge.style.transform = '';
    }, 120);

    renderCards();
  });

  const categoryPills = document.querySelectorAll('.category-pill');
  categoryPills.forEach(pill => {
    pill.addEventListener('click', () => {
      categoryPills.forEach(p => {
        p.classList.remove('active');
        p.setAttribute('aria-selected', 'false');
      });
      pill.classList.add('active');
      pill.setAttribute('aria-selected', 'true');

      activeCategory = pill.getAttribute('data-category');
      renderCards();
    });
  });

  searchInput.addEventListener('input', () => {
    activeSearchQuery = searchInput.value.toLowerCase().trim();
    renderCards();
    filterPlaylists(activeSearchQuery);
  });

  const plPlayBtns = document.querySelectorAll('.playlist-play-btn');
  const playlistRowEls = document.querySelectorAll('.playlist-row');
  playlistRowEls.forEach(row => {
    row.addEventListener('click', () => {
      openPlaylistDetail(row.getAttribute('data-playlist-id'));
    });
  });
  plPlayBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const row = btn.closest('.playlist-row');
      const playlistId = row ? row.getAttribute('data-playlist-id') : '';
      playPlaylistAll(playlistId);
    });
  });

  playlistBackBtn.addEventListener('click', closePlaylistDetail);
  playlistPlayAllBtn.addEventListener('click', () => {
    if (activePlaylistId) playPlaylistAll(activePlaylistId, false);
  });
  playlistShuffleBtn.addEventListener('click', () => {
    if (activePlaylistId) playPlaylistAll(activePlaylistId, true);
  });

  const songCards = document.querySelectorAll('.song-card');
  songCards.forEach(card => {
    card.addEventListener('click', () => {
      const cardId = parseInt(card.getAttribute('data-song-id'));
      const targetIndex = tracks.findIndex(t => t.id === cardId);
      if (targetIndex !== -1) {
        currentTime = 0;
        currentStep = 0;
        loadTrack(targetIndex);
        play();
      }
    });
  });

  let isDraggingPitch = false;

  pitchHandle.addEventListener('mousedown', (e) => {
    isDraggingPitch = true;
    document.body.style.userSelect = 'none';
    document.body.style.cursor = 'ns-resize';
  });

  document.addEventListener('mousemove', (e) => {
    if (!isDraggingPitch) return;

    const track = document.querySelector('.pitch-fader-track');
    const rect = track.getBoundingClientRect();
    let relativeY = e.clientY - rect.top;

    relativeY = Math.max(0, Math.min(relativeY, rect.height));

    pitchHandle.style.top = `${relativeY - 7}px`;

    const ratio = 1 - (relativeY / rect.height);
    const pitchShiftPercent = (ratio - 0.5) * 30;

    pitchMultiplier = 1.0 + (pitchShiftPercent / 100.0);
  });

  document.addEventListener('mouseup', () => {
    if (isDraggingPitch) {
      isDraggingPitch = false;
      document.body.style.userSelect = '';
      document.body.style.cursor = '';
    }
  });

  pitchHandle.addEventListener('touchstart', (e) => {
    isDraggingPitch = true;
  });

  document.addEventListener('touchmove', (e) => {
    if (!isDraggingPitch) return;
    const touch = e.touches[0];
    const track = document.querySelector('.pitch-fader-track');
    const rect = track.getBoundingClientRect();
    let relativeY = touch.clientY - rect.top;
    relativeY = Math.max(0, Math.min(relativeY, rect.height));
    pitchHandle.style.top = `${relativeY - 7}px`;

    const ratio = 1 - (relativeY / rect.height);
    const pitchShiftPercent = (ratio - 0.5) * 30;
    pitchMultiplier = 1.0 + (pitchShiftPercent / 100.0);
  });

  document.addEventListener('touchend', () => {
    isDraggingPitch = false;
  });

  const sidebarItems = document.querySelectorAll('.nav-item');
  sidebarItems.forEach(item => {
    item.addEventListener('click', () => {
      sidebarItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');

      activeSidebarTab = item.getAttribute('data-tab');

      const pills = document.querySelectorAll('.category-pill');
      pills.forEach(p => p.classList.remove('active'));
      if (activeSidebarTab === 'tags') {
        const modernPill = Array.from(pills).find(p => p.getAttribute('data-category') === 'modern');
        if (modernPill) {
          modernPill.classList.add('active');
          activeCategory = 'modern';
        }
      } else {
        activeCategory = 'modern';
      }

      renderCards();
    });
  });
}

function renderCards() {
  const cards = document.querySelectorAll('.song-card');
  const firstAlbumTrackIds = getFirstAlbumTrackIds();

  cards.forEach(card => {
    const cardId = parseInt(card.getAttribute('data-song-id'));
    const track = tracks.find(t => t.id === cardId);
    if (!track) return;

    let tabPass = false;
    if (activeSidebarTab === 'home') {
      tabPass = activeSearchQuery !== '' ? true : firstAlbumTrackIds.has(track.id);
    } else if (activeSidebarTab === 'favorites') {
      tabPass = likedTrackIds.has(track.id);
    } else if (activeSidebarTab === 'music-note') {
      tabPass = true;
    } else if (activeSidebarTab === 'disc') {
      tabPass = firstAlbumTrackIds.has(track.id);
    } else if (activeSidebarTab === 'equalizer') {
      tabPass = true;
    } else if (activeSidebarTab === 'tags') {
      tabPass = true;
    } else {
      tabPass = true;
    }

    let categoryPass = true;
    if (activeCategory && activeCategory !== 'modern') {
      categoryPass = track.genre.toLowerCase() === activeCategory.toLowerCase();
    }

    let searchPass = true;
    if (activeSearchQuery) {
      searchPass = track.title.toLowerCase().includes(activeSearchQuery)
                || track.artist.toLowerCase().includes(activeSearchQuery);
    }

    card.style.display = (tabPass && categoryPass && searchPass) ? 'block' : 'none';
  });

  updateHomeMoreHint();
}

function updateHomeMoreHint() {
  const hint = document.getElementById('home-more-hint');
  if (!hint) return;

  if (activeSidebarTab === 'home' && activeSearchQuery === '') {
    const totalTracks = tracks.length;
    const albumsShown = getFirstAlbumTrackIds().size;
    const hiddenCount = totalTracks - albumsShown;
    if (hiddenCount > 0) {
      hint.textContent = `${hiddenCount} more song${hiddenCount === 1 ? '' : 's'} — use search to find ${hiddenCount === 1 ? 'it' : 'them'}`;
      hint.style.display = 'block';
    } else {
      hint.style.display = 'none';
    }
  } else {
    hint.style.display = 'none';
  }
}

function filterPlaylists(query) {
  const rows = document.querySelectorAll('.playlist-row');
  rows.forEach(row => {
    const title = row.querySelector('.playlist-title').textContent.toLowerCase();
    const subtitle = row.querySelector('.playlist-subtitle').textContent.toLowerCase();
    if (!query || title.includes(query) || subtitle.includes(query)) {
      row.style.display = 'flex';
    } else {
      row.style.display = 'none';
    }
  });
}

function openPlaylistDetail(playlistId) {
  const playlist = getPlaylistById(playlistId);
  if (!playlist) return;

  activePlaylistId = playlistId;

  playlistDetailCover.src = playlist.cover;
  playlistDetailCover.alt = `${playlist.title} Playlist Cover`;
  playlistDetailTitle.textContent = playlist.title;
  playlistDetailSubtitle.textContent = `${formatSongCount(playlist.trackIds.length)} in this list`;

  const resolved = getPlaylistTracks(playlist);
  playlistSongList.innerHTML = '';

  if (resolved.length === 0) {
    const empty = document.createElement('li');
    empty.className = 'playlist-song-empty';
    empty.textContent = 'No songs in this playlist yet.';
    playlistSongList.appendChild(empty);
  } else {
    resolved.forEach((track, i) => {
      const li = document.createElement('li');
      li.className = 'playlist-song-item';
      li.setAttribute('data-track-id', track.id);

      const idx = document.createElement('span');
      idx.className = 'playlist-song-index';
      idx.textContent = i + 1;

      const thumb = document.createElement('img');
      thumb.className = 'playlist-song-thumb';
      thumb.src = track.cover;
      thumb.alt = `${track.title} cover`;

      const info = document.createElement('div');
      info.className = 'playlist-song-info';
      const titleEl = document.createElement('span');
      titleEl.className = 'playlist-song-title';
      titleEl.textContent = track.title;
      const artistEl = document.createElement('span');
      artistEl.className = 'playlist-song-artist';
      artistEl.textContent = track.artist;
      info.appendChild(titleEl);
      info.appendChild(artistEl);

      const duration = document.createElement('span');
      duration.className = 'playlist-song-duration';
      duration.textContent = formatTime(track.duration);

      const playBtn = document.createElement('button');
      playBtn.className = 'playlist-song-play-btn';
      playBtn.setAttribute('aria-label', `Play ${track.title}`);
      playBtn.innerHTML = '<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>';

      li.appendChild(idx);
      li.appendChild(thumb);
      li.appendChild(info);
      li.appendChild(duration);
      li.appendChild(playBtn);

      li.addEventListener('click', () => {
        playPlaylistTrackById(track.id);
      });

      playBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        playPlaylistTrackById(track.id);
      });

      playlistSongList.appendChild(li);
    });
  }

  playlistDetailView.hidden = false;
  discoveryPanel.classList.add('playlist-detail-open');
  syncPlaylistDetailHighlight();
}

function closePlaylistDetail() {
  activePlaylistId = null;
  playlistDetailView.hidden = true;
  discoveryPanel.classList.remove('playlist-detail-open');
}

function syncPlaylistDetailHighlight() {
  if (!playlistDetailView || playlistDetailView.hidden) return;
  const items = playlistSongList.querySelectorAll('.playlist-song-item');
  items.forEach(item => {
    const id = parseInt(item.getAttribute('data-track-id'));
    if (id === currentTrack.id) {
      item.classList.add('playing');
    } else {
      item.classList.remove('playing');
    }
  });
}

function playPlaylistTrackById(trackId) {
  const idx = tracks.findIndex(t => t.id === trackId);
  if (idx === -1) return;

  if (activePlaylistId) {
    const playlist = getPlaylistById(activePlaylistId);
    const resolved = playlist ? getPlaylistTracks(playlist).map(t => t.id) : [];
    const posInQueue = resolved.indexOf(trackId);
    if (posInQueue !== -1) {
      playlistQueue = resolved;
      playlistQueuePos = posInQueue;
    }
  }

  currentTime = 0;
  currentStep = 0;
  loadTrack(idx);
  play();
}

function playPlaylistAll(playlistId, shuffle = false) {
  const playlist = getPlaylistById(playlistId);
  if (!playlist) return;
  const resolved = getPlaylistTracks(playlist);
  if (resolved.length === 0) return;

  let ordered = resolved.map(t => t.id);
  if (shuffle) {
    for (let i = ordered.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [ordered[i], ordered[j]] = [ordered[j], ordered[i]];
    }
  }

  playlistQueue = ordered;
  playlistQueuePos = 0;

  const firstId = ordered[0];
  const idx = tracks.findIndex(t => t.id === firstId);
  if (idx === -1) return;
  currentTime = 0;
  currentStep = 0;
  loadTrack(idx);
  play();
}

window.addEventListener('DOMContentLoaded', init);
