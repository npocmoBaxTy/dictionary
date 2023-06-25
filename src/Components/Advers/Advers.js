import React from "react";
import './Advers.css'
import {NavLink} from "react-router-dom";

const Advers = (props) => {
    return (<div className="main__advers">
        <div className="container">
            <div className="main__advers-video">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/UT9ndxZPXxY"
                        title="Túsindirme sózlik mobil qosımshası haqqında" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen></iframe>
            </div>
            <div className="main__advers-info">
                <div className="advers__info-top">
                    {(props.latin) ? 'EŃ NÁTIYJELI USILI' : 'EҢ НӘТИЙЖЕЛИ УСЫЛЫ'}
                </div>
                <div className="advers__info-title">
                    {(props.latin) ? 'Sózlerdi úyreniwdiń eń nátiyjeli usılı' : 'Сөзлерди үйрениўдиң ең нәтийжели усылы'}
                </div>
                <div className="advers__info-text">
                    {(props.latin) ? `Sózlerdi úyreniwdiń eń nátiyjeli usılı - tek ǵana biz benen! Tusindirmesozlik.uz - Qaraqalpaq
                        tilindegi sózlerdi durıs jazıw hám onıń mánisin mısallar járdeminde sizge shaǵıp beriwge járdem
                        beredi! Video arqalı veb sayttıń islew funkciyası hám kreativligin tolıǵıraq túsinip alasız.
                        Tómendegi "tolıq" túymesin basıń.`
                        :
                        `Сөзлерди үйрениўдиң ең нәтийжели усылы - тек ғана биз бенен! 
                            Тусиндирмесозлик.уз - Қарақалпақ тилиндеги сөзлерди дурыс жазыў ҳәм оның мәнисин мысаллар жәрдеминде сизге шағып бериўге жәрдем береди!
                             Видео арқалы веб сайттың ислеў ўаункциясы ҳәм креативлигин толығырақ түсинип аласыз. Төмендеги "толық" түймесин басың.
                             `
                    }
                </div>
                <div className="advers__info-btn">
                    <NavLink to={'https://play.google.com/store/apps/details?id=com.karsoft.tusindirmesozlik'} type="button">
                        {
                            (props.latin) ? 'Toliq...' : 'Толық...'
                        }
                    </NavLink>
                </div>
            </div>
        </div>
    </div>)
}

export default Advers