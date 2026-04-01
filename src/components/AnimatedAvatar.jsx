import './AnimatedAvatar.css';

function AnimatedAvatar() {
  return (
    <div className="avatar-container">
      {/* Floating shapes background */}
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
        <div className="shape shape-5"></div>
      </div>

      {/* Main character */}
      <div className="character">
        {/* Head */}
        <div className="character-head">
          {/* Hair */}
          <div className="hair">
            <div className="hair-top"></div>
            <div className="hair-side hair-left"></div>
            <div className="hair-side hair-right"></div>
          </div>

          {/* Face */}
          <div className="face">
            {/* Eyes */}
            <div className="eyes">
              <div className="eye eye-left">
                <div className="pupil"></div>
                <div className="eyebrow"></div>
              </div>
              <div className="eye eye-right">
                <div className="pupil"></div>
                <div className="eyebrow"></div>
              </div>
            </div>

            {/* Glasses */}
            <div className="glasses">
              <div className="glass glass-left"></div>
              <div className="glass glass-right"></div>
              <div className="glass-bridge"></div>
            </div>

            {/* Nose */}
            <div className="nose"></div>

            {/* Smile */}
            <div className="mouth">
              <div className="smile"></div>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="character-body">
          {/* Neck */}
          <div className="neck"></div>

          {/* Torso */}
          <div className="torso">
            {/* Shirt */}
            <div className="shirt">
              <div className="collar">
                <div className="collar-left"></div>
                <div className="collar-right"></div>
              </div>
              {/* Laptop indicator */}
              <div className="laptop-badge">
                <span>&lt;/&gt;</span>
              </div>
            </div>
          </div>

          {/* Arms */}
          <div className="arm arm-left">
            <div className="hand hand-left">
              <div className="finger f1"></div>
              <div className="finger f2"></div>
              <div className="finger f3"></div>
              <div className="thumb"></div>
            </div>
          </div>
          <div className="arm arm-right">
            <div className="hand hand-right">
              <div className="finger f1"></div>
              <div className="finger f2"></div>
              <div className="finger f3"></div>
              <div className="thumb"></div>
            </div>
          </div>
        </div>

        {/* Speech bubble */}
        <div className="speech-bubble">
          <span className="typing-text">Hello! 👋</span>
          <div className="bubble-tail"></div>
        </div>
      </div>

      {/* Tech icons floating around */}
      <div className="tech-icons">
        <div className="tech-icon icon-react">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
            <ellipse cx="12" cy="12" rx="3" ry="8" stroke="currentColor" strokeWidth="2"/>
            <ellipse cx="12" cy="12" rx="3" ry="8" stroke="currentColor" strokeWidth="2" transform="rotate(60 12 12)"/>
            <ellipse cx="12" cy="12" rx="3" ry="8" stroke="currentColor" strokeWidth="2" transform="rotate(120 12 12)"/>
          </svg>
        </div>
        <div className="tech-icon icon-code">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 18L22 12L16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 6L2 12L8 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className="tech-icon icon-rocket">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L12 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M12 8L15 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M12 8L9 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M4 17C4 17 6 16 8 18C10 20 9 22 9 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M20 17C20 17 18 16 16 18C14 20 15 22 15 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M12 14C13.6569 14 15 12.6569 15 11C15 9.34315 13.6569 8 12 8C10.3431 8 9 9.34315 9 11C9 12.6569 10.3431 14 12 14Z" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default AnimatedAvatar;
