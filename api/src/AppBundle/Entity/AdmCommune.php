<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * AdmCommune
 *
 * @ORM\Table(name="adm_commune", indexes={@ORM\Index(name="IDX_7C75D517662DABFB", columns={"poviat_id"})})
 * @ORM\Entity
 */
class AdmCommune
{
    /**
     * @var string
     *
     * @ORM\Column(name="name", type="string", length=35, nullable=true)
     */
    private $name;

    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="SEQUENCE")
     * @ORM\SequenceGenerator(sequenceName="adm_commune_id_seq", allocationSize=1, initialValue=1)
     */
    private $id;

    /**
     * @var \AppBundle\Entity\AdmPoviat
     *
     * @ORM\ManyToOne(targetEntity="AppBundle\Entity\AdmPoviat")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="poviat_id", referencedColumnName="id")
     * })
     */
    private $poviat;


}

