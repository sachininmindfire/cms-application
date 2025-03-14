import{O as w,b as V,h as Y}from"./chunk-UE3R3KUH.js";import{d as F}from"./chunk-THR4PETD.js";import{$ as x,Aa as P,Cb as k,D as T,Db as W,H as A,K as M,Q as b,W as v,Wa as m,Wb as $,Xb as j,_ as L,ba as E,da as g,e as y,ea as l,nb as D,o as u,ob as U,p as R,s as d,sb as H,ta as O,y as N,ya as I,yc as B,zb as z}from"./chunk-OC6G6XUH.js";var X=["*"],S;function Z(){if(S===void 0&&(S=null,typeof window<"u")){let r=window;r.trustedTypes!==void 0&&(S=r.trustedTypes.createPolicy("angular#components",{createHTML:a=>a}))}return S}function _(r){return Z()?.createHTML(r)||r}function q(r){return Error(`Unable to find icon with the name "${r}"`)}function tt(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function G(r){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${r}".`)}function J(r){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${r}".`)}var c=class{url;svgText;options;svgElement;constructor(a,t,e){this.url=a,this.svgText=t,this.options=e}},et=(()=>{class r{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(t,e,n,o){this._httpClient=t,this._sanitizer=e,this._errorHandler=o,this._document=n}addSvgIcon(t,e,n){return this.addSvgIconInNamespace("",t,e,n)}addSvgIconLiteral(t,e,n){return this.addSvgIconLiteralInNamespace("",t,e,n)}addSvgIconInNamespace(t,e,n,o){return this._addSvgIconConfig(t,e,new c(n,null,o))}addSvgIconResolver(t){return this._resolvers.push(t),this}addSvgIconLiteralInNamespace(t,e,n,o){let i=this._sanitizer.sanitize(m.HTML,n);if(!i)throw J(n);let s=_(i);return this._addSvgIconConfig(t,e,new c("",s,o))}addSvgIconSet(t,e){return this.addSvgIconSetInNamespace("",t,e)}addSvgIconSetLiteral(t,e){return this.addSvgIconSetLiteralInNamespace("",t,e)}addSvgIconSetInNamespace(t,e,n){return this._addSvgIconSetConfig(t,new c(e,null,n))}addSvgIconSetLiteralInNamespace(t,e,n){let o=this._sanitizer.sanitize(m.HTML,e);if(!o)throw J(e);let i=_(o);return this._addSvgIconSetConfig(t,new c("",i,n))}registerFontClassAlias(t,e=t){return this._fontCssClassesByAlias.set(t,e),this}classNameForFontAlias(t){return this._fontCssClassesByAlias.get(t)||t}setDefaultFontSetClass(...t){return this._defaultFontSetClass=t,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(t){let e=this._sanitizer.sanitize(m.RESOURCE_URL,t);if(!e)throw G(t);let n=this._cachedIconsByUrl.get(e);return n?u(C(n)):this._loadSvgIconFromConfig(new c(t,null)).pipe(v(o=>this._cachedIconsByUrl.set(e,o)),d(o=>C(o)))}getNamedSvgIcon(t,e=""){let n=K(e,t),o=this._svgIconConfigs.get(n);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(e,t),o)return this._svgIconConfigs.set(n,o),this._getSvgFromConfig(o);let i=this._iconSetConfigs.get(e);return i?this._getSvgFromIconSetConfigs(t,i):R(q(n))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(t){return t.svgText?u(C(this._svgElementFromConfig(t))):this._loadSvgIconFromConfig(t).pipe(d(e=>C(e)))}_getSvgFromIconSetConfigs(t,e){let n=this._extractIconWithNameFromAnySet(t,e);if(n)return u(n);let o=e.filter(i=>!i.svgText).map(i=>this._loadSvgIconSetFromConfig(i).pipe(T(s=>{let f=`Loading icon set URL: ${this._sanitizer.sanitize(m.RESOURCE_URL,i.url)} failed: ${s.message}`;return this._errorHandler.handleError(new Error(f)),u(null)})));return N(o).pipe(d(()=>{let i=this._extractIconWithNameFromAnySet(t,e);if(!i)throw q(t);return i}))}_extractIconWithNameFromAnySet(t,e){for(let n=e.length-1;n>=0;n--){let o=e[n];if(o.svgText&&o.svgText.toString().indexOf(t)>-1){let i=this._svgElementFromConfig(o),s=this._extractSvgIconFromSet(i,t,o.options);if(s)return s}}return null}_loadSvgIconFromConfig(t){return this._fetchIcon(t).pipe(v(e=>t.svgText=e),d(()=>this._svgElementFromConfig(t)))}_loadSvgIconSetFromConfig(t){return t.svgText?u(null):this._fetchIcon(t).pipe(v(e=>t.svgText=e))}_extractSvgIconFromSet(t,e,n){let o=t.querySelector(`[id="${e}"]`);if(!o)return null;let i=o.cloneNode(!0);if(i.removeAttribute("id"),i.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(i,n);if(i.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(i),n);let s=this._svgElementFromString(_("<svg></svg>"));return s.appendChild(i),this._setSvgAttributes(s,n)}_svgElementFromString(t){let e=this._document.createElement("DIV");e.innerHTML=t;let n=e.querySelector("svg");if(!n)throw Error("<svg> tag not found");return n}_toSvgElement(t){let e=this._svgElementFromString(_("<svg></svg>")),n=t.attributes;for(let o=0;o<n.length;o++){let{name:i,value:s}=n[o];i!=="id"&&e.setAttribute(i,s)}for(let o=0;o<t.childNodes.length;o++)t.childNodes[o].nodeType===this._document.ELEMENT_NODE&&e.appendChild(t.childNodes[o].cloneNode(!0));return e}_setSvgAttributes(t,e){return t.setAttribute("fit",""),t.setAttribute("height","100%"),t.setAttribute("width","100%"),t.setAttribute("preserveAspectRatio","xMidYMid meet"),t.setAttribute("focusable","false"),e&&e.viewBox&&t.setAttribute("viewBox",e.viewBox),t}_fetchIcon(t){let{url:e,options:n}=t,o=n?.withCredentials??!1;if(!this._httpClient)throw tt();if(e==null)throw Error(`Cannot fetch icon from URL "${e}".`);let i=this._sanitizer.sanitize(m.RESOURCE_URL,e);if(!i)throw G(e);let s=this._inProgressUrlFetches.get(i);if(s)return s;let h=this._httpClient.get(i,{responseType:"text",withCredentials:o}).pipe(d(f=>_(f)),M(()=>this._inProgressUrlFetches.delete(i)),b());return this._inProgressUrlFetches.set(i,h),h}_addSvgIconConfig(t,e,n){return this._svgIconConfigs.set(K(t,e),n),this}_addSvgIconSetConfig(t,e){let n=this._iconSetConfigs.get(t);return n?n.push(e):this._iconSetConfigs.set(t,[e]),this}_svgElementFromConfig(t){if(!t.svgElement){let e=this._svgElementFromString(t.svgText);this._setSvgAttributes(e,t.options),t.svgElement=e}return t.svgElement}_getIconConfigFromResolvers(t,e){for(let n=0;n<this._resolvers.length;n++){let o=this._resolvers[n](e,t);if(o)return nt(o)?new c(o.url,null,o.options):new c(o,null)}}static \u0275fac=function(e){return new(e||r)(g(V,8),g(Y),g(F,8),g(I))};static \u0275prov=L({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();function C(r){return r.cloneNode(!0)}function K(r,a){return r+":"+a}function nt(r){return!!(r.url&&r.options)}var ot=new E("MAT_ICON_DEFAULT_OPTIONS"),it=new E("mat-icon-location",{providedIn:"root",factory:rt});function rt(){let r=l(F),a=r?r.location:null;return{getPathname:()=>a?a.pathname+a.search:""}}var Q=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],st=Q.map(r=>`[${r}]`).join(", "),at=/^url\(['"]?#(.*?)['"]?\)$/,yt=(()=>{class r{_elementRef=l(P);_iconRegistry=l(et);_location=l(it);_errorHandler=l(I);_defaultColor;get color(){return this._color||this._defaultColor}set color(t){this._color=t}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(t){t!==this._svgIcon&&(t?this._updateSvgIcon(t):this._svgIcon&&this._clearSvgElement(),this._svgIcon=t)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(t){let e=this._cleanupFontValue(t);e!==this._fontSet&&(this._fontSet=e,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(t){let e=this._cleanupFontValue(t);e!==this._fontIcon&&(this._fontIcon=e,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName;_svgNamespace;_previousPath;_elementsWithExternalReferences;_currentIconFetch=y.EMPTY;constructor(){let t=l(new O("aria-hidden"),{optional:!0}),e=l(ot,{optional:!0});e&&(e.color&&(this.color=this._defaultColor=e.color),e.fontSet&&(this.fontSet=e.fontSet)),t||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(t){if(!t)return["",""];let e=t.split(":");switch(e.length){case 1:return["",e[0]];case 2:return e;default:throw Error(`Invalid icon name: "${t}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let t=this._elementsWithExternalReferences;if(t&&t.size){let e=this._location.getPathname();e!==this._previousPath&&(this._previousPath=e,this._prependPathToReferences(e))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(t){this._clearSvgElement();let e=this._location.getPathname();this._previousPath=e,this._cacheChildrenWithExternalReferences(t),this._prependPathToReferences(e),this._elementRef.nativeElement.appendChild(t)}_clearSvgElement(){let t=this._elementRef.nativeElement,e=t.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();e--;){let n=t.childNodes[e];(n.nodeType!==1||n.nodeName.toLowerCase()==="svg")&&n.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let t=this._elementRef.nativeElement,e=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(n=>n.length>0);this._previousFontSetClass.forEach(n=>t.classList.remove(n)),e.forEach(n=>t.classList.add(n)),this._previousFontSetClass=e,this.fontIcon!==this._previousFontIconClass&&!e.includes("mat-ligature-font")&&(this._previousFontIconClass&&t.classList.remove(this._previousFontIconClass),this.fontIcon&&t.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(t){return typeof t=="string"?t.trim().split(" ")[0]:t}_prependPathToReferences(t){let e=this._elementsWithExternalReferences;e&&e.forEach((n,o)=>{n.forEach(i=>{o.setAttribute(i.name,`url('${t}#${i.value}')`)})})}_cacheChildrenWithExternalReferences(t){let e=t.querySelectorAll(st),n=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<e.length;o++)Q.forEach(i=>{let s=e[o],h=s.getAttribute(i),f=h?h.match(at):null;if(f){let p=n.get(s);p||(p=[],n.set(s,p)),p.push({name:i,value:f[1]})}})}_updateSvgIcon(t){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),t){let[e,n]=this._splitIconName(t);e&&(this._svgNamespace=e),n&&(this._svgName=n),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(n,e).pipe(A(1)).subscribe(o=>this._setSvgElement(o),o=>{let i=`Error retrieving icon ${e}:${n}! ${o.message}`;this._errorHandler.handleError(new Error(i))})}}static \u0275fac=function(e){return new(e||r)};static \u0275cmp=D({type:r,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(e,n){e&2&&(z("data-mat-icon-type",n._usingFontIcon()?"font":"svg")("data-mat-icon-name",n._svgName||n.fontIcon)("data-mat-icon-namespace",n._svgNamespace||n.fontSet)("fontIcon",n._usingFontIcon()?n.fontIcon:null),W(n.color?"mat-"+n.color:""),k("mat-icon-inline",n.inline)("mat-icon-no-color",n.color!=="primary"&&n.color!=="accent"&&n.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",B],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],features:[H],ngContentSelectors:X,decls:1,vars:0,template:function(e,n){e&1&&($(),j(0))},styles:["mat-icon,mat-icon.mat-primary,mat-icon.mat-accent,mat-icon.mat-warn{color:var(--mat-icon-color, inherit)}.mat-icon{-webkit-user-select:none;user-select:none;background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px;overflow:hidden}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}.mat-icon.mat-ligature-font[fontIcon]::before{content:attr(fontIcon)}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}"],encapsulation:2,changeDetection:0})}return r})(),Rt=(()=>{class r{static \u0275fac=function(e){return new(e||r)};static \u0275mod=U({type:r});static \u0275inj=x({imports:[w,w]})}return r})();export{yt as a,Rt as b};
