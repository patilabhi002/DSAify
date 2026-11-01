var T=[
{n:"Introduction to DSA",d:"A data structure stores data in an organised way. An algorithm is a step-by-step method to solve a problem. Together they decide how fast and how light a program is.",p:["Data structure: how data is arranged","Algorithm: steps to solve a task","Efficiency is measured as time and space complexity"]},
{n:"Array",d:"A fixed-size list of items stored side by side in memory, read by index.",p:["Reading by index is O(1)","Inserting in the middle is O(n)","Used for marks lists, images, tables"]},
{n:"Linked list",d:"Nodes where each one holds a value and a pointer to the next node.",p:["Easy to insert and delete","No jump to the nth item, so search is O(n)","Types: singly, doubly, circular"]},
{n:"Stack",d:"Last in, first out (LIFO). Think of a pile of plates.",p:["Operations: push, pop, peek","Used in undo, brackets checking, recursion","Push and pop are O(1)"]},
{n:"Queue",d:"First in, first out (FIFO). Think of a ticket line.",p:["Operations: enqueue, dequeue","Used in scheduling and printers","Variants: circular queue, priority queue"]},
{n:"Tree",d:"Data arranged in levels with a root and child nodes, like the DSA logo.",p:["Binary tree: at most two children per node","Binary search tree keeps left smaller, right larger","Traversals: inorder, preorder, postorder"]},
{n:"Graph",d:"Nodes (vertices) joined by links (edges). Maps and social networks are graphs.",p:["Directed or undirected, weighted or not","Traversals: BFS and DFS","Shortest path: Dijkstra"]},
{n:"Sorting",d:"Putting items in order so they are easier to search and compare.",p:["Bubble, selection, insertion: O(n squared)","Merge and quick sort: about O(n log n)","Stable sorts keep equal items in original order"]},
{n:"Searching",d:"Finding an item in a collection.",p:["Linear search: O(n), works on any list","Binary search: O(log n), needs sorted data","Hash lookup: about O(1) on average"]},
{n:"Hashing",d:"A hash function turns a key into an index so lookups are very fast.",p:["Collisions happen when two keys share an index","Fix with chaining or open addressing","Used in dictionaries and password storage"]}
];
var mode="web",$=function(i){return document.getElementById(i)};
function esc(s){return s.replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}

function render(){
  var q=$("q").value.trim().toLowerCase(),h="";
  T.forEach(function(t,i){
    if(q&&(t.n+" "+t.d).toLowerCase().indexOf(q)<0)return;
    h+='<div class="row"><h3>'+esc(t.n)+'</h3><p>'+esc(t.d)+'</p>';
    if(mode==="pdf"){h+='<ul>'+t.p.map(function(x){return"<li>"+esc(x)+"</li>"}).join("")+'</ul><button class="act" data-print="1">Print or save as PDF</button>';}
    if(mode==="vid"){h+='<a class="act" target="_blank" rel="noopener" href="https://www.youtube.com/results?search_query='+encodeURIComponent(t.n+" data structures and algorithms")+'">Watch videos on YouTube</a>';}
    h+='</div>';
  });
  $("list").innerHTML=h||'<p class="empty">No topic matches that search. Try "tree" or "sort".</p>';
}
$("q").addEventListener("input",render);
document.querySelectorAll(".modes button").forEach(function(b){b.addEventListener("click",function(){
  mode=b.dataset.m;document.querySelectorAll(".modes button").forEach(function(x){x.setAttribute("aria-pressed",x===b)});render();});});
$("list").addEventListener("click",function(e){if(e.target.dataset.print){try{window.print()}catch(x){}}});

/* Open and close the website */
function openSite(){$("desk").style.display="none";$("site").classList.add("on");window.scrollTo(0,0);}
function closeSite(){$("site").classList.remove("on");$("desk").style.display="";$("appIcon").classList.remove("sel");}
var ic=$("appIcon"),last=0;
ic.addEventListener("dblclick",openSite);
ic.addEventListener("click",function(){ic.classList.add("sel");var now=Date.now();if(now-last<450){last=0;openSite();}else{last=now;}});
ic.addEventListener("keydown",function(e){if(e.key==="Enter")openSite();});
$("closeBtn").addEventListener("click",closeSite);

/* Student name is remembered in this browser */
try{$("name").value=localStorage.getItem("dsa_name")||"";}catch(e){}
$("name").addEventListener("input",function(){try{localStorage.setItem("dsa_name",this.value)}catch(e){}});
render();

/* Service worker so the app installs and works offline */
if('serviceWorker' in navigator){window.addEventListener('load',function(){navigator.serviceWorker.register('sw.js').catch(function(){});});}
