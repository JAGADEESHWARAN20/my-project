import React, { useEffect, useRef, useState } from 'react';
import{ gsap} from 'gsap';

const LoadingScreen: React.FC<{ onLoadingComplete: () => void }> = ({ onLoadingComplete }) => {
  const [loading, setLoading] = useState(0);
  const loadingRef = useRef<HTMLDivElement>(null);
  const loadingLineRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Interval to update loading number
    const interval = setInterval(() => {
      setLoading((prevLoading) => {
        if (prevLoading < 100) {
          return prevLoading + 1;
        } else {
          clearInterval(interval);
          return prevLoading;
        }
      });
    }, 50); // Update every 50ms

    // Create a timeline for the animations
    const timeline = gsap.timeline({
      onComplete: onLoadingComplete
    });

    // Add text animation to the timeline
    timeline.to(textRef.current, {
      y: -50,
      duration: 2,
      ease: 'power2.inOut',
      onComplete: ()=>{
        timeline.to(textRef.current, {
            opacity: 0,
            duration:1,
        })
      }
    }, 0); // Start at time 0

    // Add loading line animation to the timeline
    timeline.to(loadingLineRef.current, {
      width: '100%',
      duration: 3,
      ease: 'power2.inOut',
      onComplete:()=>{
    timeline.to(loadingLineRef.current, {
        opacity:0,
    }),
        timeline.to(loadingRef.current, {
            height: 0,
            y: -100,
            duration: 1,
            ease: 'power2.inOut',
            onComplete:()=>{
                timeline.to(loadingRef.current, {
                    opacity:0,
                    duration:2,
                })
            }
          });
      }
    }, 0); // Start at time 0

    // Animate the container's background gradient
    const gradientAnimation = gsap.timeline({ repeat: -1, yoyo: true });
    gradientAnimation.to(loadingRef.current, {
      background: 'radial-gradient(circle, rgba(66,130,198,1), rgba(0,7,9,1))',
      duration: 2,
      ease: '2s',
      onComplete:()=>{
        gradientAnimation.to(loadingRef.current, {    
            opacity:0,
            duration:1,
      })
    }
    });
    //  backgroundColor:'radial-gradient(circle, rgba(66,130,198,1) 0%, rgba(0,7,9,1) 100%),',
      

    // Animate the container's height and position after the text and line animations
   

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <div ref={loadingRef} style={styles.loadingContainer}>
      <div ref={textRef} style={styles.loadingText}>{loading}%</div>
      <div ref={loadingLineRef} style={styles.loadingLine}></div>
    </div>
  );
};

const styles = {
  loadingContainer: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column' as 'column',
    zIndex: 9999,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute' as 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#000000',
    transition: 'background-color 5s linear',
    overflow: 'hidden', 
  },
  loadingText: {
    fontSize: '10em',
    color: 'white',
    zindex:'99',
  },
  loadingLine: {
    width: '0%', // Start with width 0
    height: '10px',
    backgroundColor: 'white',
    zindex:'-99',
    marginTop:'200px',
    position: 'absolute' as 'absolute', // Use absolute positioning to keep it at the bottom
    left: '0',
  },
};

export default LoadingScreen;
