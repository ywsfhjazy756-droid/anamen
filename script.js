// ============ SOUND ============
let soundEnabled=true;
const AudioCtx=window.AudioContext||window.webkitAudioContext;let audioCtx=null;
function getAudioCtx(){if(!audioCtx)audioCtx=new AudioCtx();return audioCtx}
function playTone(f,d,t='sine',v=.15){if(!soundEnabled)return;try{const c=getAudioCtx(),o=c.createOscillator(),g=c.createGain();o.type=t;o.frequency.value=f;g.gain.value=v;g.gain.exponentialRampToValueAtTime(.001,c.currentTime+d);o.connect(g);g.connect(c.destination);o.start(c.currentTime);o.stop(c.currentTime+d)}catch(e){}}
function playClick(){playTone(800,.08,'sine',.1)}
function playSuccess(){playTone(523,.1);setTimeout(()=>playTone(659,.1),100);setTimeout(()=>playTone(784,.15),200)}
function playError(){playTone(300,.15,'sawtooth',.1);setTimeout(()=>playTone(200,.2,'sawtooth',.1),150)}
function playTimerTick(){playTone(1000,.05,'sine',.05)}
function playTimerEnd(){playTone(400,.3,'square',.12);setTimeout(()=>playTone(300,.3,'square',.12),200);setTimeout(()=>playTone(200,.4,'square',.12),400)}
function playWin(){[523,659,784,1047].forEach((f,i)=>setTimeout(()=>playTone(f,.2,'sine',.12),i*150))}
function toggleSound(){soundEnabled=!soundEnabled;document.getElementById('sound-on-icon').classList.toggle('hidden',!soundEnabled);document.getElementById('sound-off-icon').classList.toggle('hidden',soundEnabled);if(soundEnabled)playClick()}

// ============ TOAST ============
let toastTimer=null;
function showToast(msg,dur=2000){const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.classList.remove('show'),dur)}

// ============ MEME TEXTS ============
const homeMemes=['جهز صحابك وهاتوا شاي وسكر كتير!','النهاردة هنضحك لحد ما نعيط!','الفراخ غليت؟ طب تعالوا نلعب!','مين فيكم هيتفضح النهاردة؟','جاهزين تتكسفوا قدام بعض؟','واحد صاحبي قالي اللعبة دي هتخليكم تتخانقوا 😂','احنا مش مسؤولين عن أي خناقات!','لو مفيش شاي يبقى مفيش لعب!'];
const gameStartMemes=['ركزوا بقا عشان الموضوع جد!','يلا بينا يا شباب!','اللي هيخسر يجيب شاي للباقي!','مستعدين ولا نستنى شوية؟','الموضوع سهل... أو كده فاكرين 😏'];
const handoverFunny=['اوعى تخمن غلط ياااض! 😂','يابني بلااااش!','يلا بقا عشان تخسر! 💀','جاهز يا برو؟ ركز بقا!','ياريت تعرف انت مين اصلاً 🤡','بص يا سيدي... فكر كويس!','مفيش ضغوط... بس لو غلطت هنضحك عليك 😂','خد نفس عميق وبسم الله!','انت شايف نفسك ذكي ولا إيه؟ 🧐','يلا يا معلم ورينا شطارتك!','هو أنت فاكر إن الموضوع سهل؟ 🥴','ابعت لأهلك رسالة وداع كده 💀','احتمال تندم على اختيارك ده 😂'];
const wrongTexts=['يابني ما قولتلك بلااااش! 😂','عشان تسمع الكلام بعد كدا!','مفكر نفسك هتكسب يعني؟ 💀','اييييه ده يابني! كنت فين؟','انت كده خسرت الأمل 🤡','هههههه مكنتش متوقع منك كده!','ده كان واضح يا بابا! 😂','اقعد ع الدكة بقا!','يلا يلا... المرة الجاية إن شاء الله!','ههههه ده انت مش بتركز خالص!','قولتلك ركز... بس مسمعتش!','ايه ده؟ ده انت عامل زي اللي مذاكرش وداخل الامتحان 😂','كنت هقولك الإجابة بس قولت أسيبك تتعلم 💀'];
const correctTexts=['ياسطاااا عرفت! 🎉','برافو عليك يا معلم!','اييييه الشطارة دي! 💪','كده كده... ده اللي عايزينه!','ياخبر! انت ذكي فعلاً! 🧠','تستاهل كل نقطة!','والله انت جامد! 🔥','ده انت أسطورة يابني!','ماشاء الله عليك! 🌟','انت ده الريال مدريد بتاع اللعبة دي 😎'];
const winnerTexts=['كسب الفورة وضرب الكل! 🔥','الأسطورة اللي فازت! 🏆','مبروووك يا كبير! 🎉','ملك اللعبة بلا منازع! 👑','هو ده البطل الحقيقي! 💪'];
const roundResultMemes=['يلا نشوف مين اللي قاعد فوق!','الموقف كده يا شباب...','هل فيه مفاجآت؟ 🤔','نتيجة مثيرة والله!'];
const tdMemes=['يلا نشوف مين الجريء فيكم!','الموضوع هيبقى مثير 😏','جاهزين للفضايح؟ 😂','مفيش رجوع بعد كده!','يلا بينا نتسلى شوية!'];
const quizMemes=['يلا نشوف مين الذكي فيكم!','ركز بقا الأسئلة صعبة!','جاهز تختبر نفسك؟ 🧠','يلا يا عبقري!'];

const handoverImgs=['meme-handover-1.png','meme-handover-2.png','meme-handover-3.png','meme-handover-4.png','meme-handover-5.png'];
function R(a){return a[Math.floor(Math.random()*a.length)]}
function shuffle(a){let b=[...a];for(let i=b.length-1;i>0;i--){let j=Math.floor(Math.random()*(i+1));[b[i],b[j]]=[b[j],b[i]]}return b}

// ============ PARTICLES ============
function createParticles(){const c=document.getElementById('particles');const cols=['#FFD700','#9b59b6','#7b2ff7','#FFC107','#FF6B6B','#4ECDC4'];for(let i=0;i<25;i++){const p=document.createElement('div');p.className='particle';const s=Math.random()*4+2;p.style.width=s+'px';p.style.height=s+'px';p.style.background=cols[Math.floor(Math.random()*cols.length)];p.style.left=Math.random()*100+'%';p.style.animationDuration=(Math.random()*18+12)+'s';p.style.animationDelay=(Math.random()*12)+'s';c.appendChild(p)}}
createParticles();

// ============ INIT ============
document.getElementById('home-meme-text').textContent=R(homeMemes);

// ============ UTILITY ============
function showScreen(id){document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));document.getElementById(id).classList.add('active');window.scrollTo(0,0)}
function goHome(){clearInterval(timerInterval);showScreen('home-screen');document.getElementById('home-meme-text').textContent=R(homeMemes)}
function openGame(g){
    if(g==='ana-meen'){showScreen('anameen-start');document.getElementById('am-start-meme-text').textContent=R(gameStartMemes)}
    else if(g==='kalma'){showScreen('kalma-start');document.getElementById('kl-start-meme-text').textContent=R(gameStartMemes)}
    else if(g==='truth-dare'){showScreen('td-start');document.getElementById('td-start-meme-text').textContent=R(tdMemes)}
    else if(g==='quiz'){showScreen('quiz-start');document.getElementById('quiz-start-meme-text').textContent=R(quizMemes);initQuizPackages()}
    else if(g==='jokes'){showScreen('jokes-screen');showNewJoke()}
    else if(g==='riddles'){showScreen('riddles-screen');showNewRiddle()}
}
let timerInterval=null;

// ============ SHARE ============
function shareWebsite(){doShare({title:'سوا',text:'تعالوا نلعب سوا! 🎉 ألعاب جماعية على جهاز واحد!',url:location.href})}
function shareResult(g){let t='';if(g==='anameen'){const s=[...amState.players].sort((a,b)=>amState.scores[b]-amState.scores[a]);t='🏆 نتيجة أنا مين؟\n\n';s.forEach((p,i)=>{t+=(i===0?'🥇':i===1?'🥈':i===2?'🥉':'  ')+' '+p+': '+amState.scores[p]+' نقطة\n'})}else{const s=[...klState.players].sort((a,b)=>klState.scores[b]-klState.scores[a]);t='🏆 نتيجة عدّي الكلمة\n\n';s.forEach((p,i)=>{t+=(i===0?'🥇':i===1?'🥈':i===2?'🥉':'  ')+' '+p+': '+klState.scores[p]+' نقطة\n'})}t+='\nالعبوا على سوا! 🎮';doShare({title:'نتيجة - سوا',text:t,url:location.href})}
function doShare(d){if(navigator.share)navigator.share(d).catch(()=>{});else navigator.clipboard.writeText(d.text+'\n'+d.url).then(()=>showToast('تم النسخ! 📋')).catch(()=>showToast(d.url))}

// ============ RULES ============
function showRules(g){const m=document.getElementById('rules-modal'),t=document.getElementById('rules-title'),b=document.getElementById('rules-body');
if(g==='anameen'){t.textContent='قواعد أنا مين؟';b.innerHTML='<ul><li>كل لاعب عليه كارت مخفي هو مش شايفه</li><li>بيشوف كروت الباقي وبيسأل عشان يعرف هو مين</li><li>لما الوقت يخلص كل واحد بيخمن</li><li>تخمين صح = +2 نقطة</li><li>تخمين غلط = -1 نقطة</li><li>أعلى نقاط يكسب!</li></ul>'}
else if(g==='kalma'){t.textContent='قواعد عدّي الكلمة';b.innerHTML='<ul><li>كل لاعب بيوصف كلمة للباقي من غير ما يقولها</li><li>ممنوع يقول الكلمة أو الكلمات المحظورة</li><li>لو الناس عرفت = +1 نقطة</li><li>لو قال كلمة ممنوعة = -1 نقطة</li><li>الوقت بتاع الجولة الكاملة مش بتاع لاعب واحد</li><li>كل ما حد يجاوب بيتغير الدور والكلمة</li></ul>'}
else if(g==='td'){t.textContent='قواعد قول أو اعمل';b.innerHTML='<ul><li>الموقع بيختار لاعب عشوائي</li><li>اللاعب بيختار "قول" أو "اعمل"</li><li>"قول" = سؤال لازم يجاوبه</li><li>"اعمل" = تحدي لازم ينفذه</li><li>ممكن يتخطى لو مش عايز</li><li>اللعبة مفيهاش نقاط - بتخلص لما تحبوا!</li></ul>'}
else if(g==='quiz'){t.textContent='قواعد اختبر نفسك';b.innerHTML='<ul><li>اختار باكدج أو أكتر</li><li>هتيجيلك أسئلة عشوائية</li><li>كل إجابة صح = +1 نقطة</li><li>كل إجابة غلط = 0</li><li>حاول تجيب أعلى سكور!</li></ul>'}
m.classList.remove('hidden')}
function closeRules(){document.getElementById('rules-modal').classList.add('hidden')}
function confirmEndGame(){document.getElementById('end-modal').classList.remove('hidden')}
function closeEndModal(){document.getElementById('end-modal').classList.add('hidden')}
function endGameNow(){closeEndModal();clearInterval(timerInterval);goHome()}

// ============ PACKAGES ============
const packageIcons={'كورة':'⚽','صفات غريبة':'😜','حيوانات':'🐻','أنمي':'🎌','بلوجرز':'📺','أكلات':'🍽️'};
const amPackages={
'كورة':['محمد صلاح','ميسي','رونالدو','نيمار','مبابي','بنزيما','زيدان','مارادونا','بيليه','هالاند','أبو تريكة','حسام حسن','بركات','الحضري','شيكابالا','رمضان صبحي','تريزيجيه','كهربا','أفشة','طارق حامد','وليد سليمان','زيزو','محمد الشناوي','مصطفى محمد','إمام عاشور','حسام عاشور','عبد الله السعيد','علي معلول','ديانج','كاسونجو'],
'صفات غريبة':['اللي بيضحك في أوقات غلط','اللي بينام في أي مكان','اللي بياكل كتير','اللي بيتأخر دايمًا','اللي بيحب الدراما','اللي بيخاف من الضلمة','اللي مش بيرد على التليفون','اللي بيحب يتصور','اللي بيغير من أي حد','اللي بيحب النميمة','اللي مبيعرفش يطبخ','اللي بيحب يتكلم عن نفسه','اللي بيزعل بسرعة','اللي بيحب يرقص','اللي مبيقدرش يحفظ سر','اللي بيخاف من القطط','اللي بينسى كل حاجة','اللي بيحب يلعب ألعاب','اللي بيتفرج على مسلسلات كتير','اللي بيحب الأكل الحار'],
'حيوانات':['أسد','فيل','زرافة','قرد','دب','نمر','ثعلب','أرنب','سلحفاة','تمساح','بطريق','كنغر','حصان','غزال','ذئب','نسر','صقر','دولفين','حوت','أخطبوط','قطة','كلب','عصفور','حمامة','بومة','ثعبان','فراشة','نحلة','خروف','جمل'],
'أنمي':['ناروتو','غوكو','لوفي','سينان','كابتن ماجد','ساسكي','فيجيتا','زورو','سانجي','ليفاي','إيرين','ميكاسا','كاكاشي','هيناتا','ساكورا','إيتاشي','تانجيرو','غون','كيلوا','شينشان','دورايمون','بيكاتشو','آش','بليتش','ون بيس','ديث نوت','هجوم العمالقة','جوجو','فريزا','سيل'],
'بلوجرز':['أحمد حسن وزينب','نور ستارز','أبلة فاهيتا','محمد هنيدي','أحمد حلمي','تامر حسني','عمرو دياب','محمد رمضان','علي ربيع','مصطفى خاطر','حمدي الميرغني','أوس أوس','ويزو','بيومي فؤاد','هاني رمزي','عادل إمام','أحمد السقا','كريم عبد العزيز','منى زكي','ياسمين عبد العزيز','نيللي كريم','أحمد عز','حسن الرداد','دنيا سمير غانم','أمينة خليل'],
'أكلات':['كشري','فول مدمس','طعمية','ملوخية','محشي','كباب','كفتة','فتة','بيتزا','شاورما','سمك مشوي','رز بلبن','أم علي','كنافة','بسبوسة','قطايف','حواوشي','ممبار','مكرونة بشاميل','برجر','فراخ مشوية','مسقعة','بطاطس محمرة','شوربة عدس','كريب','فتة شاورما','طاجن','سوشي','لازانيا','مولوخية بالأرانب']
};

// ============ ANA MEEN ============
let amState={players:[],rounds:2,time:60,selectedPackages:[],currentRound:0,currentDistIndex:0,cards:{},scores:{},turnIndex:0,turnPairs:[],guessIndex:0,guessOrder:[],allWords:[],usedWords:[]};

function showAnameenSetup(){
    showScreen('anameen-setup');
    const l=document.getElementById('am-players-list');l.innerHTML='';amState.players=['',''];
    for(let i=0;i<2;i++)addAmPI(i);
    const rd=document.getElementById('am-rounds-options');rd.innerHTML='';
    [1,2,4,5,7,10].forEach(r=>{const b=document.createElement('button');b.className='option-btn'+(r===2?' selected':'');b.textContent=r;b.onclick=()=>{playClick();rd.querySelectorAll('.option-btn').forEach(x=>x.classList.remove('selected'));b.classList.add('selected');amState.rounds=r};rd.appendChild(b)});
    const td=document.getElementById('am-time-options');td.innerHTML='';
    [20,40,60,90,120].forEach(t=>{const b=document.createElement('button');b.className='option-btn'+(t===60?' selected':'');b.textContent=t+'ث';b.onclick=()=>{playClick();td.querySelectorAll('.option-btn').forEach(x=>x.classList.remove('selected'));b.classList.add('selected');amState.time=t};td.appendChild(b)});
    const pk=document.getElementById('am-packages');pk.innerHTML='';amState.selectedPackages=[];
    Object.keys(amPackages).forEach(p=>{const b=document.createElement('button');b.className='package-btn';b.innerHTML='<div class="pkg-icon">'+(packageIcons[p]||'📦')+'</div><span>'+p+'</span>';b.onclick=()=>{playClick();b.classList.toggle('selected');if(amState.selectedPackages.includes(p))amState.selectedPackages=amState.selectedPackages.filter(x=>x!==p);else amState.selectedPackages.push(p)};pk.appendChild(b)});
    amState.rounds=2;amState.time=60;document.getElementById('am-error').textContent='';
}
function addAmPI(i){const l=document.getElementById('am-players-list');const r=document.createElement('div');r.className='player-input-row';r.innerHTML='<input type="text" placeholder="اسم اللاعب '+(i+1)+'" oninput="amState.players['+i+']=this.value">'+(i>=2?'<button class="remove-player-btn" onclick="playClick();this.parentElement.remove()">×</button>':'');l.appendChild(r)}
function addAmPlayer(){if(amState.players.length>=10)return;const i=amState.players.length;amState.players.push('');addAmPI(i)}
function randomPackages(){const p=Object.keys(amPackages),c=Math.floor(Math.random()*3)+1;amState.selectedPackages=shuffle(p).slice(0,c);document.querySelectorAll('#am-packages .package-btn').forEach(b=>{const n=b.querySelector('span').textContent;b.classList.toggle('selected',amState.selectedPackages.includes(n))})}
function getAmP(){const inp=document.querySelectorAll('#am-players-list input');let p=[];inp.forEach(i=>{if(i.value.trim())p.push(i.value.trim())});return p}

function startAnaMeen(){const p=getAmP();const e=document.getElementById('am-error');if(p.length<2){e.textContent='لازم لاعبين على الأقل!';playError();return}if(amState.selectedPackages.length===0){e.textContent='اختار باكدج واحد على الأقل!';playError();return}amState.players=p;amState.scores={};p.forEach(x=>amState.scores[x]=0);amState.currentRound=0;amState.allWords=[];amState.selectedPackages.forEach(pk=>{amState.allWords=amState.allWords.concat(amPackages[pk])});amState.usedWords=[];playSuccess();startAmRound()}

function startAmRound(){amState.currentRound++;if(amState.currentRound>amState.rounds){showAmFinal();return}amState.cards={};let av=amState.allWords.filter(w=>!amState.usedWords.includes(w));if(av.length<amState.players.length){amState.usedWords=[];av=[...amState.allWords]}let sel=shuffle(av).slice(0,amState.players.length);amState.usedWords=amState.usedWords.concat(sel);amState.players.forEach((p,i)=>amState.cards[p]=sel[i]);amState.currentDistIndex=0;showAmDist()}

function showAmDist(){showScreen('anameen-distribute');const pr=document.getElementById('am-dist-progress');pr.innerHTML='';amState.players.forEach((p,i)=>{const d=document.createElement('span');d.className='progress-dot'+(i<amState.currentDistIndex?' done':'')+(i===amState.currentDistIndex?' active':'');pr.appendChild(d)});const pl=amState.players[amState.currentDistIndex];document.getElementById('am-dist-msg').textContent='ادي الموبايل لـ '+pl;document.getElementById('am-dist-btn').textContent='أنا '+pl;document.getElementById('am-dist-btn').classList.remove('hidden');document.getElementById('am-cards-view').classList.add('hidden');document.getElementById('am-next-player-btn').classList.add('hidden')}

function amConfirmPlayer(){const pl=amState.players[amState.currentDistIndex];document.getElementById('am-dist-btn').classList.add('hidden');document.getElementById('am-dist-msg').textContent='تم تحديد كارتك يا '+pl;showToast('شوف كروت صحابك! 👀');const cv=document.getElementById('am-cards-view');cv.innerHTML='<p class="cards-container-title">كروت باقي اللاعبين:</p>';amState.players.forEach(p=>{if(p!==pl){const it=document.createElement('div');it.className='card-item';it.innerHTML='<span class="card-name">'+p+'</span><span class="card-word">'+amState.cards[p]+'</span>';cv.appendChild(it)}});cv.classList.remove('hidden');document.getElementById('am-next-player-btn').classList.remove('hidden')}

function amNextDistribute(){amState.currentDistIndex++;if(amState.currentDistIndex>=amState.players.length)startAmRoundPlay();else showAmDist()}

function startAmRoundPlay(){showScreen('anameen-round');document.getElementById('am-round-num').textContent=amState.currentRound;document.getElementById('am-total-rounds').textContent=amState.rounds;showToast('الجولة '+amState.currentRound+' بدأت! 🔥');amState.turnPairs=[];for(let i=0;i<amState.players.length;i++)for(let j=0;j<amState.players.length;j++)if(i!==j)amState.turnPairs.push([amState.players[i],amState.players[j]]);amState.turnPairs=shuffle(amState.turnPairs);amState.turnIndex=0;showAmTurn();startAmTimer()}

function showAmTurn(){if(amState.turnIndex>=amState.turnPairs.length){amState.turnIndex=0;amState.turnPairs=shuffle(amState.turnPairs)}const p=amState.turnPairs[amState.turnIndex];document.getElementById('am-turn-msg').textContent='دلوقتي '+p[0]+' يسأل '+p[1]}
function amNextTurn(){amState.turnIndex++;showAmTurn();showToast('دور جديد! 🎯')}

function startAmTimer(){let tl=amState.time;const tot=amState.time,tt=document.getElementById('am-timer-text'),tc=document.getElementById('am-timer-circle'),cont=document.getElementById('am-timer'),circ=2*Math.PI*70;tt.textContent=tl;cont.classList.remove('danger');tc.style.strokeDashoffset='0';clearInterval(timerInterval);timerInterval=setInterval(()=>{tl--;tt.textContent=tl;tc.style.strokeDashoffset=((tot-tl)/tot*circ).toString();if(tl<=10){cont.classList.add('danger');if(tl>0)playTimerTick()}if(tl<=0){clearInterval(timerInterval);playTimerEnd();showToast('الوقت خلص! وقت التخمين! 🧠');startAmGuess()}},1000)}

function startAmGuess(){amState.guessOrder=shuffle([...amState.players]);amState.guessIndex=0;showAmHandover()}
function showAmHandover(){if(amState.guessIndex>=amState.guessOrder.length){showAmRoundResult();return}showScreen('anameen-handover');const pl=amState.guessOrder[amState.guessIndex];document.getElementById('handover-title').textContent='ادي الموبايل لـ '+pl;document.getElementById('handover-funny').textContent=R(handoverFunny);document.getElementById('handover-meme-text').textContent=R(handoverFunny);const img=document.getElementById('handover-meme-img-src');img.src=R(handoverImgs);img.style.display=''}

function showAmGuessFromHandover(){showScreen('anameen-guess');const pl=amState.guessOrder[amState.guessIndex];document.getElementById('am-guess-msg').innerHTML='يلا يا <span style="color:#FFD700;font-weight:900">'+pl+'</span> خمن انت مين!';const cw=amState.cards[pl];let wp=amState.allWords.filter(w=>w!==cw);let opts=shuffle([cw,...shuffle(wp).slice(0,5)]);const od=document.getElementById('am-guess-options');od.innerHTML='';opts.forEach(w=>{const b=document.createElement('button');b.className='guess-btn';b.textContent=w;b.onclick=()=>amGuess(pl,w,cw,od);od.appendChild(b)});document.getElementById('am-guess-result').classList.add('hidden');document.getElementById('am-guess-meme').classList.add('hidden');document.getElementById('am-guess-next').classList.add('hidden')}

function amGuess(pl,ch,cor,cont){const bs=cont.querySelectorAll('.guess-btn');bs.forEach(b=>{b.disabled=true;if(b.textContent===cor)b.classList.add('correct');if(b.textContent===ch&&ch!==cor)b.classList.add('wrong')});const rd=document.getElementById('am-guess-result');rd.classList.remove('hidden','correct-result','wrong-result');const mc=document.getElementById('am-guess-meme');mc.classList.remove('hidden');if(ch===cor){amState.scores[pl]+=2;rd.textContent=R(correctTexts)+' +2 نقطة!';rd.classList.add('correct-result');document.getElementById('am-guess-meme-img').src='meme-correct.png';document.getElementById('am-guess-meme-text').textContent=R(correctTexts);playSuccess();showToast('برافو! +2 نقطة! 🎉')}else{amState.scores[pl]-=1;rd.textContent=R(wrongTexts)+' كان: '+cor;rd.classList.add('wrong-result');document.getElementById('am-guess-meme-img').src='meme-wrong.png';document.getElementById('am-guess-meme-text').textContent=R(wrongTexts);playError();showToast('غلط! -1 نقطة! 💀')}document.getElementById('am-guess-next').classList.remove('hidden')}

function amNextGuess(){amState.guessIndex++;showAmHandover()}
function showAmRoundResult(){showScreen('anameen-round-result');document.getElementById('am-rr-round').textContent=amState.currentRound;document.getElementById('am-rr-meme-text').textContent=R(roundResultMemes);const sp=[...amState.players].sort((a,b)=>amState.scores[b]-amState.scores[a]);document.getElementById('am-round-scores').innerHTML=renderScores(sp,amState.scores);const btn=document.querySelector('#anameen-round-result .big-btn');btn.textContent=amState.currentRound>=amState.rounds?'النتيجة النهائية':'الجولة الجاية ←'}
function amNextRound(){if(amState.currentRound>=amState.rounds)showAmFinal();else startAmRound()}

function showAmFinal(){showScreen('anameen-final');const sp=[...amState.players].sort((a,b)=>amState.scores[b]-amState.scores[a]);document.getElementById('am-final-scores').innerHTML=renderScores(sp,amState.scores);document.getElementById('am-winner').textContent=sp[0]+' '+R(winnerTexts);document.getElementById('am-final-meme-text').textContent='الأسطورة فازت! مبروووك! 🏆';createConfetti();playWin()}

function renderScores(sp,sc){let h='<table class="scores-table">';sp.forEach((p,i)=>{const m=i===0?'🥇':i===1?'🥈':i===2?'🥉':'';h+='<tr><td><span class="rank-badge'+(i===0?' rank-1':'')+'">'+(i+1)+'</span> '+m+' '+p+'</td><td>'+sc[p]+' نقطة</td></tr>'});return h+'</table>'}

function createConfetti(){const cols=['#FFD700','#FF6B6B','#4ECDC4','#45B7D1','#DDA0DD','#FF9800','#E91E63'];for(let i=0;i<50;i++){setTimeout(()=>{const c=document.createElement('div');c.style.cssText='position:fixed;top:-10px;left:'+Math.random()*100+'%;width:'+(Math.random()*10+4)+'px;height:'+(Math.random()*10+4)+'px;background:'+cols[Math.floor(Math.random()*cols.length)]+';border-radius:'+(Math.random()>.5?'50%':'2px')+';z-index:999;pointer-events:none;animation:confetti-fall '+(Math.random()*2+2)+'s linear forwards;';document.body.appendChild(c);setTimeout(()=>c.remove(),4000)},i*60)}}

// ============ KALMA ============
const kalmaWords=[
{word:'مدرسة',forbidden:['طلاب','معلم','فصل','تعليم']},{word:'تليفون',forbidden:['موبايل','اتصال','شاشة','رقم']},{word:'سينما',forbidden:['فيلم','شاشة','تذكرة','ممثل']},{word:'مستشفى',forbidden:['دكتور','مريض','علاج','سرير']},{word:'بحر',forbidden:['ماية','سمك','رمل','شاطئ']},{word:'طيارة',forbidden:['سفر','سما','مطار','طيار']},{word:'قطار',forbidden:['سكة حديد','محطة','ركاب','سفر']},{word:'كورة',forbidden:['ملعب','لاعب','جون','ماتش']},{word:'مطبخ',forbidden:['طبخ','أكل','بوتاجاز','حلة']},{word:'كتاب',forbidden:['قراءة','صفحات','مكتبة','قلم']},{word:'شمس',forbidden:['نور','حر','سما','نهار']},{word:'قمر',forbidden:['ليل','سما','نور','نجوم']},{word:'شجرة',forbidden:['ورق','خشب','ضل','جذور']},{word:'عربية',forbidden:['سواقة','موتور','بنزين','طريق']},{word:'كمبيوتر',forbidden:['شاشة','كيبورد','ماوس','إنترنت']},{word:'ثلاجة',forbidden:['برد','أكل','تلج','مطبخ']},{word:'تلفزيون',forbidden:['شاشة','قنوات','ريموت','مسلسل']},{word:'قهوة',forbidden:['مشروب','بن','فنجان','صحي']},{word:'شاي',forbidden:['مشروب','سخن','كوباية','سكر']},{word:'خبز',forbidden:['عيش','فرن','طحين','أكل']},{word:'لحمة',forbidden:['أكل','خروف','جزار','شوي']},{word:'فراخ',forbidden:['دجاج','أكل','شوي','ريش']},{word:'سمك',forbidden:['بحر','صيد','ماية','زعانف']},{word:'أسد',forbidden:['حيوان','ملك','غابة','زئير']},{word:'قطة',forbidden:['حيوان','مياو','فرو','بيت']},{word:'كلب',forbidden:['حيوان','نباح','وفي','عض']},{word:'فيل',forbidden:['حيوان','كبير','خرطوم','ناب']},{word:'قرد',forbidden:['حيوان','موز','شجرة','ذكي']},{word:'حصان',forbidden:['حيوان','ركوب','سباق','حافر']},{word:'ثعبان',forbidden:['حيوان','سم','زحف','خطر']},{word:'عصفور',forbidden:['طير','سما','غنا','ريش']},{word:'بطيخ',forbidden:['فاكهة','أحمر','صيف','بزر']},{word:'موز',forbidden:['فاكهة','أصفر','قشر','قرد']},{word:'تفاح',forbidden:['فاكهة','أحمر','أخضر','شجرة']},{word:'برتقال',forbidden:['فاكهة','عصير','لون','قشر']},{word:'مانجو',forbidden:['فاكهة','عصير','صيف','أصفر']},{word:'بيتزا',forbidden:['أكل','جبنة','فرن','إيطالي']},{word:'كشري',forbidden:['أكل','مصري','عدس','مكرونة']},{word:'فول',forbidden:['أكل','فطار','حبوب','طعمية']},{word:'طعمية',forbidden:['أكل','مقلي','فول','ساندوتش']},{word:'شاورما',forbidden:['أكل','لحمة','ساندوتش','سوري']},{word:'آيس كريم',forbidden:['حلو','برد','تلج','صيف']},{word:'شوكولاتة',forbidden:['حلو','كاكاو','بني','سكر']},{word:'كيك',forbidden:['حلو','عيد ميلاد','فرن','كريمة']},{word:'أرز',forbidden:['أكل','حبوب','طبخ','أبيض']},{word:'مكرونة',forbidden:['أكل','إيطالي','صلصة','سلق']},{word:'بيض',forbidden:['فراخ','فطار','قلي','أبيض']},{word:'جبنة',forbidden:['لبن','أبيض','أكل','فطار']},{word:'لبن',forbidden:['أبيض','بقرة','شرب','كالسيوم']},{word:'طماطم',forbidden:['أحمر','صلصة','خضار','سلطة']},{word:'بطاطس',forbidden:['خضار','مقلي','شيبسي','أكل']},{word:'ملوخية',forbidden:['أكل','مصري','أخضر','فراخ']},{word:'محشي',forbidden:['أكل','ورق عنب','كوسة','أرز']},{word:'حمام',forbidden:['ماية','دش','صابون','نضافة']},{word:'سرير',forbidden:['نوم','مرتبة','مخدة','أوضة']},{word:'كرسي',forbidden:['قعاد','خشب','ترابيزة','مكتب']},{word:'باب',forbidden:['فتح','قفل','مفتاح','خشب']},{word:'شباك',forbidden:['زجاج','هوا','فتح','ستارة']},{word:'مفتاح',forbidden:['باب','قفل','فتح','حديد']},{word:'ساعة',forbidden:['وقت','عقارب','إيد','دقيقة']},{word:'شنطة',forbidden:['حاجات','شيل','سفر','مدرسة']},{word:'جزمة',forbidden:['رجل','لبس','مشي','جلد']},{word:'خاتم',forbidden:['إصبع','فرح','ذهب','خطوبة']},{word:'صابون',forbidden:['نضافة','إيد','غسيل','رغوة']},{word:'مرايا',forbidden:['شكل','زجاج','انعكاس','حمام']},{word:'لمبة',forbidden:['نور','كهربا','ضلمة','إضاءة']},{word:'مروحة',forbidden:['هوا','كهربا','حر','سقف']},{word:'تكييف',forbidden:['برد','هوا','كهربا','حر']},{word:'غسالة',forbidden:['هدوم','ماية','نضافة','غسيل']},{word:'سكينة',forbidden:['قطع','مطبخ','حادة','أكل']},{word:'كوباية',forbidden:['شرب','ماية','زجاج','مطبخ']},{word:'كاميرا',forbidden:['صورة','تصوير','فيديو','عدسة']},{word:'قلم',forbidden:['كتابة','حبر','ورق','مدرسة']},{word:'فانوس',forbidden:['رمضان','نور','شمعة','زينة']},{word:'هدية',forbidden:['عيد ميلاد','فرح','مفاجأة','ورق']},{word:'وردة',forbidden:['زهرة','ريحة','حلوة','أحمر']},{word:'جبل',forbidden:['عالي','طبيعة','صخر','تسلق']},{word:'صحراء',forbidden:['رمل','حر','جمل','جاف']},{word:'مطر',forbidden:['ماية','سحاب','شتا','شمسية']},{word:'نار',forbidden:['سخن','حرق','لهب','أحمر']},{word:'هرم',forbidden:['مصر','فراعنة','مثلث','حجر']},{word:'دكتور',forbidden:['مستشفى','مريض','علاج','دوا']},{word:'شيف',forbidden:['طبخ','مطبخ','أكل','مطعم']},{word:'لاعب',forbidden:['كورة','رياضة','ملعب','فريق']},{word:'ممثل',forbidden:['فيلم','مسلسل','تمثيل','سينما']},{word:'سواق',forbidden:['عربية','طريق','قيادة','دركسيون']},{word:'روبوت',forbidden:['آلة','حديد','ذكاء','صناعي']},{word:'كنز',forbidden:['ذهب','صندوق','مخبأ','قرصان']},{word:'بطارية',forbidden:['كهربا','شحن','طاقة','موبايل']},{word:'دراجة',forbidden:['عجلة','ركوب','بدال','طريق']},{word:'واي فاي',forbidden:['إنترنت','اتصال','شبكة','باسورد']},{word:'سيلفي',forbidden:['صورة','كاميرا','وش','موبايل']},{word:'ضحكة',forbidden:['فرح','هاها','سعادة','نكتة']},{word:'سباحة',forbidden:['ماية','حمام سباحة','بحر','رياضة']},{word:'شطرنج',forbidden:['لعبة','ملك','ذكاء','أبيض']},{word:'ملاهي',forbidden:['ألعاب','فرح','أطفال','سرعة']},{word:'فندق',forbidden:['سفر','نوم','غرفة','حجز']},{word:'مطعم',forbidden:['أكل','جرسون','طلب','منيو']},{word:'تاكسي',forbidden:['عربية','سواق','أجرة','ركوب']},{word:'فرح',forbidden:['عريس','عروسة','رقص','زفاف']},{word:'عيد ميلاد',forbidden:['تورتة','شموع','هدايا','سنة']},{word:'رمضان',forbidden:['صيام','فطار','فانوس','شهر']},{word:'امتحان',forbidden:['دراسة','أسئلة','ورقة','درجات']},{word:'صاروخ',forbidden:['فضاء','سما','سرعة','نار']},{word:'بالونة',forbidden:['هوا','عيد ميلاد','ألوان','فرقعة']},{word:'ميكروفون',forbidden:['صوت','غنا','كلام','مسرح']},{word:'مصعد',forbidden:['أسانسير','طلوع','نزول','عمارة']},{word:'حديقة حيوان',forbidden:['حيوانات','أقفاص','زيارة','أطفال']},{word:'إشارة مرور',forbidden:['أحمر','أخضر','أصفر','طريق']},{word:'بريد',forbidden:['رسالة','طابع','إرسال','ظرف']},{word:'نفق',forbidden:['تحت','طريق','ظلام','عبور']},{word:'بركان',forbidden:['نار','حمم','جبل','انفجار']},{word:'قوس قزح',forbidden:['ألوان','مطر','سما','سبعة']},{word:'فيروس',forbidden:['مرض','كمبيوتر','عدوى','خطر']},{word:'مغناطيس',forbidden:['حديد','جذب','قوة','شمال']},{word:'باراشوت',forbidden:['سما','قفز','هبوط','طيارة']},{word:'دومينو',forbidden:['لعبة','أسود','أبيض','نقط']},{word:'متحف',forbidden:['آثار','تاريخ','قديم','معرض']},{word:'أتوبيس',forbidden:['ركاب','محطة','سواق','طريق']},{word:'ترابيزة',forbidden:['خشب','أكل','كرسي','سطح']}
];

let klState={players:[],rounds:3,time:60,currentRound:0,currentPlayerIndex:0,scores:{},usedWordIndices:[],currentWordIndex:-1,timerRunning:false,timeLeft:0};

function showKalmaSetup(){showScreen('kalma-setup');const l=document.getElementById('kl-players-list');l.innerHTML='';klState.players=['',''];for(let i=0;i<2;i++)addKlPI(i);const rd=document.getElementById('kl-rounds-options');rd.innerHTML='';[1,2,3,4,5].forEach(r=>{const b=document.createElement('button');b.className='option-btn'+(r===3?' selected':'');b.textContent=r;b.onclick=()=>{playClick();rd.querySelectorAll('.option-btn').forEach(x=>x.classList.remove('selected'));b.classList.add('selected');klState.rounds=r};rd.appendChild(b)});const td=document.getElementById('kl-time-options');td.innerHTML='';[30,60,90,120,180].forEach(t=>{const b=document.createElement('button');b.className='option-btn'+(t===60?' selected':'');b.textContent=t+'ث';b.onclick=()=>{playClick();td.querySelectorAll('.option-btn').forEach(x=>x.classList.remove('selected'));b.classList.add('selected');klState.time=t};td.appendChild(b)});klState.rounds=3;klState.time=60;document.getElementById('kl-error').textContent=''}
function addKlPI(i){const l=document.getElementById('kl-players-list');const r=document.createElement('div');r.className='player-input-row';r.innerHTML='<input type="text" placeholder="اسم اللاعب '+(i+1)+'" oninput="klState.players['+i+']=this.value">'+(i>=2?'<button class="remove-player-btn" onclick="playClick();this.parentElement.remove()">×</button>':'');l.appendChild(r)}
function addKlPlayer(){if(klState.players.length>=10)return;const i=klState.players.length;klState.players.push('');addKlPI(i)}
function getKlP(){const inp=document.querySelectorAll('#kl-players-list input');let p=[];inp.forEach(i=>{if(i.value.trim())p.push(i.value.trim())});return p}

function startKalma(){const p=getKlP();const e=document.getElementById('kl-error');if(p.length<2){e.textContent='لازم لاعبين على الأقل!';playError();return}klState.players=p;klState.scores={};p.forEach(x=>klState.scores[x]=0);klState.currentRound=0;klState.usedWordIndices=[];playSuccess();klNextRound()}

function klNextRound(){klState.currentRound++;if(klState.currentRound>klState.rounds){showKlFinal();return}klState.currentPlayerIndex=0;klStartRound()}

function klStartRound(){showScreen('kalma-turn');document.getElementById('kl-round-num').textContent=klState.currentRound;document.getElementById('kl-total-rounds').textContent=klState.rounds;showToast('الجولة '+klState.currentRound+' بدأت! 🔥');klState.timeLeft=klState.time;klState.timerRunning=true;klState.currentPlayerIndex=0;klShowPlayer();klShowWord();klStartTimer()}

function klShowPlayer(){const p=klState.players[klState.currentPlayerIndex];document.getElementById('kl-player-name').textContent='دور: '+p;document.getElementById('kl-turn-notif').textContent='دورك دلوقتي!'}
function klAdvancePlayer(){klState.currentPlayerIndex=(klState.currentPlayerIndex+1)%klState.players.length;klShowPlayer();klShowWord();showToast('كلمة جديدة! 🎯')}

function klShowWord(){let av=[];for(let i=0;i<kalmaWords.length;i++)if(!klState.usedWordIndices.includes(i))av.push(i);if(av.length===0){klState.usedWordIndices=[];av=kalmaWords.map((_,i)=>i)}const idx=av[Math.floor(Math.random()*av.length)];klState.usedWordIndices.push(idx);klState.currentWordIndex=idx;const w=kalmaWords[idx];document.getElementById('kl-main-word').textContent=w.word;const fd=document.getElementById('kl-forbidden-words');fd.innerHTML='';w.forbidden.forEach(f=>{const s=document.createElement('span');s.className='forbidden-word';s.textContent=f;fd.appendChild(s)})}

function klStartTimer(){const tt=document.getElementById('kl-timer-text'),tc=document.getElementById('kl-timer-circle'),cont=document.getElementById('kl-timer'),tot=klState.time,circ=2*Math.PI*42;tt.textContent=klState.timeLeft;cont.classList.remove('danger');tc.style.strokeDashoffset='0';clearInterval(timerInterval);timerInterval=setInterval(()=>{klState.timeLeft--;tt.textContent=klState.timeLeft;tc.style.strokeDashoffset=((tot-klState.timeLeft)/tot*circ).toString();if(klState.timeLeft<=10){cont.classList.add('danger');if(klState.timeLeft>0)playTimerTick()}if(klState.timeLeft<=0){clearInterval(timerInterval);klState.timerRunning=false;playTimerEnd();showToast('الوقت خلص! 🕐');klEndRound()}},1000)}

function klCorrect(){if(!klState.timerRunning)return;const p=klState.players[klState.currentPlayerIndex];klState.scores[p]+=1;playSuccess();showToast('برافو يا '+p+'! +1 نقطة! ✅');const c=document.getElementById('kl-word-card');c.classList.add('flash-green');setTimeout(()=>c.classList.remove('flash-green'),400);klAdvancePlayer()}
function klWrong(){if(!klState.timerRunning)return;const p=klState.players[klState.currentPlayerIndex];klState.scores[p]-=1;playError();showToast('أوبس يا '+p+'! -1 نقطة! ❌');const c=document.getElementById('kl-word-card');c.classList.add('flash-red');setTimeout(()=>c.classList.remove('flash-red'),400);klAdvancePlayer()}
function klSkip(){if(!klState.timerRunning)return;playClick();showToast('تم التخطي! ⏭️');klAdvancePlayer()}
function klEndRound(){clearInterval(timerInterval);klState.timerRunning=false;showKlRoundResult()}

function showKlRoundResult(){showScreen('kalma-round-result');document.getElementById('kl-rr-round').textContent=klState.currentRound;document.getElementById('kl-rr-meme-text').textContent=R(roundResultMemes);const sp=[...klState.players].sort((a,b)=>klState.scores[b]-klState.scores[a]);document.getElementById('kl-round-scores').innerHTML=renderScores(sp,klState.scores);const btn=document.querySelector('#kalma-round-result .big-btn');if(klState.currentRound>=klState.rounds){btn.textContent='النتيجة النهائية';btn.onclick=function(){playClick();showKlFinal()}}else{btn.textContent='الجولة الجاية ←';btn.onclick=function(){playClick();klNextRound()}}}

function showKlFinal(){showScreen('kalma-final');const sp=[...klState.players].sort((a,b)=>klState.scores[b]-klState.scores[a]);document.getElementById('kl-final-scores').innerHTML=renderScores(sp,klState.scores);document.getElementById('kl-winner').textContent=sp[0]+' '+R(winnerTexts);document.getElementById('kl-final-meme-text').textContent='ملك الكلام اللي ميتقالش! 🏆';createConfetti();playWin()}

// ============ TRUTH OR DARE ============
const truthQs=['ما أغرب شيء فعلته في حياتك؟','لو عندك يوم واحد تكون فيه مشهور هتعمل إيه؟','مين أكتر شخص بتغير منه؟','إيه أكتر حاجة بتخاف منها؟','لو هتسافر بكرة هتروح فين؟','إيه أكتر كدبة كدبتها وندمت عليها؟','مين أول شخص بتفكر فيه لما تصحى؟','لو هتغير حاجة في شكلك هتغير إيه؟','إيه أكتر أكلة ممكن تاكلها كل يوم؟','لو انت حيوان هتكون إيه؟','إيه أغرب حلم حلمت بيه؟','مين أقرب صاحب ليك ولييه؟','لو هتختار قوة خارقة هتختار إيه؟','إيه أكتر حاجة بتعصبك؟','لو رجعت بالزمن هتغير إيه؟','إيه أكتر سر عندك؟','مين أكتر شخص بيضحكك؟','إيه آخر حاجة عيطت عليها؟','لو الدنيا هتخلص بكرة هتعمل إيه النهاردة؟','إيه أكتر حاجة بتكسف منها؟','لو لقيت مليون جنيه هتعمل بيهم إيه؟','مين اللي تحب تتبادل معاه حياته ليوم واحد؟','إيه أكتر مسلسل اتفرجت عليه أكتر من مرة؟','لو هتفتح مشروع هيكون إيه؟','إيه أكبر فشل في حياتك وإزاي اتعاملت معاه؟'];
const dareQs=['قل نكتة مضحكة أمام الجميع!','قلد صوت حيوان لمدة 10 ثواني!','ارقص لمدة 15 ثانية!','اتصل بآخر شخص كلمته وقوله وحشتني!','اعمل وش مضحك وخلي حد يصورك!','قلد شخص من الموجودين والباقي يخمنوا مين!','غني أغنية بصوت عالي!','قول كلمة حب لأي حد موجود!','امشي زي البطريق لمدة 10 ثواني!','اعمل حركة يوجا!','قول جملة من فيلم مشهور بنفس الطريقة!','اعمل نفسك بتعيط لمدة 10 ثواني!','اتكلم بلهجة مختلفة لمدة دقيقة!','قول أحلى كومبلمنت لكل واحد موجود!','اعمل تقليد لمذيع أخبار!','ابعت ستوري على انستجرام بحاجة غريبة!','اعمل صوت سيارة إسعاف!','قلد مشهد من فيلم مصري!','اتكلم من غير ما تستخدم حرف الألف لمدة 30 ثانية!','اعمل وش زعلان وقول خطاب تحفيزي!'];

let tdState={players:[],currentIndex:0};
function showTdSetup(){showScreen('td-setup');const l=document.getElementById('td-players-list');l.innerHTML='';tdState.players=['',''];for(let i=0;i<2;i++){const r=document.createElement('div');r.className='player-input-row';r.innerHTML='<input type="text" placeholder="اسم اللاعب '+(i+1)+'" oninput="tdState.players['+i+']=this.value">'+(i>=2?'<button class="remove-player-btn" onclick="playClick();this.parentElement.remove()">×</button>':'');l.appendChild(r)}document.getElementById('td-error').textContent=''}
function addTdPlayer(){if(tdState.players.length>=10)return;const i=tdState.players.length;tdState.players.push('');const l=document.getElementById('td-players-list');const r=document.createElement('div');r.className='player-input-row';r.innerHTML='<input type="text" placeholder="اسم اللاعب '+(i+1)+'" oninput="tdState.players['+i+']=this.value"><button class="remove-player-btn" onclick="playClick();this.parentElement.remove()">×</button>';l.appendChild(r)}

function startTd(){const inp=document.querySelectorAll('#td-players-list input');let p=[];inp.forEach(i=>{if(i.value.trim())p.push(i.value.trim())});if(p.length<2){document.getElementById('td-error').textContent='لازم لاعبين على الأقل!';playError();return}tdState.players=p;playSuccess();tdPickPlayer()}

function tdPickPlayer(){showScreen('td-play');const p=R(tdState.players);document.getElementById('td-current-player').textContent=p;document.getElementById('td-play-meme-text').textContent=R(tdMemes);document.getElementById('td-challenge-card').classList.add('hidden');document.getElementById('td-next-btn').classList.add('hidden')}

function tdTruth(){const card=document.getElementById('td-challenge-card');card.classList.remove('hidden','dare-card');card.classList.add('truth-card');document.getElementById('td-challenge-text').textContent=R(truthQs);document.getElementById('td-next-btn').classList.remove('hidden');playClick()}
function tdDare(){const card=document.getElementById('td-challenge-card');card.classList.remove('hidden','truth-card');card.classList.add('dare-card');document.getElementById('td-challenge-text').textContent=R(dareQs);document.getElementById('td-next-btn').classList.remove('hidden');playClick()}
function tdSkipChallenge(){showToast('تم التخطي! ⏭️');document.getElementById('td-challenge-card').classList.add('hidden')}
function tdNext(){tdPickPlayer()}

// ============ QUIZ ============
const quizPackageIcons={'أسئلة عامة':'🌍','أنمي':'🎌','كورة':'⚽','تاريخ':'📜','أفلام':'🎬'};
const quizData={
'أسئلة عامة':[
{q:'ما هي أكبر قارة في العالم؟',options:['آسيا','أفريقيا','أوروبا','أمريكا'],answer:'آسيا'},
{q:'كم عدد ألوان قوس قزح؟',options:['5','6','7','8'],answer:'7'},
{q:'ما هو أطول نهر في العالم؟',options:['النيل','الأمازون','المسيسيبي','الدانوب'],answer:'النيل'},
{q:'ما هي عاصمة فرنسا؟',options:['لندن','باريس','روما','مدريد'],answer:'باريس'},
{q:'كم عدد الكواكب في المجموعة الشمسية؟',options:['7','8','9','10'],answer:'8'},
{q:'ما هو أكبر محيط في العالم؟',options:['الأطلسي','الهادي','الهندي','المتجمد'],answer:'الهادي'},
{q:'ما هي أصغر دولة في العالم؟',options:['موناكو','الفاتيكان','سان مارينو','مالطا'],answer:'الفاتيكان'},
{q:'كم سنة في القرن؟',options:['10','50','100','1000'],answer:'100'},
{q:'ما هو الغاز الذي نتنفسه؟',options:['نيتروجين','أكسجين','هيدروجين','كربون'],answer:'أكسجين'},
{q:'ما هي أكبر صحراء في العالم؟',options:['الصحراء الكبرى','صحراء جوبي','الربع الخالي','كالاهاري'],answer:'الصحراء الكبرى'}
],
'أنمي':[
{q:'مين بطل أنمي ناروتو؟',options:['ساسكي','ناروتو','كاكاشي','إيتاشي'],answer:'ناروتو'},
{q:'إيه اسم قبعة لوفي؟',options:['قبعة القش','القبعة الحمراء','قبعة الملك','قبعة البحر'],answer:'قبعة القش'},
{q:'مين بيقتل العمالقة في هجوم العمالقة؟',options:['فريق الاستطلاع','الشرطة','الجيش','البحرية'],answer:'فريق الاستطلاع'},
{q:'إيه اسم تقنية غوكو المشهورة؟',options:['راسينجان','كاميهاميها','شيدوري','بانكاي'],answer:'كاميهاميها'},
{q:'مين ده سينان؟',options:['محقق صغير','لاعب كورة','ساموراي','قرصان'],answer:'محقق صغير'},
{q:'إيه اسم سيف زورو الأسود؟',options:['شوسوي','إنما','يورو','وادو'],answer:'شوسوي'},
{q:'كام ذيل عند ناروتو؟',options:['7','8','9','10'],answer:'9'},
{q:'مين أخو ساسكي الكبير؟',options:['كاكاشي','إيتاشي','أوروتشيمارو','جيريا'],answer:'إيتاشي'},
{q:'إيه الفاكهة اللي أكلها لوفي؟',options:['فاكهة النار','فاكهة المطاط','فاكهة الظلام','فاكهة الثلج'],answer:'فاكهة المطاط'},
{q:'مين معلم ناروتو الأول؟',options:['كاكاشي','جيريا','إيروكا','أوروتشيمارو'],answer:'إيروكا'}
],
'كورة':[
{q:'مين أكتر لاعب فاز بالكرة الذهبية؟',options:['رونالدو','ميسي','نيمار','مبابي'],answer:'ميسي'},
{q:'كام لاعب في فريق كورة القدم؟',options:['9','10','11','12'],answer:'11'},
{q:'فين اتعمل أول كأس عالم؟',options:['البرازيل','إيطاليا','أوروجواي','إنجلترا'],answer:'أوروجواي'},
{q:'مين الهداف التاريخي للمنتخب المصري؟',options:['أبو تريكة','حسام حسن','صلاح','متعب'],answer:'حسام حسن'},
{q:'كام دقيقة الماتش الرسمي؟',options:['80','90','100','120'],answer:'90'},
{q:'إيه لون قميص البرازيل الأساسي؟',options:['أزرق','أخضر','أصفر','أبيض'],answer:'أصفر'},
{q:'مين فاز بكأس العالم 2022؟',options:['فرنسا','البرازيل','الأرجنتين','ألمانيا'],answer:'الأرجنتين'},
{q:'كام بطولة دوري أبطال فاز بيها ريال مدريد؟',options:['10','12','15','8'],answer:'15'},
{q:'مين أسرع لاعب في العالم؟',options:['صلاح','مبابي','فينيسيوس','هالاند'],answer:'مبابي'},
{q:'في أنهي سنة مصر وصلت كأس العالم آخر مرة؟',options:['2014','2018','2010','2006'],answer:'2018'}
],
'تاريخ':[
{q:'مين بنى الأهرامات؟',options:['الرومان','الفراعنة','العرب','الفرس'],answer:'الفراعنة'},
{q:'في أنهي سنة اكتشف كولومبوس أمريكا؟',options:['1492','1500','1453','1510'],answer:'1492'},
{q:'مين فتح القسطنطينية؟',options:['صلاح الدين','محمد الفاتح','طارق بن زياد','خالد بن الوليد'],answer:'محمد الفاتح'},
{q:'إيه أقدم حضارة في التاريخ؟',options:['المصرية','السومرية','الإغريقية','الرومانية'],answer:'السومرية'},
{q:'في أنهي سنة بدأت الحرب العالمية الأولى؟',options:['1912','1914','1916','1918'],answer:'1914'},
{q:'مين بنى سور الصين العظيم؟',options:['المغول','الصينيين','اليابانيين','الهنود'],answer:'الصينيين'},
{q:'مين أول رئيس لمصر بعد الثورة؟',options:['عبد الناصر','السادات','نجيب','مبارك'],answer:'نجيب'},
{q:'متى سقطت الأندلس؟',options:['1492','1500','1453','1400'],answer:'1492'},
{q:'مين صاحب نظرية النسبية؟',options:['نيوتن','أينشتاين','هوكينج','تسلا'],answer:'أينشتاين'},
{q:'في أي قرن بدأ الإسلام؟',options:['الخامس','السادس','السابع','الثامن'],answer:'السابع'}
],
'أفلام':[
{q:'مين بيلعب دور جيمس بوند الأخير؟',options:['دانيال كريج','بيرس بروسنان','شون كونري','روجر مور'],answer:'دانيال كريج'},
{q:'إيه اسم الفيلم المصري "اللي بالي بالك"؟',options:['كوميدي','رعب','أكشن','رومانسي'],answer:'كوميدي'},
{q:'مين مخرج فيلم Inception؟',options:['سبيلبرج','نولان','سكورسيزي','تارانتينو'],answer:'نولان'},
{q:'إيه أكتر فيلم حقق إيرادات في التاريخ؟',options:['Titanic','Avatar','Avengers','Star Wars'],answer:'Avatar'},
{q:'مين بطل فيلم الناظر؟',options:['عادل إمام','أحمد حلمي','محمد هنيدي','علاء ولي الدين'],answer:'علاء ولي الدين'},
{q:'كام جزء لفيلم Fast & Furious؟',options:['8','9','10','11'],answer:'10'},
{q:'مين بيلعب دور الجوكر في 2019؟',options:['هيث ليدجر','واكين فينيكس','جاريد ليتو','جاك نيكلسون'],answer:'واكين فينيكس'},
{q:'إيه اسم بطل فيلم عسل أسود؟',options:['أحمد حلمي','محمد سعد','أحمد عز','كريم عبد العزيز'],answer:'أحمد حلمي'},
{q:'في أنهي سنة نزل فيلم Titanic؟',options:['1995','1997','1999','2000'],answer:'1997'},
{q:'مين بطلة فيلم الحفيد؟',options:['فاتن حمامة','شادية','سعاد حسني','ليلى مراد'],answer:'شادية'}
]};

let quizState={selectedPkgs:[],questions:[],currentQ:0,score:0};
function initQuizPackages(){const pk=document.getElementById('quiz-packages');pk.innerHTML='';Object.keys(quizData).forEach(p=>{const b=document.createElement('button');b.className='package-btn';b.innerHTML='<div class="pkg-icon">'+(quizPackageIcons[p]||'📦')+'</div><span>'+p+'</span>';b.onclick=()=>{playClick();b.classList.toggle('selected')};pk.appendChild(b)})}

function startQuiz(){const btns=document.querySelectorAll('#quiz-packages .package-btn');let sel=[];btns.forEach(b=>{if(b.classList.contains('selected'))sel.push(b.querySelector('span').textContent)});if(sel.length===0){document.getElementById('quiz-error').textContent='اختار باكدج واحد على الأقل!';playError();return}quizState.selectedPkgs=sel;quizState.questions=[];sel.forEach(p=>{quizState.questions=quizState.questions.concat(quizData[p].map(q=>({...q,cat:p})))});quizState.questions=shuffle(quizState.questions);quizState.currentQ=0;quizState.score=0;playSuccess();showQuizQ()}

function showQuizQ(){if(quizState.currentQ>=quizState.questions.length){showToast('خلصت كل الأسئلة! سكورك: '+quizState.score+' 🏆');goHome();return}showScreen('quiz-play');const q=quizState.questions[quizState.currentQ];document.getElementById('quiz-q-num').textContent=(quizState.currentQ+1);document.getElementById('quiz-score').textContent=quizState.score;document.getElementById('quiz-cat-badge').textContent=(quizPackageIcons[q.cat]||'')+' '+q.cat;document.getElementById('quiz-question').textContent=q.q;const od=document.getElementById('quiz-options');od.innerHTML='';shuffle(q.options).forEach(o=>{const b=document.createElement('button');b.className='quiz-option-btn';b.textContent=o;b.onclick=()=>quizAnswer(o,q.answer,od);od.appendChild(b)});document.getElementById('quiz-result-msg').classList.add('hidden');document.getElementById('quiz-meme-area').classList.add('hidden');document.getElementById('quiz-next-btn').classList.add('hidden')}

function quizAnswer(ch,cor,cont){const bs=cont.querySelectorAll('.quiz-option-btn');bs.forEach(b=>{b.disabled=true;if(b.textContent===cor)b.classList.add('correct');if(b.textContent===ch&&ch!==cor)b.classList.add('wrong')});const rd=document.getElementById('quiz-result-msg');rd.classList.remove('hidden','correct-result','wrong-result');const mc=document.getElementById('quiz-meme-area');mc.classList.remove('hidden');if(ch===cor){quizState.score++;rd.textContent=R(correctTexts);rd.classList.add('correct-result');document.getElementById('quiz-meme-img').src='meme-correct.png';document.getElementById('quiz-meme-text').textContent=R(correctTexts);document.getElementById('quiz-score').textContent=quizState.score;playSuccess()}else{rd.textContent=R(wrongTexts)+' الإجابة: '+cor;rd.classList.add('wrong-result');document.getElementById('quiz-meme-img').src='meme-wrong.png';document.getElementById('quiz-meme-text').textContent=R(wrongTexts);playError()}document.getElementById('quiz-next-btn').classList.remove('hidden')}
function quizNext(){quizState.currentQ++;showQuizQ()}

// ============ JOKES ============
const jokes=[
'واحد راح للدكتور قاله: يا دكتور أنا كل ما أشرب شاي عيني بتوجعني.\nالدكتور قاله: طلع المعلقة من الكوباية!',
'واحد بخيل مراته ولدت توأم... طلقها بتهمة التزوير!',
'واحد صعيدي ركب أسانسير... لقى مكتوب: هذا المصعد يتسع ل 8 أشخاص.\nقعد يستنى 7!',
'مرة واحد سأل صاحبه: انت ليه بتحط فلوس تحت المخدة؟\nقاله: عشان حسابي يكون أعلى!',
'مرة واحد بلع مفتاح... قعد يفتح بقه عشان يطلع!',
'تلاتة بيتكلموا:\nالأول: أنا ابني ذكي جداً.\nالتاني: أنا ابني عبقري.\nالتالت: أنا ابني بيعرف يشغل الواي فاي!',
'واحد صاحبه سأله: بتحب مين أكتر.. ماما ولا بابا؟\nقاله: بحب الإنترنت!',
'مرة واحد دخل امتحان... كتب في ورقة الإجابة: الله أعلم.\nالمُصحح كتبله: الله نجح وانت رسبت!',
'واحد قال لصاحبه: أنا بحلم إني فراشة!\nصاحبه: وبعدين؟\nقاله: صحيت لقيت نفسي نايم على شماعة!',
'مرة واحد بخيل اشترى عربية... كان بيطفيها في النزول عشان يوفر بنزين!',
'واحد كسلان اشترى ساعة منبه... حطها في التلاجة عشان الوقت يمشي ببطء!',
'واحد راح المطعم قال: عايز أكلة مفيش زيها.\nالجرسون جابله طبق فاضي!',
'مدرس سأل طالب: ليه الحصان بيجري؟\nالطالب: عشان الطريق مش بيمشي!',
'واحد اتصل بصاحبه: الحقني البيت بيتحرق!\nصاحبه: وأنا مالي؟\nقاله: انت اللي ساكن فوقي!',
'واحد بخيل مراته قالتله: عايزة خاتم ألماس.\nقالها: خدي خاتم بصل وابقي حلمي بالباقي!',
'مرة واحد نايم على السرير وأخوه نايم على الأرض.\nأخوه قاله: يابني أنا على الأرض.\nقاله: طب استنى أنزلك بطانية!',
'واحد قال لأبوه: يابا أنا وقعت من الدور العاشر.\nأبوه: اللي يلعب يتحمل!',
'واحد راح يشتري لبس. البياع قاله: ده آخر موضة.\nقاله: أيوه بس أنا مش آخر مرة هلبس!',
'واحد دخل الصيدلية قال: عايز حاجة للصداع.\nالصيدلي: مين اللي عنده صداع؟\nقاله: أنا لسه مجبتوش!',
'واحد سألوه: ليه بتاكل بسرعة كده؟\nقال: بخاف الأكل يبرد وأنا لسه بتسخن!'
];
let currentJoke='';
function showNewJoke(){currentJoke=R(jokes);document.getElementById('joke-text').textContent=currentJoke}
function copyJoke(){navigator.clipboard.writeText(currentJoke).then(()=>showToast('تم نسخ النكتة! 📋')).catch(()=>showToast('مقدرتش أنسخ!'))}

// ============ RIDDLES ============
const riddles=[
{q:'حاجة بتمشي من غير رجلين؟',a:'الساعة'},
{q:'إيه اللي ليه رقبة بس مالوش راس؟',a:'الإزازة'},
{q:'بيت مالوش باب؟',a:'بيت الشعر'},
{q:'حاجة كل ما تاخد منها بتكبر؟',a:'الحفرة'},
{q:'إيه اللي بيمشي من غير ما يتحرك؟',a:'الطريق'},
{q:'حاجة بتشوفها ومتقدرش تلمسها؟',a:'الظل'},
{q:'إيه اللي ليه أسنان بس مبيعضش؟',a:'المشط'},
{q:'ابن أمك وابن أبوك ومش أخوك؟',a:'انت'},
{q:'حاجة لو حطيتها في التلاجة مبتبردش؟',a:'الفلفل'},
{q:'إيه اللي ليه عين ومبيشوفش؟',a:'الإبرة'},
{q:'حاجة بتاكل ومبتشبعش؟',a:'النار'},
{q:'شيء يوجد في الشتاء خمس مرات وفي الصيف ثلاث مرات؟',a:'النقط (حرف الشين)'},
{q:'إيه اللي بيطير من غير جناح وبيعيط من غير عيون؟',a:'السحابة'},
{q:'حاجة كل ما بتزيد بتنقص؟',a:'العمر'},
{q:'إيه اللي ماله أول مالوش آخر؟',a:'الدائرة'},
{q:'ما هو الشيء الذي يسمع بلا أذن ويتكلم بلا لسان؟',a:'التليفون'},
{q:'إيه اللي بيجري ومالوش رجلين؟',a:'الماية'},
{q:'حاجة بتقطع ومبتتقطعش؟',a:'الطريق'},
{q:'إيه اللي بينزل ومش بيطلع؟',a:'المطر'},
{q:'حاجة لونها أخضر في الأرض وأسود في السوق وأحمر في البيت؟',a:'الشاي'}
];
let currentRiddle=null;
function showNewRiddle(){currentRiddle=R(riddles);document.getElementById('riddle-text').textContent=currentRiddle.q;document.getElementById('riddle-answer').textContent='الإجابة: '+currentRiddle.a;document.getElementById('riddle-answer').classList.add('hidden');document.getElementById('riddle-answer-btn').classList.remove('hidden')}
function showRiddleAnswer(){document.getElementById('riddle-answer').classList.remove('hidden');document.getElementById('riddle-answer-btn').classList.add('hidden')}
function copyRiddle(){const t=currentRiddle.q+'\nالإجابة: '+currentRiddle.a;navigator.clipboard.writeText(t).then(()=>showToast('تم نسخ الفزورة! 📋')).catch(()=>showToast('مقدرتش أنسخ!'))}
