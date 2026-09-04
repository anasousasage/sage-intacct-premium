const challengeData={
  month:{title:'Manual month-end slowing you down?',copy:'Close the books faster with automated, intelligent financials.',items:['Save hours on every workflow with specialised agents.','Automate accounts payable, eliminations and consolidations.','Reduce human error at scale.']},
  compliance:{title:'Finding compliance harder to manage?',copy:'With audit-ready controls and industry-aligned structures, you can be confident without constant oversight.',items:['Built-in compliance controls.','Clear audit trails you can trust.','Reporting that keeps pace with compliance.']},
  scale:{title:'Outgrown your current system?',copy:'What worked before won’t support what’s next. Scale with flexible multi-entity control.',items:['Built for multi-entity, multi-currency growth.','Add capability as complexity increases.','No rip-and-replace disruption.']},
  implementation:{title:'Worried about implementation?',copy:'Change doesn’t have to feel risky. Expert-led implementation keeps you on track from day one.',items:['Structured data migration.','Role-based training.','Dedicated support teams.','Costed upfront as part of your quote.']}
};
const featureData={
 ai:{title:'Automate 50-90% of manual finance tasks',intro:'Move from manual work to AI-powered workflows with AI agents trained to understand your business.',points:[['Up to 90% faster close','Close agent standardises close tasks, surfaces issues early, and accelerates your close every period.'],['Process AP 2-3x faster','Accounts Payable agent automates coding, matching, and approvals while reducing manual effort.'],['190M+ potential errors fixed','Assurance agent continuously monitors the books and detects unusual entries early.']],quote:'Implementing Sage Intacct with AI agents has been genuinely transformational for our business.',name:'Danielle Sedef, CFO, Burofour',art:'dashboard'},
 entity:{title:'Scale with flexible multi-entity control',intro:'Multi-entity accounting that keeps pace with your business, so complexity never slows you down.',points:[['One connected view','Manage every entity from a single source of truth.'],['100+ entities consolidated in minutes','Automate eliminations, consolidations and reporting for faster month-end.'],['Expand without complexity','Add entities and structures without re-architecting your system.']],quote:'Sage Intacct was a clear choice because of its impressive multi-entity and multi-currency capabilities.',name:'Celine Okoh, CFO, White Ribbon Alliance',art:'dashboard'},
 ledger:{title:'See your business from every angle',intro:'Bring your financial and operational data together in one intelligent, multi-dimensional ledger.',points:[['Live, role-based dashboards','Give leadership a real-time view with tailored dashboards. No more “end-of-day” reports.'],['Multi-dimensional tagging','Slice and model data performance by entity, customer, location, or project.'],['Instant, audit-ready answers','Ask the Finance Intelligence agent and get instant, auditable answers, insights and trends from your data.']],quote:'The visibility we’ve gained is game-changing. We’re out in front throughout the month.',name:'Cindy Cavanaugh, CFO, Plexcity',art:'map'},
 compliance:{title:'Get trusted numbers and compliance',intro:'Stay in control with built-in compliance, audit trails and AI-supported accuracy.',points:[['Built-in controls','Role-based controls, approvals and audit trails keep every transaction traceable and audit-ready.'],['Responsible AI','Every transaction, approval, and action is fully traceable, so your finance team can stand behind every number.'],['90%+ accuracy','Automate billing, reconciliations and consolidations with AI-generated drafts you can review and approve.']],quote:'Thanks to the transparency we have in Sage Intacct, we know where our money’s going.',name:'Karen Adame, Managing Partner, JumpStart',art:'ledger'}
};
function renderChallenge(k){const d=challengeData[k];document.querySelector('#challenge-title').textContent=d.title;document.querySelector('#challenge-copy').textContent=d.copy;document.querySelector('#challenge-list').innerHTML=d.items.map(x=>`<li><img src="assets/ui/check-green.svg" alt="">${x}</li>`).join('')}
document.querySelectorAll('.challenge-tab').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.challenge-tab').forEach(b=>b.classList.remove('active'));btn.classList.add('active');renderChallenge(btn.dataset.key)}));renderChallenge('month');
(function(){
  const mount=document.querySelector('#challenge-accordion-mobile');
  if(!mount)return;
  const order=['month','compliance','scale','implementation'];
  const icons={month:'icon-point',compliance:'icon-page',scale:'icon-presentation',implementation:'icon-people-chat'};
  mount.innerHTML=order.map((k,i)=>{
    const d=challengeData[k];
    const items=d.items.map(x=>`<li><img src="assets/ui/check-green.svg" alt="">${x}</li>`).join('');
    return `<div class="challenge-acc-item ${i===0?'open':''}" data-key="${k}">
      <button class="challenge-acc-header"><span class="iconbox iconbox-asset ${icons[k]}"></span><span>${d.title}</span><img class="challenge-acc-chevron" src="assets/ui/faq-chevron-down.svg" alt=""></button>
      <div class="challenge-acc-body"><h3>${d.title}</h3><p>${d.copy}</p><ul>${items}</ul></div>
    </div>`;
  }).join('');
  mount.querySelectorAll('.challenge-acc-header').forEach(header=>{
    header.addEventListener('click',()=>{
      const item=header.parentElement;
      const wasOpen=item.classList.contains('open');
      mount.querySelectorAll('.challenge-acc-item').forEach(i=>i.classList.remove('open'));
      if(!wasOpen)item.classList.add('open');
    });
  });
})();
const featureVideoMap={ai:'feature-1.mp4?v=2',entity:'feature-3.mp4',ledger:'feature-2.mp4',compliance:'feature-4.mp4?v=2'};
function renderFeature(k){const d=featureData[k];document.querySelector('#feature-title').textContent=d.title;document.querySelector('#feature-intro').textContent=d.intro;document.querySelector('#feature-points').innerHTML=d.points.map(p=>`<div class="feature-point"><h4>${p[0]}</h4><p>${p[1]}</p></div>`).join('');document.querySelector('#quote-text').textContent=d.quote;const nameParts=d.name.split(/,(.*)/s);document.querySelector('#quote-name').innerHTML=`<b>${nameParts[0]}</b>${nameParts[1]?','+nameParts[1]:''}`;document.querySelector('#quote-card').classList.toggle('align-right',k==='compliance');const video=document.querySelector('#feature-video');if(video){const next=`assets/videos/${featureVideoMap[k]}`;if(video.getAttribute('src')!==next){video.setAttribute('src',next);video.load();const play=video.play();if(play&&play.catch)play.catch(()=>{});}}if(window.__playFeaturePointsAnimation)window.__playFeaturePointsAnimation();}
document.querySelectorAll('.feature-tab').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.feature-tab').forEach(b=>b.classList.remove('active'));btn.classList.add('active');renderFeature(btn.dataset.feature)}));renderFeature('ai');
const industriesLeftData=[
 {name:'Professional Services',photo:'assets/industry-hover/professional-services.png'},
 {name:'Non-profits',photo:'assets/industry-hover/non-profits.png'},
 {name:'Hospitality',photo:'assets/industry-hover/hospitality.png'},
 {name:'SaaS & subscription',photo:'assets/industry-hover/saas.png'},
 {name:'Wholesale distribution',photo:'assets/industry-hover/wholesale.png'},
 {name:'Telecom',photo:'assets/industry-hover/telecom.png'},
 {name:'Private equity',photo:'assets/industry-hover/private-equity.png'}
];
const industriesRightData=[
 {name:'Financial Services',photo:'assets/industry-hover/financial-services.png'},
 {name:'Construction',photo:'assets/industry-hover/construction.png'},
 {name:'Education',photo:'assets/industry-hover/education.png'},
 {name:'Manufacturing',photo:'assets/industry-hover/manufacturing.png'},
 {name:'Energy',photo:'assets/industry-hover/energy.png'},
 {name:'Transport',photo:'assets/industry-hover/transport.png'}
];
function row(item){
 let hoverEl='';
 if(item.photo)hoverEl=`<span class="industry-hover-slot"><img class="industry-hover-photo" src="${item.photo}" alt="" aria-hidden="true"></span>`;
 return `<div class="industry-row ${hoverEl?'has-hover-state':''}"><span class="industry-name">${item.name}</span>${hoverEl}<a class="industry-cta" href="#pricing">Take a product tour</a></div>`;
}
let industriesExpanded=false;
function renderIndustries(){
 const left=industriesExpanded?industriesLeftData:industriesLeftData.slice(0,3);
 const right=industriesExpanded?industriesRightData:industriesRightData.slice(0,3);
 document.querySelector('#industry-left').innerHTML=left.map(row).join('');
 document.querySelector('#industry-right').innerHTML=right.map(row).join('');
 const mobile=document.querySelector('#industry-mobile');
 if(mobile)mobile.innerHTML=[...left,...right].map(row).join('');
}
renderIndustries();
const industriesToggle=document.querySelector('#industries-toggle');
if(industriesToggle){
 industriesToggle.addEventListener('click',()=>{
  industriesExpanded=!industriesExpanded;
  renderIndustries();
  document.querySelector('#industries-toggle-label').textContent=industriesExpanded?'Collapse':'See all industries';
  industriesToggle.classList.toggle('expanded',industriesExpanded);
  if(!industriesExpanded)document.querySelector('.industries')?.scrollIntoView({block:'start',behavior:'smooth'});
 });
}
const faqs=[
 ['What is Sage Intacct?','Sage Intacct is cloud financial management and accounting software for growing businesses and mid-sized organisations that have outgrown basic entry-level accounting tools. It helps finance teams automate accounting processes, manage multiple entities, and gain real-time visibility into performance, so they can make faster decisions without relying on manual reporting and spreadsheets.'],
 ['What are the AI-powered features of Sage Intacct?','<p>Sage Intacct accounting software has built-in, AI-powered finance agents and Sage Copilot to help automate accounting tasks, surface insights, and reduce manual work across AP, close, reporting, and more.</p><p><b>Finance Intelligence agent:</b> A generative AI assistant that answers questions about any report or transaction. Get instant insights, variance analysis, and real-time answers to help your finance team save time and make informed decisions.</p><p><b>Close agent:</b> Tracks close tasks, flags issues, and guides your team through month-end. Helps you close faster by identifying bottlenecks and keeping everything on schedule.</p><p><b>Financial Assurance agent:</b> Scans every journal entry as you post to detect anomalies, duplicates, and unusual transactions in your general ledger—helping prevent errors and fraud before they happen.</p><p><b>Accounts Payable agent:</b> Reads incoming bills, matches them to purchase orders, codes account and department, and flags duplicates automatically. Reduces manual entry errors and adapts to your specific needs over time.</p><p><b>Time agent:</b> Pulls meetings, emails, and docs to auto-populate timesheets, reducing manual time entry and improving project cost accuracy.</p><p><b>Sage Copilot:</b> Uses natural language to find information and uncover insights for you.</p>'],
 ['How much does Sage Intacct cost?','Sage Intacct pricing starts from £1,200 per month, and is tailored to your business based on the platform set up required for your size and industry. You can get an accurate quote built around your specific requirements by speaking to a Sage Intacct expert.'],
 ['What size of business is Sage Intacct designed for?','Sage Intacct is designed for mid-market businesses, typically those with 20 to 1,000+ employees who have outgrown entry-level accounting software. It’s well-suited to businesses with multiple entities, complex revenue streams, or finance teams that need to move beyond manual processing and spreadsheet consolidation.'],
 ['When should a business upgrade from Xero or QuickBooks to Sage Intacct?','You might be ready for Sage Intacct if you’re spending too long on month-end close, juggling multiple entities, handling complex revenue recognition, or struggling to get real-time financial visibility. If your team is stuck in spreadsheets and two or more of these challenges sound familiar, it’s a sign you’ve outgrown your current system.'],
 ['What are Sage Intacct Integrations?','Sage Intacct integrations help reduce manual data entry by connecting your accounting data with other business systems. You can choose from prebuilt integrations in the Sage Intacct Marketplace, with more than 350 partner applications available, or build custom integrations using Sage Intacct’s open API architecture.'],
 ['How does Sage Intacct compare to Sage 50 or Sage Accounting?','Sage Intacct is a customisable financial management software for scaling and mid-sized businesses, designed for organisations that have outgrown off-the-shelf accounting packages such as Sage 50 and Sage Accounting. Common reasons for moving to Sage Intacct include the need for deeper financial insights, managing multiple business entities, seamless integration with other systems, enhanced financial controls, or the ability to tailor and automate business processes.'],
 ['Can I implement Sage Intacct on my own?','To ensure success with Sage Intacct, you must work with Sage Intacct Professional Services or a certified implementation partner. They’ll recommend training, bring in your historical data, and set up your configurations and reporting. They’ll also provide you with post go-live support for a period of time in addition to your regular ongoing support.']
];document.querySelector('#faq-list').innerHTML=faqs.map((f,i)=>`<div class="faq-item ${i===0?'open':''}"><button class="faq-q"><span>${f[0]}</span><img class="faq-icon faq-icon-chevron" src="assets/ui/faq-chevron-down.svg" alt=""><img class="faq-icon faq-icon-close" src="assets/ui/faq-close.svg" alt=""></button><div class="faq-a"><p>${f[1]}</p>${i===0?'<a class="pill pill-green faq-cta" href="#pricing">Take a product tour</a>':''}${i===2?'<a class="pill pill-green faq-cta" href="#pricing">Request pricing</a>':''}</div></div>`).join('');document.querySelectorAll('.faq-q').forEach(q=>q.addEventListener('click',()=>q.parentElement.classList.toggle('open')));
(function(){
  let ytApiPromise=null;
  function loadYouTubeAPI(){
    if(ytApiPromise)return ytApiPromise;
    ytApiPromise=new Promise(resolve=>{
      if(window.YT&&window.YT.Player){resolve(window.YT);return}
      const prevReady=window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady=function(){if(prevReady)prevReady();resolve(window.YT)};
      const tag=document.createElement('script');
      tag.src='https://www.youtube.com/iframe_api';
      document.head.appendChild(tag);
    });
    return ytApiPromise;
  }
  loadYouTubeAPI();
  function resetCard(card,state){
    card.classList.remove('yt-active','yt-loading','yt-ready','playing');
    state.creating=false;
    if(state.loadTimer){clearTimeout(state.loadTimer);state.loadTimer=null;}
    if(state.player){
      try{state.player.destroy()}catch(e){}
      state.player=null;
      state.playerReady=false;
    }
    const old=card.querySelector('.yt-embed');
    if(old){
      const fresh=document.createElement('div');
      fresh.className='yt-embed';
      fresh.dataset.yt=state.videoId;
      old.replaceWith(fresh);
      state.embed=fresh;
    }
  }
  document.querySelectorAll('.video-card').forEach(card=>{
    const embed=card.querySelector('.yt-embed');
    const btn=card.querySelector('.play-btn');
    const localVideo=card.querySelector('video');
    if(!embed||!btn)return;
    if(!btn.querySelector('.play-btn-spinner')){
      const spinner=document.createElement('span');
      spinner.className='play-btn-spinner';
      btn.appendChild(spinner);
    }
    const state={videoId:embed.dataset.yt,embed:embed,localVideo:localVideo,player:null,playerReady:false,creating:false,loadTimer:null};
    card._ytState=state;
    btn.addEventListener('click',()=>{
      document.querySelectorAll('.video-card').forEach(other=>{
        if(other!==card&&other._ytState&&(other.classList.contains('yt-active')))resetCard(other,other._ytState);
      });
      if(card.classList.contains('playing')||card.classList.contains('yt-loading')){
        resetCard(card,state);
        return;
      }
      card.classList.add('yt-active','yt-loading');
      if(state.localVideo)state.localVideo.pause();
      if(state.player&&state.playerReady){
        card.classList.remove('yt-loading');
        card.classList.add('yt-ready');
        state.player.playVideo();
        return;
      }
      // Safety net: if the embed never becomes ready (blocked/slow network,
      // embedding disabled, etc.), fall back to the poster instead of
      // leaving the card stuck on an empty/loading video area.
      state.loadTimer=setTimeout(()=>{resetCard(card,state);},8000);
      if(state.creating)return;
      state.creating=true;
      loadYouTubeAPI().then(YT=>{
        state.player=new YT.Player(state.embed,{
          videoId:state.videoId,
          host:'https://www.youtube-nocookie.com',
          playerVars:{autoplay:1,rel:0,modestbranding:1,playsinline:1,controls:0,disablekb:1,fs:0,iv_load_policy:3,showinfo:0},
          events:{
            onReady:()=>{
              state.playerReady=true;state.creating=false;
              if(state.loadTimer){clearTimeout(state.loadTimer);state.loadTimer=null;}
              card.classList.remove('yt-loading');
              card.classList.add('yt-ready');
            },
            onError:()=>{resetCard(card,state);},
            onStateChange:e=>{
              if(e.data===YT.PlayerState.PLAYING)card.classList.add('playing');
              else if(e.data===YT.PlayerState.ENDED)resetCard(card,state);
              else card.classList.remove('playing');
            }
          }
        });
      });
    });
  });
})();
const customerTrack=document.querySelector('#customer-track');
if(customerTrack){
  const step=()=>{const card=customerTrack.querySelector('.video-card');return card?card.getBoundingClientRect().width+16:360};
  document.querySelector('#customer-prev').addEventListener('click',()=>customerTrack.scrollBy({left:-step(),behavior:'smooth'}));
  document.querySelector('#customer-next').addEventListener('click',()=>customerTrack.scrollBy({left:step(),behavior:'smooth'}));
  // A vertical-intent wheel gesture should always scroll the page, never the
  // track; a horizontal-intent gesture (trackpad swipe) should scroll the
  // track natively (letting the browser's own scroll-snap handle it, rather
  // than reimplementing it — manual scrollLeft nudges fight scroll-snap and
  // get reset). We only ever intervene for the vertical case.
  customerTrack.addEventListener('wheel',e=>{
    if(Math.abs(e.deltaX)<=Math.abs(e.deltaY)){
      e.preventDefault();
      window.scrollBy(0,e.deltaY);
    }
  },{passive:false});
}

(function(){
  const tabs=Array.from(document.querySelectorAll('.feature-tab'));
  const mLabel=document.querySelector('#feature-mobile-label');
  const mPrev=document.querySelector('#feature-mobile-prev');
  const mNext=document.querySelector('#feature-mobile-next');
  if(tabs.length&&mLabel){
    const idx=()=>Math.max(0,tabs.findIndex(t=>t.classList.contains('active')));
    const sync=()=>{mLabel.textContent=tabs[idx()].textContent;};
    tabs.forEach(t=>t.addEventListener('click',sync));
    if(mPrev)mPrev.addEventListener('click',()=>{tabs[(idx()-1+tabs.length)%tabs.length].click();sync();});
    if(mNext)mNext.addEventListener('click',()=>{tabs[(idx()+1)%tabs.length].click();sync();});
    sync();
  }
})();

(function(){
  const track=document.querySelector('#customer-track');
  const cards=track?Array.from(track.querySelectorAll('.video-card')):[];
  const mLabel=document.querySelector('#customer-mobile-label');
  const mPrev=document.querySelector('#customer-mobile-prev');
  const mNext=document.querySelector('#customer-mobile-next');
  if(!track||!cards.length||!mLabel)return;
  const labelFor=card=>{const s=card.querySelector('.video-caption strong');return s?s.textContent:'';};
  let current=0;
  const sync=()=>{mLabel.textContent=labelFor(cards[current]);};
  const go=i=>{current=(i+cards.length)%cards.length;cards[current].scrollIntoView({behavior:'smooth',inline:'start',block:'nearest'});sync();};
  if(mPrev)mPrev.addEventListener('click',()=>go(current-1));
  if(mNext)mNext.addEventListener('click',()=>go(current+1));
  let scrollTimer;
  track.addEventListener('scroll',()=>{
    clearTimeout(scrollTimer);
    scrollTimer=setTimeout(()=>{
      const trackRect=track.getBoundingClientRect();
      let closest=0,closestDist=Infinity;
      cards.forEach((c,i)=>{const d=Math.abs(c.getBoundingClientRect().left-trackRect.left);if(d<closestDist){closestDist=d;closest=i;}});
      current=closest;sync();
    },120);
  },{passive:true});
  sync();
})();

(function(){
  // The three highlighted-outcome blocks in "Real-time visibility" get their
  // own staggered fade/slide-up. It replays every time the feature tab
  // changes (so switching tabs still feels alive) and, unlike a one-shot
  // reveal, resets and re-plays every time the block scrolls back into
  // view - so it reads as genuine scroll-driven motion rather than a
  // single animation you might miss the first time.
  const featuresSection=document.querySelector('#features');
  const pointsContainer=document.querySelector('#feature-points');
  if(!featuresSection||!pointsContainer)return;
  const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function playPointsAnimation(){
    const points=pointsContainer.querySelectorAll('.feature-point');
    points.forEach((p,i)=>{
      p.classList.add('reveal','reveal-point');
      p.classList.remove('is-visible');
      p.style.transitionDelay=(i*150)+'ms';
    });
    if(reduceMotion){points.forEach(p=>p.classList.add('is-visible'));return;}
    requestAnimationFrame(()=>requestAnimationFrame(()=>{
      points.forEach(p=>p.classList.add('is-visible'));
    }));
  }
  window.__playFeaturePointsAnimation=playPointsAnimation;
  if(reduceMotion||!('IntersectionObserver' in window)){
    playPointsAnimation();
    return;
  }
  let lastState=null;
  const io=new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting&&lastState!==true){
        lastState=true;
        playPointsAnimation();
      }else if(!entry.isIntersecting&&lastState!==false){
        lastState=false;
        pointsContainer.querySelectorAll('.feature-point').forEach(p=>p.classList.remove('is-visible'));
      }
    });
  },{threshold:0.2,rootMargin:'0px 0px -10% 0px'});
  io.observe(pointsContainer);
})();

(function(){
  function mark(selector,opts){
    opts=opts||{};
    var variant=opts.variant||'';
    var stagger=opts.stagger||0;
    var delay=opts.delay||0;
    var cap=opts.cap===undefined?8:opts.cap;
    var els=document.querySelectorAll(selector);
    els.forEach(function(el,i){
      el.classList.add('reveal');
      if(variant)el.classList.add(variant);
      var d=delay+Math.min(i,cap)*stagger;
      if(d)el.style.transitionDelay=d+'ms';
    });
  }

  mark('.hero-pill-asset',{delay:0});
  mark('.hero-copy h1',{delay:90});
  mark('.hero-copy p',{delay:180});
  mark('.hero-stats',{delay:270});
  mark('.hero-copy>.pill',{delay:360});
  mark('.ratings',{delay:450});

  document.querySelectorAll('.section-head').forEach(function(head){
    var h2=head.querySelector('h2'),p=head.querySelector('p');
    if(h2){h2.classList.add('reveal');}
    if(p){p.classList.add('reveal');p.style.transitionDelay='140ms';}
  });

  mark('.challenge-tabs',{variant:'reveal-left'});
  mark('.challenge-card',{variant:'reveal-right',delay:100});

  mark('.feature-tabs');
  mark('.feature-art',{variant:'reveal-left'});
  mark('.feature-copy-card',{variant:'reveal-right',delay:100});

  mark('.video-card',{stagger:100,cap:4});

  document.querySelectorAll('.industry-panel').forEach(function(panel,i){
    panel.classList.add('reveal',i===0?'reveal-left':'reveal-right');
  });
  mark('.industries-more',{delay:120});

  mark('.faq-item',{stagger:60,cap:8});

  mark('.pricing-card>div:first-child',{variant:'reveal-left'});
  mark('.pricing-art',{variant:'reveal-right',delay:100});

  var reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  // .video-card sits inside a horizontally-scrolling track, so only the
  // couple of cards visible in that scroll position ever geometrically
  // intersect the viewport — observing each one individually meant cards
  // further along the track stayed at opacity:0 until the user manually
  // scrolled the carousel, making it look like there were only 2 stories.
  // Trigger all of them together off the section instead.
  var videoCards=Array.from(document.querySelectorAll('.video-card'));
  var revealEls=Array.from(document.querySelectorAll('.reveal')).filter(function(el){return videoCards.indexOf(el)===-1;});
  if(reduceMotion||!('IntersectionObserver' in window)){
    revealEls.forEach(function(el){el.classList.add('is-visible');});
    videoCards.forEach(function(el){el.classList.add('is-visible');});
    return;
  }
  var io=new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  },{threshold:0.15,rootMargin:'0px 0px -8% 0px'});
  revealEls.forEach(function(el){io.observe(el);});
  var customerSection=document.querySelector('#customers');
  if(customerSection&&videoCards.length){
    var ioCustomers=new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          videoCards.forEach(function(el){el.classList.add('is-visible');});
          ioCustomers.unobserve(entry.target);
        }
      });
    },{threshold:0.15,rootMargin:'0px 0px -8% 0px'});
    ioCustomers.observe(customerSection);
  }
})();
