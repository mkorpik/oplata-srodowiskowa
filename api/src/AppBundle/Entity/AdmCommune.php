<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;

/**
 * AdmCommune
 * @ApiResource(attributes={"filters"={"commune.search_filter"}})
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

    /**
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * @param string $name
     */
    public function setName($name)
    {
        $this->name = $name;
    }

    /**
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @param int $id
     */
    public function setId($id)
    {
        $this->id = $id;
    }

    /**
     * @return AdmPoviat
     */
    public function getPoviat()
    {
        return $this->poviat;
    }

    /**
     * @param AdmPoviat $poviat
     */
    public function setPoviat($poviat)
    {
        $this->poviat = $poviat;
    }



}

