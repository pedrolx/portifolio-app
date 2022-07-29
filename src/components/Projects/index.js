import './styles';
import { Slider, SliderLi } from './styles';
import NuKenzie from '../../imgs/projetos/Capturar.PNG';
import NuKenzie1 from '../../imgs/projetos/Capturar2.PNG';
import NuKenzie2 from '../../imgs/projetos/Capturar3.PNG';
import KenzieHub1 from '../../imgs/projetos/Capturar10.PNG';
import KenzieHub from '../../imgs/projetos/Capturar8.PNG';
import KenzieHub2 from '../../imgs/projetos/Capturar11.PNG';
import HamburgueriaKenzie from '../../imgs/projetos/Capturar6.PNG';
import HamburgueriaKenzie1 from '../../imgs/projetos/Capturar7.PNG';
import NoWaste from '../../imgs/projetos/Capturar14.PNG';
import NoWaste1 from '../../imgs/projetos/Capturar15.PNG';
import NoWaste2 from '../../imgs/projetos/Capturar16.PNG';
import NoWaste3 from '../../imgs/projetos/Capturar17.PNG';
import NoWaste5 from '../../imgs/projetos/Capturar19.PNG';
import { AiFillGithub } from 'react-icons/ai'
import { Animation } from '../../lottie';

export const ProjectsList = () => {



    return(
            <Slider onWheel={(e)=> {
                if (e.deltaY > 0) {
                    e.target.scrollBy(300, 0)
                } else {
                    e.target.scrollBy(-300, 0)
                }
            }}>

                <SliderLi>
                    <img src={NuKenzie}/>
                    <div>
                    <p>NuKenzie - React</p>
                    </div>
                </SliderLi>

                <SliderLi>
                    <img src={NuKenzie1}/>
                    <div>
                    <p>NuKenzie - React</p>
                    </div>
                </SliderLi>

                <SliderLi>
                    <img src={NuKenzie2}/>
                    <div>
                    <p>NuKenzie - React</p>
                    </div>
                </SliderLi>

                <SliderLi>
                    <img src={KenzieHub}/>
                    <div>
                    <p>KenzieHub - React</p>
                    </div>
                </SliderLi>

                <SliderLi>
                    <img src={KenzieHub1}/>
                    <div>
                    <p>KenzieHub - React</p>
                    </div>
                </SliderLi>

                <SliderLi>
                    <img src={KenzieHub2}/>
                    <div>
                    <p>KenzieHub - React</p>
                    </div>
                </SliderLi>

                <SliderLi>
                    <img src={HamburgueriaKenzie}/>
                    <div>
                    <p>Hamburgueria Kenzie - React</p>
                    </div>
                </SliderLi>

                <SliderLi>
                    <img src={HamburgueriaKenzie1}/>
                    <div>
                    <p>Hamburgueria Kenzie - React</p>
                    </div>
                </SliderLi>

                <SliderLi>
                    <img src={NoWaste}/>
                    <div>
                    <p>NoWaste - React</p>
                    </div>
                </SliderLi>

                <SliderLi>
                    <img src={NoWaste1}/>
                    <div>
                    <p>NoWaste - React</p>
                    </div>
                </SliderLi>

                <SliderLi>
                    <img src={NoWaste2}/>
                    <div>
                    <p>NoWaste - React</p>
                    </div>
                </SliderLi>

                <SliderLi>
                    <img src={NoWaste3}/>
                    <div>
                    <p>NoWaste - React</p>
                    </div>
                </SliderLi>

                <SliderLi>
                    <img src={NoWaste5}/>
                    <div>
                        <p>NoWaste - React</p>
                    </div>
                </SliderLi>

                <SliderLi>
                    <Animation name="construction" height={400} width={400}/>
                    <div>
                        <p>Em Contrução</p>
                    </div>
                </SliderLi>

            </Slider>
    )
}