import { MenuItem } from './MenuItem'
import { MenuInnerWithSub } from './MenuInnerWithSub'
import { Structure } from './Structure'

export function MenuInner() {
  return (
    <>

      <MenuInnerWithSub
        isMega={true}
        title='Structure'
        to='/Structure'
        menuPlacement='bottom-start'
        menuTrigger='click'
      >
        <Structure />
      </MenuInnerWithSub>
      <MenuInnerWithSub title='Gestion de vente' to='/GestionV' menuPlacement='bottom-start' menuTrigger='click'>
        {/* Vente */}
        <MenuInnerWithSub
          title='Vente'
          to='/GestionV/Vente'
          icon='/media/icons/duotune/ecommerce/ecm001.svg'
          hasArrow={true}
          menuPlacement='right-start'
          menuTrigger={`{default:'click', lg: 'hover'}`}
        >
          <MenuItem
            icon='/media/icons/duotune/files/fil014.svg'
            to='/GestionV/Vente/DocVente'
            title='Document de vente' />
          <MenuItem
            icon='/media/icons/duotune/finance/fin010.svg'
            to='/GestionV/Vente/AvoirFinance'
            title='Avoir Financier Vente' />
          <MenuItem
            icon='/media/icons/duotune/files/fil006.svg'
            to='/GestionV/Vente/bonlivraison'
            title=' Historique Bon Commande' />

        </MenuInnerWithSub>

        {/* Clients */}
        <MenuInnerWithSub
          title='Clients'
          to='/GestionVente/Clients'
          icon='/media/icons/duotune/communication/com013.svg'
          hasArrow={true}
          menuPlacement='right-start'
          menuTrigger={`{default:'click', lg: 'hover'}`}
        >
          <MenuItem to='/GestionVente/Clients/GestionClient' title='Gestion des Clients' hasBullet={true} />
        </MenuInnerWithSub>

        {/* Echéance */}
        <MenuInnerWithSub
          title='Echéance'
          to='/GestionV/Echeance'
          icon='/media/icons/duotune/electronics/elec00.svg'
          hasArrow={true}
          menuPlacement='right-start'
          menuTrigger={`{default:'click', lg: 'hover'}`}
        >
          <MenuItem to='/GestionV/Echeance/GrandLivreC' title='Garnd Livre Client' hasBullet={true} />
          <MenuItem to='/GestionV/Echeance/chiffreaffaires' title="Chiffres d'affaires" hasBullet={true} />
          <MenuItem to='/GestionV/Echeance//Soldeclient' title='Solde Client' hasBullet={true} />
        </MenuInnerWithSub>

        {/* Comptabilité */}
        <MenuInnerWithSub
          title='Comptabilite'
          to='/GestionV/Comptabilite'
          icon='/media/icons/duotune/finance/fin007.svg'
          hasArrow={true}
          menuPlacement='right-start'
          menuTrigger={`{default:'click', lg: 'hover'}`}
        >
          <MenuItem to='/GestionV/Comptabilite/BalanceClient' title='Balence Client' hasBullet={true} />
          <MenuItem to='/GestionV/Comptabilite/reglementsclients' title='Liste des réglements clients' hasBullet={true} />
        </MenuInnerWithSub>
      </MenuInnerWithSub>

      <MenuInnerWithSub title='Gestion de Achat' to='/GestionA' menuPlacement='bottom-start' menuTrigger='click'>
        {/* Fournisseurs */}
        <MenuInnerWithSub
          title="Fournisseurs"
          to='/GestionA/Fournisseurs'
          icon='/media/icons/duotune/finance/fourn.svg'
          hasArrow={true}
          menuPlacement='right-start'
          menuTrigger={`{default:'click', lg: 'hover'}`}
        >
          <MenuItem to='/GestionA/Fournisseurs/GestionFournisseurs' title='Gestion Fournisseurs' hasBullet={true} />
        </MenuInnerWithSub>

        {/* Achats */}
        <MenuInnerWithSub
          title="Achat"
          to='/GestionA/Achat'
          icon='/media/icons/duotune/finance/achat.svg'
          hasArrow={true}
          menuPlacement='right-start'
          menuTrigger={`{default:'click', lg: 'hover'}`}
        >
          <MenuItem to='/GestionA/Achat/Nouvelle-Demande-approvisionnement' title=" demande d'approvisionnement" hasBullet={true} />
          <MenuItem to='/GestionA/Achat/documentachat' title=" document Achat" hasBullet={true} />
        </MenuInnerWithSub>
        {/* Etat */}
        <MenuInnerWithSub
          title='Etat'
          to='/GestionA/Etat'
          icon='/media/icons/duotune/finance/status.svg'
          hasArrow={true}
          menuPlacement='right-start'
          menuTrigger={`{default:'click', lg: 'hover'}`}
        >
          <MenuItem to='/GestionA/Etat/Grand-Livre-fornisseur' title='Grand Livre Fournisseur ' hasBullet={true} />
          <MenuItem to='/GestionA/Etat/chiffre-affaire-fornisseur' title="Chiffre D'affaire Fourniseur" hasBullet={true} />
          <MenuItem to='/GestionA/Etat/TVA-Achat' title='TVA Achat' hasBullet={true} />
          <MenuItem to='/GestionA/Etat/Details-fournisseur' title='Details Fournisseur' hasBullet={true} />
          <MenuItem to='/GestionA/Etat/Balance-fournisseur' title='Balance Fournisseur' hasBullet={true} />
          <MenuItem to='/GestionA/Etat/Solde-fournisseur' title='Solde Fournisseur' hasBullet={true} />

        </MenuInnerWithSub>
      </MenuInnerWithSub>

      <MenuInnerWithSub title='Gestion de Stock' to='/Gestion-de-Stock' menuPlacement='bottom-start' menuTrigger='click'>
        {/* Document de stock  */}
        <MenuInnerWithSub
          title="Document de Stock"
          to='/Gestion-de-Stock/Document-de-stock'
          icon='/media/icons/duotune/communication/com012.svg'
          hasArrow={true}
          menuPlacement='right-start'
          menuTrigger={`{default:'click', lg: 'hover'}`}
        >
          <MenuItem to='/Document-de-stock/Liste-des-documents' title=' documents' hasBullet={true} />
          <MenuItem to='/Document-de-stock/Ajouter-Bon-Retour' title=' Bon de Retour' hasBullet={true} />

        </MenuInnerWithSub>

        {/* Inventaire */}
        <MenuInnerWithSub
          title="Inventaire"
          to='/Gestion-de-Stock/Inventaire'
          icon='/media/icons/duotune/communication/com012.svg'
          hasArrow={true}
          menuPlacement='right-start'
          menuTrigger={`{default:'click', lg: 'hover'}`}
        >
          <MenuItem to='/Gestion-de-Stock/Inventaire/Saisie-Inventaire' title='Saisie Inventaire' hasBullet={true} />
          <MenuItem to='/Gestion-de-Stock/Inventaire/Validation-Inventaire' title='Validation Inventaire' hasBullet={true} />
          <MenuItem to='/Gestion-de-Stock/Inventaire/Interroger-Inventaire' title='Interroger Inventaire' hasBullet={true} />
          <MenuItem to='/Gestion-de-Stock/Inventaire/Etat-Stock' title='Etat de Stock' hasBullet={true} />
          <MenuItem to='/Gestion-de-Stock/Inventaire/Mouvement-Article' title='Mouvement des Articles' hasBullet={true} />
          <MenuItem to='/Gestion-de-Stock/Inventaire/Article-perime' title='Article perime' hasBullet={true} />
        </MenuInnerWithSub>

        {/* Interrogation  */}
        <MenuInnerWithSub
          title="Interrogation"
          to='/Gestion-de-Stock/Interrogation'
          icon='/media/icons/duotune/communication/com012.svg'
          hasArrow={true}
          menuPlacement='right-start'
          menuTrigger={`{default:'click', lg: 'hover'}`}
        >
          <MenuItem to='/Gestion-de-Stock/Interrogation/Interogger-Famille' title='Interrogation' hasBullet={true} />
        </MenuInnerWithSub>

        {/* IStock */}
        <MenuInnerWithSub
          title="Stock"
          to='/Gestion-de-Stock/Stock'
          icon='/media/icons/duotune/communication/com012.svg'
          hasArrow={true}
          menuPlacement='right-start'
          menuTrigger={`{default:'click', lg: 'hover'}`}
        >
          <MenuItem to='/Gestion-de-Stock/Stock/Recalculer-CMUP' title='Recalculer CMUP' hasBullet={true} />
          <MenuItem to='/Gestion-de-Stock/Stock/Correction-CMUP' title='Corretion CMUP' hasBullet={true} />
        </MenuInnerWithSub>

      </MenuInnerWithSub>

      <MenuInnerWithSub title='Gestion de Caisse' to='/GestionCaisse' menuPlacement='bottom-start' menuTrigger='click'>

        {/* Gestion des reglements */}
        <MenuInnerWithSub
          title="Gestion de Reglements"
          to='/GestionCaisse/GestionReglements'
          icon='/media/icons/duotune/finance/fin001.svg'
          hasArrow={true}
          menuPlacement='right-start'
          menuTrigger={`{default:'click', lg: 'hover'}`}
        >
          <MenuItem to='/GestionCaisse/GestionReglements/ReglementColure' title='Reglement Colures' hasBullet={true} />
          <MenuItem to='/GestionCaisse/GestionReglements/ReglementTransferes' title='Reglement Transferes' hasBullet={true} />
          <MenuItem to='/GestionCaisse/GestionReglements/ReglementAvoir' title='Reglement Avoir' hasBullet={true} />
          <MenuItem to='/GestionCaisse/GestionReglements/ReglementClient' title='Reglement CLient ' hasBullet={true} />
          <MenuItem to='/GestionCaisse/GestionReglements/ReglementGeneral' title='Reglement General' hasBullet={true} />
        </MenuInnerWithSub>
        {/* Gestion des Caisse */}
        <MenuInnerWithSub
          title="Gestion de Caisse"
          to='/GestionCaisse/GestionCaisse'
          icon='/media/icons/duotune/finance/fin007.svg'
          hasArrow={true}
          menuPlacement='right-start'
          menuTrigger={`{default:'click', lg: 'hover'}`}
        >
          <MenuItem to='/GestionCaisse/GestionCaisse/ReglementInternes' title='Reglement Caisse Internes' hasBullet={true} />
          <MenuItem to='/GestionCaisse/GestionCaisse/ChangerCaisse' title='Changer Caisse' hasBullet={true} />
          <MenuItem to='/GestionCaisse/GestionCaisse/RecapCaisse' title='Recap Caisse' hasBullet={true} />

        </MenuInnerWithSub>
        {/* Gestion des Retenue */}
        <MenuInnerWithSub
          title="Gestion de Retenue"
          to='/GestionCaisse/GestionRetenue'
          icon='/media/icons/duotune/finance/fin008.svg'
          hasArrow={true}
          menuPlacement='right-start'
          menuTrigger={`{default:'click', lg: 'hover'}`}
        >
          <MenuItem to='/GestionCaisse/GestionRetenue/Retenue' title='Retenue' hasBullet={true} />
        </MenuInnerWithSub>
      </MenuInnerWithSub>

      <MenuInnerWithSub title='Gestion de Garage' to='/GestionGarage' menuPlacement='bottom-start' menuTrigger='click'>
        {/* Gestion de vehicule */}
        <MenuInnerWithSub
          title="Vehicule"
          to='/GestionGarage/vehicule'
          icon='/media/icons/duotune/general/vehicle.svg'
          hasArrow={true}
          menuPlacement='right-start'
          menuTrigger={`{default:'click', lg: 'hover'}`}
        >
          <MenuItem to='/GestionGarage/vehicule/GestionVehicule' title='Gestion Vehicules' hasBullet={true} />
        </MenuInnerWithSub>

        {/* Gestion des Ateliers  */}
        <MenuInnerWithSub
          title="Atelier"
          to='/GestionGarage/Atelier'
          icon='/media/icons/duotune/general/gara.svg'
          hasArrow={true}
          menuPlacement='right-start'
          menuTrigger={`{default:'click', lg: 'hover'}`}
        >
          <MenuItem to='/GestionGarage/Atelier/GestionAtelier' title='Gestion Atelier' hasBullet={true} />
        </MenuInnerWithSub>
        {/* Gestion Gamme Operatoire */}
        <MenuInnerWithSub
          title="Gamme Operatoire"
          to='/GestionGarage/GammeOperatoire'
          icon='/media/icons/duotune/general/page.svg'
          hasArrow={true}
          menuPlacement='right-start'
          menuTrigger={`{default:'click', lg: 'hover'}`}
        >
          <MenuItem title='Gestion Gammes Operatoires' to='/GestionGarage/GammeOperatoire/GestionGammeO' hasBullet={true}></MenuItem>
        </MenuInnerWithSub>
        {/* Gestion Symptomes */}
        <MenuInnerWithSub
          title="Symptomes"
          to='/GestionGarage/Symptomes'
          icon='/media/icons/duotune/general/warn.svg'
          hasArrow={true}
          menuPlacement='right-start'
          menuTrigger={`{default:'click', lg: 'hover'}`}
        >
          <MenuItem to='/GestionGarage/Symptomes/GestionSymptomes' title='Gestion Symptome' hasBullet={true} />
        </MenuInnerWithSub>

        {/* Gestion Remedes */}
        <MenuInnerWithSub
          title="Remedes"
          to='/GestionGarage/Remedes'
          icon='/media/icons/duotune/general/cog.svg'
          hasArrow={true}
          menuPlacement='right-start'
          menuTrigger={`{default:'click', lg: 'hover'}`}
        >
          <MenuItem to='/GestionGarage/Remedes/GestionRemedes' title='Gestion Remede' hasBullet={true} />
        </MenuInnerWithSub>

        {/* Gestion Reparation */}
        <MenuInnerWithSub
          title="Ordre  Reparation"
          to='/GestionGarage/OrdreReparation'
          icon='/media/icons/duotune/general/general.svg'
          hasArrow={true}
          menuPlacement='right-start'
          menuTrigger={`{default:'click', lg: 'hover'}`}
        >
          <MenuItem to='/GestionGarage/OrdreReparation/OR' title='Gestion Ordres de Reparation' hasBullet={true} />
        </MenuInnerWithSub>
        {/* Gestion Reception */}
        <MenuInnerWithSub
          title="Reception"
          to='/GestionGarage/Reception'
          icon='/media/icons/duotune/general/doc.svg'
          hasArrow={true}
          menuPlacement='right-start'
          menuTrigger={`{default:'click', lg: 'hover'}`}
        >
          <MenuItem to='/GestionGarage/Reception/ReceptionVehicule' title='Reception Vehicule' hasBullet={true} />
          <MenuItem to='/GestionGarage/Reception/vehiculereceptionner' title='Liste de Vehicules Receptionner' hasBullet={true} />
        </MenuInnerWithSub>
        {/* Rendez-Vous */}
        <MenuInnerWithSub
          title="Rendez-Vous"
          to='/GestionGarage/RendezVous'
          icon='/media/icons/duotune/general/calendar.svg'
          hasArrow={true}
          menuPlacement='right-start'
          menuTrigger={`{default:'click', lg: 'hover'}`}
        >
          <MenuItem to='/GestionGarage/RendezVous/PRendezvous' title='Pre Rendez-vous' hasBullet={true} />
          <MenuItem to='/GestionGarage/RendezVous/PriseRendezvous' title='Prise Rendez-vous' hasBullet={true} />
          <MenuItem to='/GestionGarage/RendezVous/Liste-Rendez-vous-encours' title='Liste Rendez-vous en cours' hasBullet={true} />
        </MenuInnerWithSub>
        {/* Suivi Etat*/}
        <MenuInnerWithSub
          title="Intervention"
          to='/GestionGarage/Intervention'
          icon='/media/icons/duotune/general/repair.svg'
          hasArrow={true}
          menuPlacement='right-start'
          menuTrigger={`{default:'click', lg: 'hover'}`}
        >
          <MenuItem to='/GestionGarage/Intervention/ProchaineIntervention' title='Prochaine Intervention' hasBullet={true} />
        </MenuInnerWithSub>
      </MenuInnerWithSub>
    </>
  )
}
