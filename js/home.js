
$(function() {
		Books.init()
	});

	$(function() {
		$("#contactForm").validate({
			rules: {
				name: "required",
				email: {
					required: true,
					email: true
				},
				contact: {
					required: true,
					number: true,
					minlength: 10,
					maxlength: 10
				},
			},
			messages: {
				firstname: "Please enter your first name",
				email: "Please enter a valid email address",
				contact: {
					required: "Please enter your cntact number",
					number: "enter only number",
					minlength: "enter valid number ",
					maxlength: "enter valid number"
				},
			},
			submitHandler: function(a) {
				a.submit()
			}
		})
	});

	$(function() {
		$("#contactForm2").validate({
			rules: {
				name: "required",
				email: {
					required: true,
					email: true
				},
				phone: {
					required: true,
					number: true,
					minlength: 10,
					maxlength: 10
				},
				areacode: {
					required: true,
					number: true
				},
			},
			messages: {
				firstname: "Please enter your first name",
				email: "Please enter a valid email address",
				phone: {
					required: "enter cntact no",
					number: "enter only no",
					minlength: "enter valid no ",
					maxlength: "enter valid no"
				},
				areacode: {
					required: "your areacode",
					number: "only number"
				},
			},
			submitHandler: function(a) {
				a.submit()
			}
		})
	});

	$(function() {
		$("#consult").validate({
			rules: {
				name: "required",
				email: {
					required: true,
					email: true
				},
				contact: {
					required: true,
					number: true,
					minlength: 10,
					maxlength: 10
				},
				country: "required",
			},
			messages: {
				firstname: "Please enter your  name",
				email: "Enter a valid email ",
				contact: {
					required: "enter contact no",
					number: "enter only no",
					minlength: "enter valid no ",
					maxlength: "enter valid no"
				},
			},
			submitHandler: function(a) {
				a.submit()
			}
		})
	});

	$(function() {
		$("#contactForm3").validate({
			rules: {
				name: "required",
				email: {
					required: true,
					email: true
				},
				contact: {
					required: true,
					number: true,
					minlength: 10,
					maxlength: 10
				},
			},
			messages: {
				firstname: "Please enter your first name",
				email: "Please enter a valid email address",
				contact: {
					required: "your cntact number",
					number: "only number",
					minlength: "enter valid no ",
					maxlength: "enter valid no"
				},
			},
			submitHandler: function(a) {
				a.submit()
			}
		})
	});

	$(function() {
		$("#contactForm4").validate({
			rules: {
				name: "required",
				email: {
					required: true,
					email: true
				},
				phone: {
					required: true,
					number: true,
					minlength: 10,
					maxlength: 10
				},
				areacode: {
					required: true,
					number: true
				},
			},
			messages: {
				firstname: "Please enter your first name",
				areacode: {
					required: "your Areacode",
					number: "only number"
				},
				phone: {
					required: "your contact no",
					number: "only no",
					minlength: "valid no ",
					maxlength: "valid no"
				},
			},
			submitHandler: function(a) {
				a.submit()
			}
		})
	});



	$(document).ready(function() {

		var id = '#dialog';

		//Get the screen height and width
		var maskHeight = $(document).height();
		var maskWidth = $(window).width();

		//Set heigth and width to mask to fill up the whole screen
		$('#mask').css({
			'width': maskWidth,
			'height': maskHeight
		});

		//transition effect     
		$('#mask').fadeIn(500);
		$('#mask').fadeTo("slow", 0.9);

		//Get the window height and width
		var winH = $(window).height();
		var winW = $(window).width();

		//Set the popup window to center
		$(id).css('top', winH / 2 - $(id).height() / 2);
		$(id).css('left', winW / 2 - $(id).width() / 2);

		//transition effect
		$(id).fadeIn(2000);

		//if close button is clicked
		$('.window .close').click(function(e) {
			//Cancel the link behavior
			e.preventDefault();

			$('#mask').hide();
			$('.window').hide();
		});

		//if mask is clicked
		$('#mask').click(function() {
			$(this).hide();
			$('.window').hide();
		});

	});

	(function() {
		// trim polyfill : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
		if (!String.prototype.trim) {
			(function() {
				// Make sure we trim BOM and NBSP
				var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
				String.prototype.trim = function() {
					return this.replace(rtrim, '');
				};
			})();
		}

		[].slice.call(document.querySelectorAll('input.input__field')).forEach(function(inputEl) {
			// in case the input is already filled..
			if (inputEl.value.trim() !== '') {
				classie.add(inputEl.parentNode, 'input--filled');
			}

			// events:
			inputEl.addEventListener('focus', onInputFocus);
			inputEl.addEventListener('blur', onInputBlur);
		});

		function onInputFocus(ev) {
			classie.add(ev.target.parentNode, 'input--filled');
		}

		function onInputBlur(ev) {
			if (ev.target.value.trim() === '') {
				classie.remove(ev.target.parentNode, 'input--filled');
			}
		}

		[].slice.call(document.querySelectorAll('textarea.input__field')).forEach(function(inputEl) {
			// in case the input is already filled..
			if (inputEl.value.trim() !== '') {
				classie.add(inputEl.parentNode, 'input--filled');
			}

			// events:
			inputEl.addEventListener('focus', onInputFocus);
			inputEl.addEventListener('blur', onInputBlur);
		});

		
	})();

	$("#clientsOpen-btmFrm").click(function() {
		$("#clientsDropDown-btmFrm #clientsDashboard-btmFrm").slideToggle({
			direction: "up"
		}, 300);
		$("#clientsOpen-btmFrm").hide(200);
		$("#qoutclose-btn").addClass(200);

		$("#qoutclose-btn").click(function() {
			$("#clientsDashboard-btmFrm").slideUp();
			$("#clientsOpen-btmFrm").show();
		});

	});



	var TxtType = function(el, toRotate, period) {
		this.toRotate = toRotate;
		this.el = el;
		this.loopNum = 0;
		this.period = parseInt(period, 10) || 2000;
		this.txt = '';
		this.tick();
		this.isDeleting = false;
	};

	TxtType.prototype.tick = function() {
		var i = this.loopNum % this.toRotate.length;
		var fullTxt = this.toRotate[i];

		if (this.isDeleting) {
			this.txt = fullTxt.substring(0, this.txt.length - 1);
		} else {
			this.txt = fullTxt.substring(0, this.txt.length + 1);
		}

		this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

		var that = this;
		var delta = 200 - Math.random() * 100;

		if (this.isDeleting) {
			delta /= 2;
		}

		if (!this.isDeleting && this.txt === fullTxt) {
			delta = this.period;
			this.isDeleting = true;
		} else if (this.isDeleting && this.txt === '') {
			this.isDeleting = false;
			this.loopNum++;
			delta = 500;
		}

		setTimeout(function() {
			that.tick();
		}, delta);
	};

	window.onload = function() {
		var elements = document.getElementsByClassName('typewrite');
		for (var i = 0; i < elements.length; i++) {
			var toRotate = elements[i].getAttribute('data-type');
			var period = elements[i].getAttribute('data-period');
			if (toRotate) {
				new TxtType(elements[i], JSON.parse(toRotate), period);
			}
		}
		// INJECT CSS
		var css = document.createElement("style");
		css.type = "text/css";
		css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
		document.body.appendChild(css);
	};

	(function($) {

		var def = {
			speed: 500,
			easing: ''
		};

		$.fn.vkSlidedoor = function(cfg) {

			// configuration application
			var ops = {
				wrapper: '.slidedoor-wrap',
				dl: 'dl', // children of wrapper 
				trigger: 'dt',
				autoplay: false,
				direction: 'ltr', // or 'rtl'(right to left), direction slide-door, apply for the mode autoplay is true
				looptimeout: 3000, // set timeout for slide-door, apply for the mode autoplay is true
				dtwidth: 70,
				ddpadleft: 1,
				ddwidth: 392
			};

			$.extend(ops, cfg);
			$.extend(def, cfg);

			return this.each(function() {
				var $this = $(this),
					$dls = $this.find(ops.dl),
					$dts = $this.find(ops.trigger),
					$ele = $this.find(ops.wrapper);

				// Default set left CSS for dl elements
				var i = 0;
				$dls.each(function() {
					$(this).css("left", i + "px");
					i += ops.dtwidth;
				});
				//caculate width of over element
				var overwidth = $dls.length * ops.dtwidth + ops.ddwidth - ops.ddpadleft,
					mainwidth = overwidth + ops.ddwidth + 10;
				$this.width(overwidth);

				// Default set width css dor slidedoor-wrap element
				$ele.width(mainwidth);

				// Set CSS default open door for current dl elements
				$this.find(ops.dl + '.current').nextAll(ops.dl).elemsMove(ops.ddwidth);

				if (ops.autoplay) {
					var timeout = setInterval(function() {
						$ele.activeDoors(ops);
					}, ops.looptimeout);
				}
				$dts.click(function() {
					if (ops.autoplay) {
						clearInterval(timeout);
					}
					// get index of this element
					var indexthis = $dts.index(this);
					$ele.activeDoors(ops, indexthis);
				}); //end click
			}); //end return 
		};

		// active animation the doors
		$.fn.activeDoors = function(ops, indexthis) {
			// get current element and index, get dl elements
			var $curr = this.find('.current').removeClass('current'),
				indexcurr = $curr.index(),
				$dls = this.find(ops.dl),
				dlslen = $dls.length;

			// animation with current element and this element with click event context
			if (arguments.length == 2) {
				$dls.each(function(index) {
					// if this element affter current element
					if (index <= indexthis && index > indexcurr) {
						$(this).elemsMove(-ops.ddwidth);
						// if this element before current element
					} else if (index <= indexcurr && index > indexthis) {
						$(this).elemsMove(ops.ddwidth);
					}
					// add current class for this element
					if (index == indexthis) {
						$(this).addClass('current');
					}
				});
				// animation for element next in the automatic mode
			} else if (ops.direction == 'ltr') {
				// if current element is last child dl element
				if (indexcurr == (dlslen - 1)) {
					this.find(ops.dl + ':first-child').addClass('current').nextAll(ops.dl).elemsMove(ops.ddwidth);
				} else {
					$curr.next().elemsMove(-ops.ddwidth).addClass('current');
				}
			} else if (ops.direction == 'rtl') {
				// if current element is first child dl element
				if (indexcurr == 0) {
					$curr.nextAll(ops.dl).elemsMove(-ops.ddwidth);
					this.find(ops.dl + ':last-child').addClass('current');
				} else {
					$curr.elemsMove(ops.ddwidth);
					$curr.prev().addClass('current');
				}
			}
		};

		// animation the doors with value of position
		$.fn.elemsMove = function(val) {
			return this.each(function() {
				var leftcurr = $(this).css('left'),
					newcurr = parseInt(leftcurr) + val;
				$(this).stop(true, true).animate({
					left: newcurr
				}, def.speed, def.easing);
			});
		};

	})(jQuery);

	$(document).ready(function() {
		$('.vk-slidedoor').vkSlidedoor({
			autoplay: true,
			direction: 'rtl',
			looptimeout: 6000
		});
	});

	$("#clientsOpen-bt").click(function() {
		$("#clientsDropDown-bt #clientsDashboard-bt").slideToggle({
			direction: "up"
		}, 300);
		$(this).toggleClass("clientsClose")
	});

	