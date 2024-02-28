import { useEffect, useState } from 'react';
import './styles.css';
import { useInView } from 'react-intersection-observer';

interface ProgressBarProps {
    label?:string;
    progress?:number;
}

export const ProgressBar = ({label, progress}: ProgressBarProps) => {

    const [progressEnd, setProgressEnd] = useState(0);

    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    useEffect(() => {
        if (inView && progress) {
            setTimeout(() => {
                const animationDuration = 2000;
                const frames = animationDuration / 100;
                const increment = progress / frames;

                let currentProgress = 0;
                const interval = setInterval(() => {
                    currentProgress += increment;
                    setProgressEnd(currentProgress);

                    if (currentProgress >= progress) {
                        clearInterval(interval);
                    }
                }, 10);
            }, 500);
        }
    }, [progress, inView]);

    return(
        <div className="progress-container" ref={ref}>
                <div
                    className="progress"
                >
                    <span style={{width:`${progressEnd}%`}}></span>
                </div>
            <div className="progress-bar">
                <div className="title">{label}</div>
                <div className="value">{Math.round(progressEnd)}%</div>
            </div>
        </div>
    )
}