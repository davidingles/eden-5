import IconHome from '@/components/icons/IconHome___.astro';
import IconNosotros from '@/components/icons/IconNosotros.astro';
import IconServices from '@/components/icons/IconServices.astro';
import IconContact from '@/components/icons/IconContact.astro';
import IconCatalogo from '@/components/icons/IconCatalogo.astro';
import BtnAdelante from '@/components/botones-sliders/BtnAdelante.astro';
import BtnAdelanteRojo from '../botones-sliders/BtnAdelanteRojo.astro';

<Fragment>
  {menu &&
    menu.map((item) => (
      <Fragment><div class="card  rounded-lg h-[66px] flex justify-center items-center my-2">
        <a href={item.link} class="flex flex-row flex-1 justify-center items-center">
          <div class=" text-xl p-4">
            {window.location.pathname === item.link ? (
              <Fragment><BtnAdelanteRojo menus={item.title} /></Fragment>
            ) : (
              <Fragment><BtnAdelante menus={item.title} /></Fragment>
            )}
          </div>

          <div class="w-10 mr-4">
            {item.icon === 'us' && (
              <Fragment><div class="hover:rotate-[6deg]  hover:scale-105 hover:-translate-y-[2px]">
                <IconNosotros />
              </div></Fragment>
            )}
            {item.icon === 'home' && (
              <Fragment><div class="hover:rotate-[6deg]  hover:scale-105 hover:-translate-y-[2px]">
                <IconHome />
              </div></Fragment>
            )}
            {item.icon === 'services' && (
              <Fragment><div class="hover:rotate-[6deg]  hover:scale-105 hover:-translate-y-[2px]">
                <IconServices />
              </div></Fragment>
            )}
            {item.icon === 'contact' && (
              <Fragment><div class="hover:rotate-[6deg]  hover:scale-105 hover:-translate-y-[2px]">
                <IconContact />
              </div></Fragment>
            )}
            {item.icon === 'catalogo' && (
              <Fragment><div class="hover:rotate-6  hover:scale-110">
                <IconCatalogo />
              </div></Fragment>
            )}
          </div>
        </a>
      </div></Fragment>
    ))}

  <style>{`
	.card {
		width: auto;
		height: 66px;
		background: #313131;
		box-shadow:
			15px 15px 30px #000000,
			-15px -15px 30px #000000;
	}
	.card:hover {
		transition: all 0.3s ease-in-out;
		transform: translateY(-3px);
		filter: brightness(1.05);
		box-shadow:
			3px 3px 5px #000000,
			-3px -15px 5px #000000;
	}

	:global(.light) .card {
		border: solid 1px #ffffff;

		background: #e0e0e0;
		box-shadow:
			15px 15px 30px #bebebe,
			-15px -15px 30px #ffffff;
	}
	:global(.light) .card:hover {
		transition: all 0.3s ease-in-out;
		transform: translateY(-3px);
		filter: brightness(1.05);
		box-shadow:
			3px 3px 5px #bebebe,
			-3px -3px 5px #ffffff;
	}
`}</style>

</Fragment>;
